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

   context.moveTo(100, 50);
   context.lineTo(200, 50);

    //Letter //
   context.lineTo(200, 350);
   context.stroke();
   
   //letter 02//
   context.moveTo(100, 50);
   context.lineTo(100, 50);
   context.stroke();


   context.lineWidth = 5;
   context.strokeStyle = 'red';
   context.beginPath();
   context.moveTo(250, 100);
   context.lineTo(300, 200);
   context.stroke();

   context.moveTo(250, 97);
   context.lineTo(250, 200);
   context.stroke();

   context.moveTo(250, 97);
   context.lineTo(250, 200);
   context.stroke();

   context.moveTo(265, 150);
   context.lineTo(200, 150);
   context.stroke();
   
   //letter 3//

   context.moveTo(300, 130);
   context.lineTo(400, 70);
   context.stroke();

   context.moveTo(300, 130);
   context.lineTo(400, 190);
   context.stroke();

   context.moveTo(300, 260);
   context.lineTo(400, 190);
   context.stroke();

   //letter 4//

   context.moveTo(370, 130);
   context.lineTo(470, 70);
   context.stroke();

   context.moveTo(370, 130);
   context.lineTo(470, 190);
   context.stroke();

   context.moveTo(370, 260);
   context.lineTo(470, 190);
   context.stroke();

   //letter 2//

   context.moveTo(500, 230);
   context.lineTo(500, 70);
   context.stroke();

   context.moveTo(600, 230);
   context.lineTo(500, 70);
   context.stroke();

   context.moveTo(550, 150);
   context.lineTo(450, 150);
   context.stroke();

   context.moveTo(600, 330);
   context.lineTo(600, 70);
   context.stroke();

   context.moveTo(600, 330);
   context.lineTo(700, 300);
   context.stroke();

   

   








}


