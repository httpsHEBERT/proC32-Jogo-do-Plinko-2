var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies;

var balls = [];
var plinkos = [];
var divisions = [];

var counter = 0, score = 0;
var gameState = "play";
var ball;

function setup() {

  createCanvas(1350, 609);

  engine = Engine.create();
  world = engine.world;

  roof = new Ground(675, 0, 1350, 10);
  wall1 = new Ground(0, 305, 10, 609);
  wall2 = new Ground(1350, 305, 10, 609);
  ground = new Ground(675, 609, 1350, 20);

  for (var k = -5; k <= 1350; k = k + 80) {
    noStroke();
    divisions.push(new Divisions(k, 515, 10, 200));
  }

  for (var j = 50; j <= 1340; j = j + 50) {
    plinkos.push(new Plinko(j, 60));
  }

  for (var j = 25; j <= 1340; j = j + 50) {
    plinkos.push(new Plinko(j, 135));
  }

  for (var j = 50; j <= 1340; j = j + 50) {
    plinkos.push(new Plinko(j, 210));
  }

  for (var j = 25; j <= 1340; j = j + 50) {
    plinkos.push(new Plinko(j, 285));
  }

  for (var j = 50; j <= 1340; j = j + 50) {
    plinkos.push(new Plinko(j, 360));
  }
}

function draw(){

  background(70, 242, 148);
  Engine.update(engine);

  texts();
  display();
  reset();
}

function display(){

  roof.display();
  wall1.display();
  wall2.display();
  ground.display();

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  if (ball != null) {
    ball.display();
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
}

function texts(){

  textSize(35);
  text(score, 10, 37);
  text(counter, 1320, 37);
  text("100", 7, 550);
  text("150", 86, 550);
  text("200", 166, 550);
  text("250", 244, 550);
  text("300", 324, 550);
  text("350", 404, 550);
  text("400", 484, 550);
  text("450", 566, 550);
  text("450", 726, 550);
  text("400", 806, 550);
  text("350", 886, 550);
  text("300", 966, 550);
  text("250", 1046, 550);
  text("200", 1126, 550);
  text("150", 1206, 550);
  text("100", 1281, 550);
  fill(189, 25, 29);
  text("500", 646, 550);
}

function mousePressed(){

  if(counter <= 4 && gameState != "end"){
    ball = new Ball(mouseX, 10, 10, 10);
    counter++;
  }
}

function reset(){

  if(counter == 5){

    textSize(25);
    text("APERTE 'ESPAÇO' PARA RECOMEÇAR", 470, 35);

    if(keyCode == 32){

      score = 0;
      counter = 0;
      ball = null;
    }
  }
}