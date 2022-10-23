import { TREE_HEIGHT } from '../constans.js';
import { Group, Object3D, Vector3 } from 'three';
import trunk from './trunk.js';
import createBranch from './branch.js';

import renderer from '../core/renderer.js';

const degreesToRadians = degrees => degrees * (Math.PI/180);

const rotateObject = (object, degreeX = 90, degreeY= 0, degreeZ=0) => {
    object.rotation.set(degreesToRadians(degreeX), degreesToRadians(degreeY), degreesToRadians(degreeZ))

}

const renderBranch = (levelNumber, treeHeight) => {
    const branchWidth = 10 - levelNumber * 0.18;
    const branch = createBranch(branchWidth);

    const levelPositionY = - treeHeight/2  + (treeHeight * 0.1) + levelNumber/2;
    const levelPositionZ = branchWidth / 2;
    branch.position.set(0 ,levelPositionZ, 0);
   
    const rotatableBranch = new Object3D();
    rotatableBranch.add(branch);
    // branch.add(rightBranch);
    rotatableBranch.position.set(0 ,levelPositionY, 0);

    return rotatableBranch;
}

//TODO mniej galezi na gorze
//TODO pramert zageszczenia per poziom
//TODO pramert zageszczenia poziomow
//TODO paramete wysokosci
//TODO paramete dlugosci galezi
//TODO igly i snieg
//TODO muza

const renderLevel = (levelNumber, treeHeight) => {
    const groupLevel = new Object3D();
    const branchesOnLevel = treeHeight - levelNumber - 5;
    for (let branchNumber = 0; branchNumber < 100; branchNumber++) {
        let branch = renderBranch(levelNumber, treeHeight);

        rotateObject(branch, 90,  0, branchNumber * 5);
        groupLevel.add(branch);
    }
    return groupLevel;
}


export const renderTree = (treeHeight = TREE_HEIGHT) => {
    for(let treeLevel = 0; treeLevel < treeHeight * 2 - 5; treeLevel++) {
        trunk.add(renderLevel(treeLevel, treeHeight))
    }
    return trunk;
}