# Entry 5
##### 4/17/23
For my mvp I have created a set of walls messing around with different pieces of code from Three.js. My code starts off with the walls...
```Js
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
```
What this piece of code states is how I created my maze walls to explain my code the 1's equals the walls and 0's equal the empty spaces thus to make the walls I mixed different patterns of 1's and 2's to get a maze like appearence. Below the array is the loop that helps make the walls appear. Now for the controls I did this...
```Js
var controls = new FirstPersonControls( camera, renderer.domElement )
controls.movementSpeed = 0.1;
controls.lookSpeed = 0.01
```
What this does is change the movement speed and look speed when moving around however the speed is quite fast and is a little odd at the moment.

### Future plans BMVP
The future changes I would like to make is adding more walls, changing up some design and fixing the movement speed for a nice slow walk making sure you dont go through the walls or floors.

### EDP
My engineering design process is now to test and evaluate the prototype.

### Skills
The skills I used when creating this prototype is embracing failure I did have to change the walls a couple of times because the positioning was a little off.


[Previous](entry04.md) | [Next](entry06.md)

[Home](../README.md)