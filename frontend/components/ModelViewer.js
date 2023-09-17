import React, { useRef, useEffect } from 'react';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { Scene, PerspectiveCamera, WebGLRenderer } from 'three';

const ModelViewer = () => {
  const containerRef = useRef();

  useEffect(() => {
    // Create a scene
    const scene = new Scene();

    // Create a camera
    const camera = new PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Create a renderer
    const renderer = new WebGLRenderer();
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Load the 3D model
    const loader = new GLTFLoader();
    loader.load('./utils/network/scene.gltf', (gltf) => {
      const model = gltf.scene;
      scene.add(model);

      // Animation or additional setup can be added here

      // Render the scene
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };

      animate();
    });

    return () => {
      // Cleanup
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} />;
};

export default ModelViewer;
