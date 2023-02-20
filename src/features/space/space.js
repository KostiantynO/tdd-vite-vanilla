// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { camera, moon } from './camera';
import { renderer } from './renderer';
import { scene, torus } from './scene';

// const controls = new OrbitControls(camera, renderer.domElement);

// game loop
export const animate = () => {
  // on each paint → call itself
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  // listens for mousemove
  // controls.update();

  moon.rotation.x += 0.005;

  // rerender the scene → to canvas
  renderer.render(scene, camera);
};

export const space = () => {
  animate();
};
