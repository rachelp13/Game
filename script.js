class Character {
   constructor(name, lvl, npc, inventory, speed, id, ctx, color) {
      //The constructor is what makes the object.
      //Each time you want a new one, you need to call a constructor
      this.name = name;
      this.lvl = lvl;
      this.npc = npc;
      this.inventory = inventory;
      this.posX = 0.0;
      this.posY = 0.0;
      this.speed = speed;
      this.id = id;
      this.ctx = ctx;
      this.color = color;
   }

   draw() {
      //This is where the character is being drawn in the run loop
      this.ctx.beginPath();
      this.ctx.fillStyle = this.color;
      this.ctx.arc(this.posX, this.posY, 5, 0, 2 * Math.PI, false);
      this.ctx.fill();
      this.ctx.lineWidth = 3;
      this.ctx.strokeStyle = "black";
      this.ctx.stroke();
   }

   update() {
      //This is what "changes" the position of the character
      //This is also changed in the run loop

      if (!(this.posX + 1 * this.speed >= this.ctx.canvas.width)) {
         this.posX = this.posX + 1 * this.speed;
      }
      else {
         this.posX = this.ctx.canvas.width;
      }
      if (!(this.posY + 1 *this.speed >= this.ctx.canvas.height)) {
         this.posY = this.posY + 1 * this.speed;
      }
      else {
         this.posY = this.ctx.canvas.height;
      }

   }
}

function generateInitialMap(ctx) {
   //place the map generation code here.
   ctx.fillStyle = "black"
   ctx.lineWidth = 3;
   ctx.strokestyle = "black";
   ctx.fillRect(300, 0, 2, 300);
   ctx.fillRect(300, 300, 200, 2);
   ctx.fillRect(0, 350, 500, 2);
   ctx.fillRect(500, 350, 2, 51);
   ctx.fillRect(300,400,201, 2);
   ctx.fillRect(300, 400, 2, 250);
   ctx.fillRect(300, 638, 650, 2);
   ctx.fillRect(950, 0, 2, 250);
   ctx.fillRect(350, 0, 2, 250);
   ctx.fillRect(350, 250, 150, 2);
   ctx.fillRect(575, 250, 377, 2);
   ctx.fillRect(500, 250, 2, 52);
   ctx.fillRect(575, 250, 2, 150);
   ctx.fillRect(575, 400, 377, 2);
   ctx.fillRect(950, 400, 2, 250);
   ctx.fillRect(0, 0, 300, 2);
   ctx.fillRect(0, 0, 2, 350);
   ctx.fillRect(350, 0, 600, 2);
   




}

//This is the function that is called right when the window is Created
window.onload = function() {
   //Initialize the references to the buttons that we are using
   //Notice that these are all caps, as caps represent globals
   var START_BUTTON = document.getElementById("startButton");
   var STOP_BUTTON = document.getElementById("stopButton");
   var STATS_BUTTON = document.getElementById("statsButton");
   var CANVAS = document.getElementById("simCanvas");
   var RUN_RESULTS = document.getElementById("runResults");
   var RESULTS_LIST = document.getElementById("resultsList");
   var DRAW_INTERVAL = 10;


   //Used to check if the game is running
   var running = false;
   //interval id
   var intID = -1;
   var ctx = CANVAS.getContext("2d");


   START_BUTTON.onclick = function() {
      if (intID < 0) {
         if (running == false) {
            //Call the run function
            run();
         }
         else {
            //Has already been started, but need to set the interval again
            intID = setInterval(draw, DRAW_INTERVAL);
         }
      }

   };

   //On click function for the Stop button
   STOP_BUTTON.onclick = function () {
      if (intID >= 0) {
         clearInterval(intID);
         intID = -1;
      }
   };


  
	var canvasWidth = CANVAS.width;
	var canvasHeight = CANVAS.height;

   //makes a character using the contructor.
   //We could add an array to keep track of all of the characters
   var char1 = new Character("brad", 1, false, false, 2, 123, ctx, "#4274f4");
   var char2 = new Character("rachel", 1, true, false, 5, 13, ctx, "#ffb73a");

   //Console log is how you would print
   console.log("width = %d\n", canvasWidth);
   console.log("height = %d\n", canvasHeight);

   //This function would be used to generate the initial map
   generateInitialMap(ctx);

   //This is the function for the run loop
   function run() {
      running = true;
      intID = setInterval(draw, DRAW_INTERVAL);
   }

   //Here is the function that is called in the draw loop
   function draw() {
      ctx.globalCompositeOperator = "source-over";
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
      
      generateInitialMap(ctx);
      
      //Draw and update the character
      char1.draw();
      char1.update();

      char2.draw();
      char2.update();
   }


}
