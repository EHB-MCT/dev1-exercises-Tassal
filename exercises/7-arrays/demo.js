"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let x;
let y;
let size;

Setup();


function Setup() {
    x = width / 2;
    y = height - 100;
    size = 50;

    update();
}

function update() {
    context.fillstyle = "white";
    context.fillRect(0, 0, width, height);
    drawBubble(x, y, size, 100);

    requestAnimationFrame(update);
}