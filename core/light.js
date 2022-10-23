import { AmbientLight, PointLight } from 'three';

const light = new PointLight( 0xffffff );
light.position.set(20, 2, 5);

export default light;