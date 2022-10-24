import { CylinderGeometry, Mesh, MeshBasicMaterial } from 'three';

const branchMaterial = new MeshBasicMaterial({
    color: 0x0e7500,
});

const createBranch = (height) => {
    const branchGeometry = new CylinderGeometry( 0.01, 0.3, height, 50 );
    return new Mesh(branchGeometry, branchMaterial);
}

export default createBranch;