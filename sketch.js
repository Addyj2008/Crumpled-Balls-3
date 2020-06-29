const Engine = Matter.Engine;
const Worlds = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;
var ground1, dustbin1, paper1;

function preload() {
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(width/2, height - 12.5, 2 * width, 25);
  dustbin1 = new Dustbin(700, 575, 200, 200);
  paper1 = new Paper(100, 660, 30);
	Engine.run(engine);
}


function draw() {
  background(255);

  if (keyCode === UP_ARROW) {
    paper1.launch();
    keyCode = 0;
  }
  displayAllGrounds();
  displayAllDustbins();
  displayAllPapers();
}



