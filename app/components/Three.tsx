'use client';
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { AmbientLight, DirectionalLight, PerspectiveCamera, Scene, MeshToonMaterial } from 'three';


const Three = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;

      // Initialize your Three.js scene here
      const scene = new Scene();
      const camera = new PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true  });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.shadowMap.enabled = true; // Enable shadow map

      // Ambient light
      const ambientLight = new AmbientLight(0x999999); // soft white light
      scene.add(ambientLight);

      // Directional light for shadows
      const directionalLight = new DirectionalLight(0xffffff, 1);
      directionalLight.position.set(0, 5, 4); // Position the light
      directionalLight.castShadow = true; // Enable shadows for the light
      directionalLight.shadow.mapSize.width = 10000; // Set shadow map resolution
      directionalLight.shadow.mapSize.height = 10000;
      directionalLight.shadow.camera.near = 0.4; // Set shadow camera near and far planes
      directionalLight.shadow.camera.far = 250;
      scene.add(directionalLight);

      // Set camera position
      camera.position.z = 6;

      // Load the OBJ model
      const loader = new OBJLoader();
      loader.load(
        "/objforce.obj", // Path to the .obj file in the public folder
        (object: THREE.Object3D) => {
          // Called when the model is successfully loaded
          scene.add(object);
          object.scale.set(0.09, 0.09, 0.09);

          // Enable shadow for the model and set up material
          object.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              child.castShadow = true; // Enable the object to cast shadows
              child.receiveShadow = true; // Enable the object to receive shadows

              // Apply material for crystal-like effect
              child.material = new  MeshToonMaterial({
                color: 0xffffff, // Light blue color
                depthWrite:true,
                depthTest:true,
                opacity: 1,    // Transparency
                transparent: true, // Make it transparent
              });
            }
          });

          // Floating animation and gentle limited rotation
          const floatAmplitude = 0.3;
          const floatFrequency = 1;
          const floatOffset = 0.2;

          let rotationDirection = 1; // 1 for right, -1 for left
          const maxRotation = 0.3; // Maximum angle for rotation in radians (right)
          const minRotation = -0.2; // Minimum angle for rotation in radians (left)
          const rotationSpeed = 0.003; // Speed of rotation change
          let currentRotation = 0; // Current rotation value

          const animate = () => {
            requestAnimationFrame(animate);

            const time = Date.now() * 0.001;

            // Sine wave oscillation for floating up and down
            if (object) {
              object.position.x = floatOffset + floatAmplitude * Math.sin(time * floatFrequency);
              object.position.y = floatOffset + floatAmplitude * Math.cos(time * floatFrequency);
            }

            // Handle rotation: smoothly rotate left and right
            if (object) {
              if (rotationDirection === 1) {
                currentRotation += rotationSpeed;
                if (currentRotation >= maxRotation) {
                  rotationDirection = -1; // Switch to rotate left
                }
              } else {
                currentRotation -= rotationSpeed;
                if (currentRotation <= minRotation) {
                  rotationDirection = 1; // Switch to rotate right
                }
              }
              object.rotation.y = currentRotation; // Apply the rotation
            }

            // Render the scene
            renderer.render(scene, camera);
          };

          animate();
        },
        (xhr: ProgressEvent<EventTarget>) => {
          // Called while loading
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        (error:ErrorEvent) => {
          // Called if there's an error loading the model
          console.error("An error happened", error);
        }
      );
    }
  }, []);

  return <canvas ref={canvasRef}></canvas>;
  
};

export default Three;
