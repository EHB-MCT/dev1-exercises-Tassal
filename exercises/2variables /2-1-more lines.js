"use strict"

let canvas = document.querySelector("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let context = canvas.getContext("2d")

let width = context.canvas.width;
let height = context.canvas.height;
let margin = 50;

drawmorelines ()

function drawmorelines() {
    context.beginPath();
    context.lineWidth = 2;
    context.moveTo(margin, spacing);
    context.lineTo(width- margin, spacing);
    context.lineTo(margin, spacing2);
    context.lineTo(width- margin, spacing2);
    context.lineTo(margin, spacing3);
    context.lineTo(width- margin, spacing3);
    context.lineTo(margin, spacing4);
    context.lineTo(width- margin, spacing4);
    context.lineTo(margin, spacing5);
    context.lineTo(width- margin, spacing5);
    context.closePath();
    context.stroke();
} 

