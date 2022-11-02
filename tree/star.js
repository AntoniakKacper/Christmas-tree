import { Mesh, MeshStandardMaterial, TorusKnotGeometry } from 'three';


export const createStar = (height = 30) => {
    const starGeometry = new TorusKnotGeometry( 2 * height * 0.1, 0.3 * height * 0.1, 64, 8, 20, 3 );
    const starMaterial = new MeshStandardMaterial( { color: 0xffff00 } );
    
    const star = new Mesh( starGeometry, starMaterial );
    star.scale.set(0.2,0.2,0.2);
    star.position.set(0, height, 0);
    
    return star;
}

export default createStar;