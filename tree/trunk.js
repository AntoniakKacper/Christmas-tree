import * as THREE from "three";


const createTrunk = (treeHeight) => {
  const trunkGeometry = new THREE.CylinderGeometry(treeHeight/250, treeHeight/25, treeHeight, 80);
const trunkMaterial = new THREE.MeshBasicMaterial({
  color: 0x781c1c,
});
const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
trunk.position.set(0, treeHeight / 2 ,0);

return trunk;
}


export default createTrunk;