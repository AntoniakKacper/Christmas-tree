import "./style.css";
// import { animate } from './tree/trunk';

import * as THREE from "three";

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const textureLoader = new THREE.TextureLoader();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const trunkGeometry = new THREE.CylinderGeometry(5, 5, 10, 32);
const trunkMaterial = new THREE.MeshBasicMaterial({
  color: 0x781c1c,
});
const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);

const branchGeometry = new THREE.CylinderGeometry(1, 1, 15, 32);
const branchMaterial = new THREE.MeshBasicMaterial({
  color: 0x0e7500,
});

const branch = new THREE.Mesh(branchGeometry, branchMaterial);


const starGeometry = new THREE.TorusKnotGeometry( 10, 2, 64, 8, 20, 3 );
const starMaterial = new THREE.MeshStandardMaterial( { color: 0xffff00 } );
const star = new THREE.Mesh( starGeometry, starMaterial );
star.scale.set(0.2,0.2,0.2);
star.position.set(0, 50, 0);

const light = new THREE.PointLight( 0xffffff );
light.position.set(20, 2, 5);

const ambientLight = new THREE.AmbientLight(0xffffff, 1000);
scene.add(light, ambientLight);

const texture = new THREE.TextureLoader().load('images/background.jpeg');
scene.background = texture;

const lightHelper = new THREE.PointLightHelper(light);
scene.add(lightHelper);

scene.add( light );
scene.add( star );
scene.fog = new THREE.Fog(0xcce0ff, 500, 10000);

scene.add(trunk);
// scene.add(branch);

renderer.render(scene, camera);

const controls = new OrbitControls(camera, renderer.domElement);

const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(100, 100, 10, 10),
  new THREE.MeshBasicMaterial( {
    map: textureLoader.load("ground.jpeg")
   } ),
)

plane.rotation.set(-Math.PI / 2, 0, 0)
plane.receiveShadow = true
scene.add(plane)

const animate2 = () => {
  requestAnimationFrame(animate2);
  // torus.rotation.x += 0.01;
  trunk.rotation.y += 0.005;
  star.rotation.y += 0.005;

  controls.update();

  renderer.render(scene, camera);
};

animate2();

// animate(renderer, scene, camera);
