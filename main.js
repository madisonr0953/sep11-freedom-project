import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import { FirstPersonControls } from 'https://cdn.skypack.dev/three@0.136/examples/jsm/controls/FirstPersonControls.js';

var person

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const floorGeometry = new THREE.PlaneGeometry(10, 10);
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2; // Rotate the floor to be horizontal
scene.add(floor);


// Create maze walls
const wallGeometry = new THREE.BoxGeometry(1, 2, 1);
const wallMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
const walls = [];
// Define your maze structure here, e.g.:
const maze = [
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 1, 1, 1, 1]
    [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
    [1, 0, 0, 1, 1, 0, 0, 1, 1, 1],
    [1, 1, 0, 0, 0, 1, 0, 1, 1, 1],
    [1, 0, 0, 1, 0, 1, 0, 1, 1, 1],
    [1, 0, 1, 1, 0, 0, 0, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],

];
for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
        if (maze[i][j] === 1) {
            const wall = new THREE.Mesh(wallGeometry, wallMaterial);
            wall.position.set(j - Math.floor(maze[i].length / 2), 1, i - Math.floor(maze.length / 2));
            scene.add(wall);
            walls.push(wall);
        }
    }
}
const light = new THREE.PointLight(0xffffff);
light.position.set(0, 10, 0);
scene.add(light);

camera.position.set(8, 1.5, 5);
camera.lookAt(0,0,0);



var controls = new FirstPersonControls( camera, renderer.domElement )
controls.movementSpeed = 0.1;
controls.lookSpeed = 0.01







// Game loop
const animate = () => {
    requestAnimationFrame(animate);

    // Update game logic
    controls.update(0.3)



    renderer.render(scene, camera);
};
animate();