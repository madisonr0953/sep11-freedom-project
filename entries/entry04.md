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
This code helped do that creating a new scene so I can make my walls upon it then hanging the perspective to give it that realistic feel.

### EDP
For the engineering design process I am currently creating my prototype.

### Skills
The skills I used was growth mindset as I needed to ask for help to fix a piece of my code.


[Previous](entry03.md) | [Next](entry05.md)


[Home](../README.md)