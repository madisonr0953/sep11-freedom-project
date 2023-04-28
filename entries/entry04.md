# Entry 4
##### 3/13/2006
For my prototype I started by making the camera view to make it first person. That way you can feel like your actually in the game playing it and viewing it from your own eyes.
```Js
import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import { FirstPersonControls } from 'https://cdn.skypack.dev/three@0.136/examples/jsm/controls/FirstPersonControls.js';

var person

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
```
This code helped do that creating a new scene so I can make my walls upon it then hanging the perspective to give it that immersive feel. Adding on the my mvp I made the base of the scene.
```Js
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const floorGeometry = new THREE.PlaneGeometry(10, 10);
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2; // Rotate the floor to be horizontal
scene.add(floor);
```
This making the floor appear and the material for it, also adding color and it being rotated horizontaly. This being what I so far made for my mvp.

### EDP
For the engineering design process I am currently creating my prototype.

### Skills
The skills I used was growth mindset as I needed to ask for help to fix a piece of my code.


[Previous](entry03.md) | [Next](entry05.md)


[Home](../README.md)