"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let balls

let x;
let y;
let xSpeed = 10;
let ySpeed = 10;
let size = 90;
let BlueMove = true;
window.onclick = clock;


setup();


function setup() {
    x = width / 2;
    y = height / 2;

    update();
}

function update() {


    if (BlueMove) {
        context.fillStyle = "purple";
        context.fillRect(0, 0, width, height);


        x += xSpeed;
        y += ySpeed;

        if (x >= width - size || x <= size) {
            xSpeed *= -1;
        }
        if (y >= height - size || y <= size) {
            ySpeed *= -1;
        }

        context.fillStyle = "blue";
        Utils.fillCircle(x, y, size);


        requestAnimationFrame(update);
    }
}

function clock(eventData) {
    console.log('Clicked', eventData.x, eventData.y);

    let mouseX = eventData.x;
    let mouseY = eventData.y;

    if (Utils.calculateDistance(x, y, mouseX, mouseY)) {
        if (Utils.calculateDistance(x, y, mouseX, mouseY) < size)
            BlueMove = false;

        context.fillStyle = 'red';
        Utils.fillCircle(eventData.x, eventData.y, size / 2);
    }

}
