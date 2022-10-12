"use strict";


let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');
//. random, .floor, .ceil, math.floor(math.random) * 500;

let width = context.canvas.width;
let height = context.canvas.height;


rngSquare(100, 400,);
rngSquare(125, 350,);
rngSquare(150, 300,);
rngSquare(175, 250,);
rngSquare(200, )

function rngSquare(pos, size,){
    let randomX = Math.floor(Math.random()* (width- size));
let randomY = Math.floor(Math.random()* (height- size));
let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);

let color = "rgb(" + r + "," + g + "," + b + ")";
    context.fillStyle = color;
context.fillRect(pos, pos, size, size);
}
