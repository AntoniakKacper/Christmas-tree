import { Mesh, MeshStandardMaterial, TorusKnotGeometry } from 'three';
import { TREE_HEIGHT} from '../constans.js';

const starGeometry = new TorusKnotGeometry( 10, 2, 64, 8, 20, 3 );
const starMaterial = new MeshStandardMaterial( { color: 0xffff00 } );
const star = new Mesh( starGeometry, starMaterial );
star.scale.set(0.2,0.2,0.2);
star.position.set(0, TREE_HEIGHT, 0);

export default star;