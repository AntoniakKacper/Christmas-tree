import * as THREE from "three";
import { TREE_HEIGHT } from '../constans.js';



const trunkGeometry = new THREE.CylinderGeometry(0.05, 1.5, TREE_HEIGHT, 80);
const trunkMaterial = new THREE.MeshBasicMaterial({
  color: 0x781c1c,
});
const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
trunk.position.set(0, TREE_HEIGHT / 2 ,0);


export default trunk;