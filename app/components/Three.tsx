'use client';
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; // Import the GLTFLoader
import { AmbientLight, Scene, MeshPhysicalMaterial } from 'three';

const Three = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;

      // Initialize your Three.js scene here
      const scene = new Scene();
      const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight)

      renderer.shadowMap.enabled = true; // Enable shadow map

      // Ambient light
      const ambientLight = new AmbientLight(0x999999); // soft white light
      scene.add(ambientLight);

      const light = new THREE.PointLight(0xffffff, 1000)
      light.position.set(10, 10, 10)
      scene.add(light)

      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    )

      // Set camera position
      camera.position.z = 6;

      // Load the GLB model
      const loader = new GLTFLoader();
      loader.load(
        "/force3.glb", // Path to the .gltf or .glb file in the public folder
        (gltf) => {
          // Called when the model is successfully loaded
          const object = gltf.scene; // Get the scene from the loaded gltf model
          scene.add(object);
          object.scale.set(2, 2, 2); // Scale the model if needed

          // Log the model to check the materials
          console.log(object);

         

          // Check if the materials are there
          object.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              console.log("Mesh material:", child.material);

              // Apply glass-like material
              child.material = new MeshPhysicalMaterial({
                color: 0xffffff, // Light gray color (adjust as needed)
                reflectivity:0.77,
                roughness:0.05,
                metalness:0,
                clearcoat:1,
                clearcoatRoughness:0.33,
                transmission:1,

              });

              child.castShadow = true; // Enable the object to cast shadows
              child.receiveShadow = true; // Enable the object to receive shadows
            }
          });


          const animate = () => {
            requestAnimationFrame(animate);
            

            // Render the scene
            renderer.render(scene, camera);
          };

          animate();
        },
        (xhr: ProgressEvent<EventTarget>) => {
          // Called while loading
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        (error: ErrorEvent) => {
          // Called if there's an error loading the model
          console.error("An error happened", error);
        }
      );
    }
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default Three;
