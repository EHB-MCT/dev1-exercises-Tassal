"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = moveBox;

let x = width/2 + 500;
let y = width/2;
let xSpeed = 5;

let playerX = width/2- 75;

let score1 = 0;
let score2 = 0;


update();


function update() {

    x += xSpeed;
    y += 5;

    
    context.fillStyle = "black"
    context.fillRect(0, 0, width, height);
context.fillStyle = "white";
context.fillRect(playerX, height-100, 150, 25);
context.fillRect(width /2 - 75, 75, 150, 25);

Utils.fillCircle(x, y, 19)

if (y >= height){
    score2++;
    x = width/2 + 500;
    y = height/2;
    xSpeed = 5;
}

if (x >= width-10){
    xSpeed = xSpeed *-1;

}

if (y >= height){
    score++;
    y = width/2 + 500;
    y = height/2;
    xSpeed = 5;
}

let m = width/100;
console.log(m)
for (let i = 0; i < m; i++) {
    context.fillRect(0+i *100 , height/2 - 12.5, 50, 25);

}

context.font = "bold 100px serif";
context.fillText("0", 50, height/2-100,)
context.fillText("0", 50, height / 2 + 150, )

requestAnimationFrame (update);

}

function moveBox(e) {
    playerX = e.pageX;

}