import {
  Mesh,
  MeshStandardMaterial,
  SphereGeometry,
  TextureLoader,
} from 'three';

import moonImg from '../../../assets/img/moon.jpg';
import normalImg from '../../../assets/img/normal.jpg';

const moonTexture = new TextureLoader().load(moonImg);
const normalTexture = new TextureLoader().load(normalImg);

export const makeMoon = () => {
  const geometry = new SphereGeometry(3, 32, 32);
  const material = new MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  });

  const moon = new Mesh(geometry, material);
  return moon;
};
