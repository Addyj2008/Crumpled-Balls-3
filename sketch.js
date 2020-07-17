const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var world, engine, drag;
var ground1, dustbin1, paper1, launcher1;

function preload() {
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
  world = engine.world;
  
  drag = false;

	ground1 = new Ground(width/2, height - 12.5, 2 * width, 25);
  dustbin1 = new Dustbin(700, 575, 200, 200);
  paper1 = new Paper(150, 300, 30);
  launcher1 = new Launcher(paper1, {'x' : 150, 'y' : 250});
	Engine.run(engine);
}


function draw() {
  Engine.update(engine);
  background(255);
  displayAllLaunchers();
  displayAllGrounds();
  displayAllDustbins();
  displayAllPapers();
  if (drag && paper1.canDrag) {
    Body.setPosition(paper1.body, {x : mouseX, y : mouseY});
  }
}

function mouseDragged() {
if (mouseX - paper1.body.position.x < 25 && mouseX - paper1.body.position.x > -25 && mouseY - paper1.body.position.y < 25 && mouseY - paper1.body.position.y > -25) {
    drag = true;
}
}

function mouseReleased() {
if (drag) {
  launcher1.fly();
  drag = false
  paper1.canDrag = false;
}
}



