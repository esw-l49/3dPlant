import * as THREE from '../node_modules/three/src/Three.js'


const geometry1 = new THREE.BoxGeometry(182640, 500, -7000);
const material1 = new THREE.MeshLambertMaterial({ color: 0x888888, opacity: 0.6 });
const wall = new THREE.Mesh(geometry1, material1);
wall.translateX(182640 / 2 - 66000);
wall.translateZ(-3500);

export default wall;