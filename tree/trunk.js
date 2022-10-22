import * as THREE from "three";

const geometry = new THREE.CylinderGeometry(5, 5, 10, 32);
const material = new THREE.MeshBasicMaterial({
  color: 0x781c1c,
  wireframe: true,
});
const trunk = new THREE.Mesh(geometry, material);

// scene.add(trunk);

// renderer.render(scene, camera);

export const animate = (renderer, scene, camera) => {
  requestAnimationFrame(animate);
  // torus.rotation.x += 0.01;
  trunk.rotation.y += 0.005;

  renderer.render(scene, camera);
};

// animate();