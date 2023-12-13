import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import earthTexture from '../Images/texture.jpg';
import styles from "../Styles/SceneOne.module.css";

const ThreeScene = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let zoom = 5;
    let isMouseDown = false;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    const container = document.getElementById('scene-container');
    container.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(2, 32, 32);
    const texture = new THREE.TextureLoader().load(earthTexture);
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    camera.position.z = zoom;

    const animate = () => {
      requestAnimationFrame(animate);

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

      earth.rotation.y += 0.001;

      // Actualizar la posición de la cámara basada en el movimiento del ratón
      const targetX = mouseX * 0.005;
      const targetY = mouseY * 0.005;

      camera.position.x += (targetX - camera.position.x) * 0.1;
      camera.position.y += (-targetY - camera.position.y) * 0.1;

      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = - (event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleWheel = (event) => {
      // Ajustar la posición de la cámara basada en la rueda del mouse
      zoom += event.deltaY * 0.005;
      camera.position.z = zoom;
    };

    const handleMouseDown = () => {
      isMouseDown = true;
    };

    const handleMouseUp = () => {
      isMouseDown = false;
    };

    const handleMouseMoveDrag = (event) => {
      if (isMouseDown) {
        const deltaX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
        const deltaY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

        const rotationSpeed = 0.002;

        earth.rotation.y += deltaX * rotationSpeed;
        earth.rotation.x += deltaY * rotationSpeed;

        // Limitar la rotación en el eje X para evitar que la escena se invierta
        earth.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, earth.rotation.x));
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('wheel', handleWheel);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMoveDrag);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMoveDrag);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.sceneContainer} id="scene-container" ref={sceneRef} />
      <div className={styles.textContainer}>
        {/* Puedes agregar contenido adicional en el contenedor de texto si es necesario */}
      </div>
    </div>
  );
};

export { ThreeScene };
