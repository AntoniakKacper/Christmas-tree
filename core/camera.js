import { PerspectiveCamera } from 'three';

const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.setZ(30);

export default camera;