import * as THREE from 'three';

const setupLights = (scene) => {

  const ambientLight = new THREE.AmbientLight(0x606060);
  scene.add(ambientLight);


  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(2, 2, 2);
  scene.add(directionalLight);


  const spotLight = new THREE.SpotLight(0xffffff, 1.5);
  spotLight.position.set(5, 10, 5);
  spotLight.target.position.set(0, 0, 0);
  scene.add(spotLight);
  scene.add(spotLight.target);


  const hemisphereLight = new THREE.HemisphereLight(0x00aaff, 0x001122, 1);
  scene.add(hemisphereLight);
};

export default setupLights;
