import * as THREE from './node_modules/three/src/Three.js'
import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls.js'
import plant from './plant/plant.js';

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-800000, 800000, -800000, 800000, 0.1, 1000000);
camera.position.set(25000, 35000, -300000);
camera.lookAt(scene.position);
const renderer = new THREE.WebGLRenderer();

//添加平行光源
const light = new THREE.DirectionalLight(0xffffff);
scene.add(light);

// 添加环境光
const ambient = new THREE.AmbientLight(0x888888);
scene.add(ambient);

scene.add(plant);


renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xb9d3ff, 1);//设置背景色
document.body.appendChild(renderer.domElement);

// 插入坐标系
const axisHelper = new THREE.AxesHelper(250000);
scene.add(axisHelper);

const render = function () {
    requestAnimationFrame(render);

    // cube.rotation.x += 0.01
    // cube.rotation.y += 0.01

    renderer.render(scene, camera);
}
render();
const controls = new OrbitControls(camera, renderer.domElement);
// controls.addEventListener('change', render);