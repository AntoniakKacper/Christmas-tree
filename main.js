import "./style.css";
import renderer from './core/renderer.js';
import camera from './core/camera.js';
import light from './core/light.js';
import {createStar} from './tree/star.js';
import ambientLight from './core/ambientLight.js';
import {  Fog, PointLightHelper, Scene, AudioListener, AudioLoader, Audio } from 'three';


import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import ground from './tree/ground.js';
import { renderTree } from './tree/treeRenderer.js';
import { addSnowflakes, updateParticles } from "./tree/snowflakes";

let isPaying = false;
let scene = new Scene();
let tree = renderTree();
let star = createStar();

let renderId;

const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault() // This prevents the window from reloading
  let formdata = new FormData(this);
  const height = Number.parseInt(formdata.get("height"));
  const branchWidth = Number.parseInt(formdata.get("branchWidth"));
  const density = Number.parseFloat(formdata.get("density"));
  scene.remove(tree);
  tree = renderTree(height, branchWidth, density);
  scene.add(tree);
  scene.remove(star);
  star = createStar(height);
  scene.add(star)
});

document.getElementById("music").addEventListener("click", () => {
  isPaying 
    ? sound.pause()
    : sound.play()
  isPaying = !isPaying;
})

// renderer.render(scene, camera);

// const branch = createBranch();
// branch.position.set(0, 5, 9.5);

const lightHelper = new PointLightHelper(light);

// const texture = new THREE.TextureLoader().load('images/background.jpeg');
// scene.background = texture;
const controls = new OrbitControls(camera, renderer.domElement);

scene.add(light, ambientLight);
scene.add(lightHelper);
scene.add(light);

scene.add(tree);
// scene.add(branch);


scene.add(star) ;

scene.add(ground)
scene.fog = new Fog(0xcce0ff, 500, 10000);

const particles = addSnowflakes();
scene.add(particles);

renderer.render(scene, camera);
// muza

const listener = new AudioListener();
camera.add( listener );

// create a global audio source
const sound = new Audio( listener );

// load a sound and set it as the Audio object's buffer
const audioLoader = new AudioLoader();
audioLoader.load( 'audio.mp3', function( buffer ) {
	sound.setBuffer( buffer );
	sound.setLoop( true );
	sound.setVolume( 0.2 );
});

//
//s
// updateParticles(particles);
const animate2 = () => {
  const renderId = requestAnimationFrame(animate2);
  // torus.rotation.x += 0.01;
  // trunk.rotation.y += 0.005;
  // star.rotation.y += 0.005;
  updateParticles(particles);
  controls.update();
  // scene = new Scene();
  renderer.render(scene, camera);
};
// sound.play();

animate2();