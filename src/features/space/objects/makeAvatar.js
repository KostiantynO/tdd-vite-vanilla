import { BoxGeometry, Mesh, MeshBasicMaterial, TextureLoader } from 'three';
import kostia from '../../../assets/img/kostia.jpg';

export const makeAvatar = () => {
  const avatarTexture = new TextureLoader().load(kostia);
  const geometry = new BoxGeometry(3, 3, 3);
  const material = new MeshBasicMaterial({ map: avatarTexture });
  return new Mesh(geometry, material);
};
