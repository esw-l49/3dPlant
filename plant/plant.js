import * as THREE from '../node_modules/three/src/Three.js'
import wallWest from './wallWest.js';
// import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js'


const plant = new THREE.Group();//厂房

const floorShape = new THREE.Shape();
floorShape.moveTo(0, 0);
floorShape.lineTo(-66000, 0);
floorShape.lineTo(-66000, 118730);
floorShape.lineTo(-44000, 118730);
floorShape.lineTo(-44000, 334480);
floorShape.lineTo(116640, 334480);
floorShape.lineTo(116640, 0);
floorShape.lineTo(0, 0);
const floor = new THREE.ExtrudeGeometry(floorShape, { depth: 4000, bevelEnabled: false });
const material = new THREE.MeshLambertMaterial({ color: 0x555555, opacity: 0.9, transparent: true });
const floorMesh = new THREE.Mesh(floor, material);

plant.add(floorMesh, wallWest);

export default plant;

