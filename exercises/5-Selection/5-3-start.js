"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawCards();

document.getElementById('cardsButton').onclick = drawCards;

function drawCards() {
    drawBackground();
    let value = Number(document.getElementById('cardsAmount').value);

    for (let i = 0; i < value; i++) {
        console.log(i % 8);
        drawCard(50 + i % 8 * 150, 50 + Math.floor(i / 8) * 225);
    }

}

function drawBackground() {
    context.fillStyle = "darkgreen";
    context.fillRect(0, 0, width, height);
}

function drawCard(x, y) {
    context.fillStyle = "white";
    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.fillRect(x, y, 125, 200);
    context.strokeRect(x, y, 125, 200);

    drawRandomShape(x, y);
    drawRandomText(x, y);
}

function drawRandomShape(x, y) {
    //draw random shape
    let randomShape = Math.floor(Math.random() * 4);
    if (randomShape == 0) {
        context.fillStyle = 'red';
        drawHeart(x + 125 / 2, y + 50);
    } else if (randomShape == 1) {
        context.fillStyle = 'black';
        drawClover(x + 125 / 2, y + 50);
    } else if (randomShape == 2) {
        context.fillStyle = 'black';
        drawPike(x + 125 / 2, y + 50);
    } else {
        context.fillStyle = 'red';
        drawDiamond(x + 125 / 2, y + 50);
    }
}

function drawRandomText(x, y) {
    //draw random number
    let randomNumber = Math.ceil(Math.random() * 13);
    context.font = "32px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    if (randomNumber == 11) {
        context.fillText("J", x + 125 / 2, y + 150);
    } else if (randomNumber == 12) {
        context.fillText("Q", x + 125 / 2, y + 150);
    } else if (randomNumber == 13) {
        context.fillText("K", x + 125 / 2, y + 150);
    } else {
        context.fillText(randomNumber, x + 125 / 2, y + 150);
    }
}

function drawHeart(x, y) {
    context.beginPath();
    context.moveTo(x, y - 10);
    context.bezierCurveTo(x, y - 25, x + 40, y - 15, x, y + 20);
    context.moveTo(x, y - 10);
    context.bezierCurveTo(x, y - 25, x - 40, y - 15, x, y + 20);
    context.fill();
}

function drawClover(x, y) {
    Utils.fillCircle(x - 10, y + 5, 10);
    Utils.fillCircle(x + 10, y + 5, 10);
    Utils.fillCircle(x, y - 10, 10);
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + 5, y + 20);
    context.lineTo(x - 5, y + 20);
    context.fill();

}

function drawPike(x, y) {
    context.beginPath();
    context.moveTo(x, y - 20);
    context.bezierCurveTo(x, y - 30, x + 40, y + 20, x, y + 10);
    context.moveTo(x, y - 20);
    context.bezierCurveTo(x, y - 30, x - 40, y + 20, x, y + 10);
    context.fill();
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + 5, y + 20);
    context.lineTo(x - 5, y + 20);
    context.fill();
}

function drawDiamond(x, y) {
    context.beginPath();
    context.moveTo(x - 20, y);
    context.lineTo(x, y - 20);
    context.lineTo(x + 20, y);
    context.lineTo(x, y + 20);
    context.fill();
}