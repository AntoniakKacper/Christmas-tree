import { Group, Object3D, Vector3 } from 'three';
import createTrunk from './trunk.js';
import createBranch from './branch.js';

import renderer from '../core/renderer.js';

const degreesToRadians = degrees => degrees * (Math.PI/180);

const rotateObject = (object, degreeX = 90, degreeY= 0, degreeZ=0) => {
    object.rotation.set(degreesToRadians(degreeX), degreesToRadians(degreeY), degreesToRadians(degreeZ))

}

const renderBranch = (levelNumber, maxNumberOfLevels, branchWidth, density, treeHeight) => {
    const random = Math.random();
    const branchWidthOnLevel = (branchWidth - levelNumber / maxNumberOfLevels * branchWidth) * random;

    const branch = createBranch(branchWidthOnLevel);
    const levelPositionY = - treeHeight/2 + (treeHeight * 0.1) + levelNumber/density;

    const levelPositionZ = branchWidthOnLevel / 2;
    branch.position.set(0 ,levelPositionZ, 0);
   
    const rotatableBranch = new Object3D();
    rotatableBranch.add(branch);
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

const renderLevel = (levelNumber, maxNumberOfLevels, branchWidth, density, treeHeight) => {
    const groupLevel = new Object3D();
    const branchesOnLevel = (maxNumberOfLevels - levelNumber) * 2;
    for (let branchNumber = 0; branchNumber < branchesOnLevel; branchNumber++) {
        let branch = renderBranch(levelNumber, maxNumberOfLevels, branchWidth, density, treeHeight);

        rotateObject(branch, 90,  0, (360/branchesOnLevel) * branchNumber);
        groupLevel.add(branch);
    }
    return groupLevel;
}


export const renderTree = (treeHeight = 30, branchWidth = 15, density = 4) => {
    const maxNumberOfLevels = treeHeight * density * 0.9;
    const trunk = createTrunk(treeHeight);
    for(let treeLevel = 0; treeLevel < maxNumberOfLevels; treeLevel++) {
        trunk.add(renderLevel(treeLevel, maxNumberOfLevels, branchWidth, density, treeHeight))
    }
    return trunk;
}