"use strict";
import context from "/scripts/context.js";
import * as Utils from "/scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;
let frameCount = 0;
let hueShift = 0;
window.onmousemove = changeColor;

drawBubbles();

function drawBubbles() {
    if (frameCount % 144 == 0) {
        let x = Utils.randomNumber(0, width);
        let y = Utils.randomNumber(0, height);
        let radius = Utils.randomNumber(5, 100);
        let hue = Utils.randomNumber(160 + hueShift, 240 + hueShift)
        drawBubble(x, y, radius, hue);
    }
    frameCount++;
    requestAnimationFrame(drawBubbles);
}

function drawBubble(x, y, radius, hue) {

    context.fillStyle = Utils.hsl(hue, 50, 50);
    Utils.fillCircle(x, y, radius);
    context.fillStyle = Utils.hsl(180, 50, 75);
    Utils.fillCircle(x + radius / 3, y - radius / 3, radius / 4)

}

/**
 * 
 * @param {MouseEvent} e 
 */
function changeColor(e) {
    // console.log(e.pageX);
    hueShift = e.pageX / 50;
    console.log(hueShift);

}