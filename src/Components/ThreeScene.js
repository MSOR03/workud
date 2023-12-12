import React, { useEffect } from 'react';
import * as THREE from 'three';
import earthTexture from '../Images/imgscene.jpg'; // Reemplaza con la ruta correcta
import styles from "../Styles/SceneOne.module.css"

// ...

const ThreeScene = () => {
  useEffect(() => {
    // Configuración de la escena
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Configura el fondo como transparente
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('scene-container').appendChild(renderer.domElement);

    // Crear una esfera con textura
    const geometry = new THREE.SphereGeometry(2, 32, 32);
    const texture = new THREE.TextureLoader().load(earthTexture);
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // Configuración de la cámara
    camera.position.z = 5;

    // Animación
    const animate = () => {
      requestAnimationFrame(animate);

      // Ajusta el tamaño del renderizador al cambiar el tamaño de la ventana
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

      // Rotar la esfera (Tierra)
      earth.rotation.y += 0.01;

      // Renderizar la escena
      renderer.render(scene, camera);
    };

    animate();
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
  
    window.addEventListener('resize', handleResize);

    // Limpiar la escena al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
      const sceneContainer = document.getElementById('scene-container');
      if (sceneContainer) {
        sceneContainer.removeChild(renderer.domElement);
      }
    };
  }, []);

  

  return (
    <div className={styles.container}>
      <div className={styles.sceneContainer} id="scene-container" />
      <div className={styles.textContainer}>

      </div>
    </div>
  );
};

export { ThreeScene };

