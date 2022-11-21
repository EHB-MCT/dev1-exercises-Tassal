"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = drawCrosshair

function drawCrosshair(event) {
    console.log(event.pageX, event.pageY);
    Utils.drawLine(event.pageX, 0, event.pageY, height);
    Utils.drawLine(0, event.pageX, event.pageY, height);
}