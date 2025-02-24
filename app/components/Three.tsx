'use client';
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AmbientLight, MeshPhysicalMaterial, PerspectiveCamera, PointLight, Scene, WebGLRenderer } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Three = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;

      // Initialize your Three.js scene here
      const scene = new Scene();
      const renderer = new WebGLRenderer({ canvas: canvas, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.shadowMap.enabled = true;

      // Ambient light
      const ambientLight = new AmbientLight(0x999999); // Soft white light
      scene.add(ambientLight);

      // Point light with helper for visualization
      const light = new PointLight(0xffffff, 1000);
      light.position.set(10, 10, 10);
      scene.add(light);

      const lightHelper = new THREE.PointLightHelper(light, 1); // Optional for visualizing light
      scene.add(lightHelper);

      // Create and position camera
      const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 6;

      // Add OrbitControls for easy interaction with the scene
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.25;
      controls.screenSpacePanning = false;
      controls.maxPolarAngle = Math.PI / 2; // Prevent flipping

      // Load the GLB model
      const loader = new GLTFLoader();
      loader.load(
        "/force3.glb", // Path to the .gltf or .glb file in the public folder
        (gltf) => {
          const object = gltf.scene; // Get the scene from the loaded gltf model
          scene.add(object);
          object.scale.set(2, 2, 2); // Scale the model if needed

          // Apply crystal-like (glass) material
          object.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              // Crystal-like material
              child.material = new MeshPhysicalMaterial({
                color: 0xffffff, // Color of the crystal (white)
                reflectivity: 0.9, // High reflectivity for shiny effect
                roughness: 0.02, // Smooth surface
                metalness: 0, // Not metallic
                clearcoat: 1, // Glossy finish (polished)
                clearcoatRoughness: 0, // Smooth glossy finish
                transmission: 1, // Fully transparent (glass)
                opacity: 0.9, // Slight opacity for realistic glass
                envMapIntensity: 1.0, // Add reflections from an environment map
                ior: 1.45, // Index of Refraction for crystal-like transparency
              });

              child.castShadow = true;
              child.receiveShadow = true;
            }
          });

          // Animation loop
          const animate = () => {
            requestAnimationFrame(animate);

            // Update controls
            controls.update();

            // Render the scene
            renderer.render(scene, camera);
          };

          animate();
        },
        (xhr: ProgressEvent<EventTarget>) => {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        (error: ErrorEvent) => {
          console.error("An error happened", error);
        }
      );


      // Resize listener
      const handleResize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default Three;
