import { MathUtils, Mesh, MeshStandardMaterial, SphereGeometry } from 'three';
import { colors } from '../shared/colors';

const { white } = colors;

const makeStarMesh = () => {
  const sphereGeometry = new SphereGeometry(0.25, 24, 24);
  const starMaterial = new MeshStandardMaterial({ color: white });
  return new Mesh(sphereGeometry, starMaterial);
};

const arr = [0, 0, 0];
const randomize = () => MathUtils.randFloatSpread(100);

export const makeStar = () => {
  const star = makeStarMesh();
  const [x, y, z] = arr.map(randomize);
  star.position.set(x, y, z);
  return star;
};
