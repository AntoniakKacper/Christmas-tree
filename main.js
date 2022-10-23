import "./style.css";
import trunk from './tree/trunk';
import star from './tree/star.js';
import renderer from './core/renderer.js';
import camera from './core/camera.js';
import light from './core/light.js';
import ambientLight from './core/ambientLight.js';
import { AxesHelper, BufferGeometry, Fog, PointLightHelper, Scene } from 'three';


import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import ground from './tree/ground.js';
import createBranch from './tree/branch.js';
import { renderTree } from './tree/treeRenderer.js';
import { TREE_HEIGHT } from './constans.js';

const scene = new Scene();

renderer.render(scene, camera);

// const branch = createBranch();
// branch.position.set(0, 5, 9.5);

const lightHelper = new PointLightHelper(light);
const axesHelper = new AxesHelper( 5 );
axesHelper.position.set(10, 10, 10)
scene.add( axesHelper );
// const texture = new THREE.TextureLoader().load('images/background.jpeg');
// scene.background = texture;
const controls = new OrbitControls(camera, renderer.domElement);

scene.add(light, ambientLight);
scene.add(lightHelper);
scene.add( light );

scene.add(renderTree(TREE_HEIGHT))
// scene.add(branch);
// scene.add( star );

scene.add(ground)
scene.fog = new Fog(0xcce0ff, 500, 10000);

renderer.render(scene, camera);
//
//
//
const animate2 = () => {
  requestAnimationFrame(animate2);
  // torus.rotation.x += 0.01;
  // trunk.rotation.y += 0.005;
  // star.rotation.y += 0.005;

  controls.update();
  renderer.render(scene, camera);
};

animate2();
