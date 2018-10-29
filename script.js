class Character {
   constructor(name, lvl, npc, inventory, speed, id, ctx) {
      this.name = name;
      this.lvl = lvl;
      this.npc = npc;
      this.inventory = inventory;
      this.posX = 0.0;
      this.posY = 0.0;
      this.speed = speed;
      this.id = id;
      this.ctx = ctx;
   }

   draw() {
      this.ctx.beginPath();
      this.ctx.fillStyle = this.color;
      this.ctx.arc(this.posX, this.posY, 5, 0, 2 * Math.PI, false);
      this.ctx.fill();
      this.ctx.lineWidth = 3;
      this.ctx.strokeStyle = "black";
      this.ctx.stroke();
   }

   update() {
      this.posX = this.posX + 1;
      this.posY = this.posY + 1;
   }


}

window.onload = function() {
   var START_BUTTON = document.getElementById("startButton");
   var STOP_BUTTON = document.getElementById("stopButton");
   var STATS_BUTTON = document.getElementById("statsButton");
   var CANVAS = document.getElementById("simCanvas");
   var RUN_RESULTS = document.getElementById("runResults");
   var RESULTS_LIST = document.getElementById("resultsList");
   var DRAW_INTERVAL = 10;


   var running = false;
   var steps = 0;
   var intID = -1;



   START_BUTTON.onclick = function() {
      if (intID < 0) {
         if (running == false) {
            run();
         }
         else {
            intID = setInterval(draw, DRAW_INTERVAL);
         }
      }

   };

   STOP_BUTTON.onclick = function () {
      if (intID >= 0) {
         clearInterval(intID);
         intID = -1;
      }
   };

   var ctx = CANVAS.getContext("2d");
	var canvasWidth = CANVAS.width;
	var canvasHeight = CANVAS.height;
   var char1 = new Character("brad", 1, false, false, 1, 123, ctx);

   console.log("width = %d\n", canvasWidth);
   console.log("height = %d\n", canvasHeight);

   function run() {
      running = true;
      intID = setInterval(draw, DRAW_INTERVAL);
   }

   function draw() {
      ctx.globalCompositeOperator = "source-over";
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      //console.log("DRAW STEPS = %d %d %d", steps, topWon, fitScore);

      char1.draw();
      char1.update();
   }


}
