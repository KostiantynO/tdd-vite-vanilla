import { Scene, TextureLoader } from 'three';
import spaceBg from '../../assets/img/space.jpg';
import { avatar, moon } from './camera';

import { ambientLight, pointLight } from './lights';
import { makeStar } from './objects/makeStar';
import { makeTorus } from './objects/makeTorus';
import { colors } from './shared/colors';

const { brown } = colors;
export const torus = makeTorus(brown);
export const scene = new Scene();
const stars = Array(200).fill().map(makeStar);

const spaceTexture = new TextureLoader().load(spaceBg);

scene.background = spaceTexture;

scene.add(
  torus,
  ...stars,
  avatar,
  moon,
  pointLight,
  ambientLight
  // lightHelper
  // gridHelper
);
