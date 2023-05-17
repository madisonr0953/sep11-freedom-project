import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import { FirstPersonControls } from 'https://cdn.skypack.dev/three@0.136/examples/jsm/controls/FirstPersonControls.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
scene.background =  new THREE.Color(0x0000FF)
renderer.setSize(window.innerWidth, window.innerHeight);

const textures = new THREE.TextureLoader().load('spacer.jpg')
scene.background = textures;

camera.position.z = 5
camera.position.y = 0.5
document.body.appendChild(renderer.domElement);
var directionalLight = new THREE.DirectionalLight({ color: 0xFFFFFF, intensity: 100})
directionalLight.position.set(0,1,0)
directionalLight.castShadow = true;
scene.add(directionalLight);
var ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambientLight);




const floorGeometry = new THREE.PlaneGeometry(100, 100);
const floorMaterial = new THREE.MeshBasicMaterial({ color : 0x013220});
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2; // Rotate the floor to be horizontal
scene.add(floor);

var cubeText = new THREE.TextureLoader().load('brick.jpg')


const geometry = new THREE.BoxGeometry(15, 10, 1);
const material = new THREE.MeshBasicMaterial({ map: cubeText });
const cube = new THREE.Mesh(geometry, material);

cube.position.x = 5;
cube.position.y = 0.5;
cube.position.z = -22.5;

scene.add(cube);

var cubeText1 = new THREE.TextureLoader().load('brick.jpg')

const geometry1 = new THREE.BoxGeometry(15, 10, 1);
const material1 = new THREE.MeshBasicMaterial({ map: cubeText1 });
const cube1 = new THREE.Mesh(geometry1, material1);

cube1.position.x = 5;
cube1.position.y = 0.5;
cube1.position.z = 10;

scene.add(cube1);

const geometry2 = new THREE.BoxGeometry(1, 10, 32);
const material2 = new THREE.MeshBasicMaterial({ map: cubeText1 });
const cube2 = new THREE.Mesh(geometry2, material2);

cube2.position.x = 12.5;
cube2.position.y = 5;
cube2.position.z = -6;
scene.add(cube2);




var wallText = new THREE.TextureLoader().load('brick.jpg')
const wallGeometry = new THREE.BoxGeometry(1, 4, 1);
const wallMaterial = new THREE.MeshBasicMaterial({ map: wallText });
const walls = [];

const maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 1,1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 1,1, 0, 0, 1, 1, 1, 1, 1, 1,1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 0, 0, 1, 1, 0, 0,1, 1, 1, 0, 0, 1, 1, 1, 1, 1,1, 0, 0, 1,1, 0, 0, 1, 1, 1, 1, 1, 1,1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 0, 0,1, 1, 1, 0, 0, 1, 1, 1, 1, 1,1, 0, 0, 1,1, 0, 0, 1, 1, 1, 1, 1, 1,1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 0, 0,1, 0, 0, 0, 0, 0, 0, 1, 0, 0,0, 0, 0, 1,1, 0, 0, 0, 0, 0, 1, 1, 1,1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 0, 0, 0, 0, 0, 0, 0,1, 0, 0, 0, 0, 0, 0, 1, 0, 0,0, 0, 0, 1,1, 0, 0, 0, 0, 0, 1, 1, 1,1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 0, 0, 0, 0, 0, 0, 0,1, 1, 1, 1, 1, 0, 0, 1, 1, 1,1, 1, 1, 1,1, 1, 1, 1, 0, 0, 1, 1, 1,1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 0, 0, 1, 1, 1, 0, 0,1, 1, 1, 1, 1, 0, 0, 1, 1, 1,1, 1, 1, 1,1, 1, 1, 1, 0, 0, 1, 1, 1,1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 0, 0, 1, 1, 1, 0, 0,1, 1, 1, 1, 1, 0, 0, 1, 1, 1,1, 1, 1, 1,1, 1, 1, 1, 0, 0, 1, 1, 1,1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 0, 0, 1, 1, 1, 0, 0,1, 1, 1, 1, 1, 0, 0, 0, 1, 0,0, 0, 0, 0,0, 0, 0, 0, 0, 0, 1, 1, 1,1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 0, 0, 1, 1, 1, 0, 0,1, 1, 1, 1, 1, 0, 0, 0, 1, 0,0, 0, 0, 0,0, 0, 0, 0, 0, 0, 1, 1, 1,1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 0, 0, 1, 1, 1, 0, 0,0, 0, 0, 0, 0, 1, 1, 1, 1, 0,0, 1, 1, 1,1, 1, 1, 1, 0, 0, 1, 1, 1,1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 0, 0, 1, 1, 1, 0, 0,0, 0, 0, 0, 0, 1, 1, 1, 1, 1,1, 1, 1, 1,1, 1, 1, 1, 0, 0, 1, 1, 1,1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 0, 0, 1, 1, 1, 1, 1,1, 1, 1, 0, 0, 1, 1, 1, 1, 1,1, 1, 1, 0,0, 0, 0, 0, 0, 0, 1, 1, 1,1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0,0, 0, 0, 0, 0, 1, 1, 1, 1, 1,1, 1, 1, 0, 0, 1, 1, 1, 1, 1,1, 1, 1, 0,0, 0, 0, 0, 0, 0, 1, 1, 1,1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0,0, 0, 0, 0, 0, 1, 1, 1, 1, 1,1, 1, 1, 0, 0, 1, 1, 1, 1, 1,1, 1, 1, 0,0, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0,0, 1, 1, 1, 1, 1, 1, 1, 1, 0,0, 1, 1, 0, 0, 1, 1, 1, 1, 1,1, 1, 1, 0,0, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0,0, 1, 1, 1, 1, 1, 1, 1, 1, 0,0, 1, 1, 0, 0, 1, 1, 1, 1, 1,1, 1, 1, 0,0, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 1, 1, 1, 1, 1, 1, 1, 1, 0,0, 1, 1, 0, 0, 1, 1, 1, 1, 1,1, 1, 1, 0,0, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1,],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0,0, 1, 1, 1, 1, 1, 1, 1, 1, 0,0, 1, 1, 0, 0, 1, 1, 1, 1, 1,1, 1, 1, 0,0, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0,0, 1, 1, 1, 1, 1, 1, 1, 1, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0,0, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0,0, 1, 1, 1, 1, 1, 1, 1, 1, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0,0, 1, 1, 0, 0, 0, 0, 0, 0,0, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0,0, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 0, 0, 1, 1, 1, 1, 1,1, 1, 1, 0,0, 1, 1, 0, 0, 0, 0, 0, 0,0, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0,0, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 0, 0, 1, 1, 1, 1, 1,1, 1, 1, 0,0, 0, 0, 0, 0, 1, 1, 1, 0,0, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0,0, 1, 1, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 1, 1, 1, 1, 1,1, 1, 1, 0,0, 0, 0, 0, 0, 1, 1, 1, 0,0, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0,0, 1, 1, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 1, 1, 1, 1, 1,1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 0,0, 0, 0, 0,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0,0, 1, 1, 0, 0, 1, 1, 1, 1, 0,0, 1, 1, 0, 0, 1, 1, 1, 1, 0,0, 0, 0, 0,0, 0, 0, 0, 0, 0, 1, 1, 0,0, 0, 0, 0,],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0,0, 1, 1, 0, 0, 1, 1, 1, 1, 1,1, 1, 1, 0, 0, 1, 1, 1, 1, 0,0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0,0, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0,0, 1, 1, 0, 0, 1, 1, 1, 1, 1,1, 1, 1, 0, 0, 1, 1, 1, 1, 0,0, 1, 1, 1,1, 1, 1, 1, 0, 0, 0, 0, 0,0, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 0, 0, 1, 1, 1, 0, 0,0, 0, 0, 0, 0, 1, 1, 1, 1, 0,0, 1, 1, 1,1, 1, 1, 1, 1, 1, 0, 0, 1,1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 0, 0,0, 0, 0, 0, 0, 1, 1, 1, 1, 1,1, 1, 1, 1,1, 1, 1, 1, 1, 1, 0, 0, 1,1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1,],



];
for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
        if (maze[i][j] === 1) {
            const wall = new THREE.Mesh(wallGeometry, wallMaterial);
            wall.position.set(j - Math.floor(maze[i].length / 1), 1, i - Math.floor(maze.length / 1.5));
            scene.add(wall);
            walls.push(wall);
        }
    }
}




var controls = new FirstPersonControls( camera, renderer.domElement )
controls.movementSpeed = 0.1
controls.lookVertical = false;
controls.lookSpeed = 0.005




function drawScene(){
    renderer.render(scene, camera);
    requestAnimationFrame(drawScene);
    controls.update(0.3)
    checkCollision();

}

drawScene();