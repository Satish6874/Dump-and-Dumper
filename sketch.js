
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinpt1,dustbinpt2,dustbinpt3;
var ground,paper;
var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	dustbinpt1 = new Dustbin(600,650,200,20);
	dustbinpt2 = new Dustbin(510,620,20,80);
	dustbinpt3 = new Dustbin(690,620,20,80);

	paper = new Paper(100,600,40);

	ground = new Ground(400,670,1200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbinpt1.display();
  ground.display();
  dustbinpt2.display();
  dustbinpt3.display();
  paper.display();
  
  drawSprites();
 
}
function keyPressed(){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-55});
}
}




