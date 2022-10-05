"use strict"

let canvas = document.querySelector("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let context = canvas.getContext("2d")

drawLine();

function drawLine() {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");
    //Begin van de code//
   context.lineWidth = 5;
   context.strokeStyle = 'red';
   context.beginPath();
   context.moveTo(100, 50);
   context.lineTo(300, 50);
   context.stroke();
   //letter //
   
   context.lineTo(200, 50);

    //Letter //
   context.lineTo(200, 350);
   context.stroke();
   
   //letter 02//
   context.lineTo(200, 550);
   context.stroke();


   context.lineWidth = 5;
   context.strokeStyle = 'red';
   context.beginPath();
   context.moveTo(200, 100);
   context.lineTo(250, 100);
   context.stroke();

   context.moveTo(400, 100);
   context.lineTo(150, 100);
   context.stroke();
}


