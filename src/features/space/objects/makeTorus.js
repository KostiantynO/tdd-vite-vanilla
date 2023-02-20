import { Mesh, MeshStandardMaterial, TorusGeometry } from 'three';

export const makeTorus = color => {
  const geometry = new TorusGeometry(10, 3, 16, 100);
  const material = new MeshStandardMaterial({ color });
  const torus = new Mesh(geometry, material);
  return torus;
};
