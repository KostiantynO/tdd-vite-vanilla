import { WebGLRenderer } from 'three';
import { getRefs } from '../../common/utils/getRefs';

const { canvas } = getRefs;

export const renderer = new WebGLRenderer({
  canvas,
});

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(window.innerWidth, window.innerHeight);

// renders black screen
// renderer.render(scene, camera);
