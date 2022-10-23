import * as THREE from 'three';

const textureLoader = new THREE.TextureLoader();
const groundTexture = textureLoader.load("ground.jpeg");
groundTexture.wrapS = THREE.RepeatWrapping;
groundTexture.wrapT = THREE.RepeatWrapping;
groundTexture.repeat.set(3, 3);
const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 100, 10, 10),
    new THREE.MeshBasicMaterial( {
        map: groundTexture
    })
)

ground.rotation.set(-Math.PI / 2, 0, 0)
ground.receiveShadow = true

export default ground;