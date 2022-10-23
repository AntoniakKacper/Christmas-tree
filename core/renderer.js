import { WebGLRenderer } from 'three';

const renderer = new WebGLRenderer({
  antialias: true,
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

export default renderer;