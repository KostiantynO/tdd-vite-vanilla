import { PerspectiveCamera } from 'three';
import { makeAvatar } from './objects/makeAvatar';
import { makeMoon } from './objects/makeMoon';

export const moon = makeMoon();
moon.position.z = 30;
moon.position.x = -10;

export const avatar = makeAvatar();
avatar.position.z = -5;
avatar.position.x = 2;

export const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 30;
camera.position.x = -3;

export const moveCamera = () => {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  avatar.rotation.y += 0.01;
  avatar.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
};

// document.body.onscroll = moveCamera;
window.addEventListener('scroll', moveCamera, { passive: true });
