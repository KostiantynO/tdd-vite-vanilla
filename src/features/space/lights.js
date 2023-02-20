import { AmbientLight, PointLight } from 'three';
import { colors } from './shared/colors';

const { white } = colors;

export const pointLight = new PointLight(white);
pointLight.position.set(5, 5, 5);

export const ambientLight = new AmbientLight(white);
// export const lightHelper = new PointLightHelper(pointLight);
// export const gridHelper = new GridHelper(200, 50);
