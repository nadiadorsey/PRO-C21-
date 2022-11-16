var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball_option={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}

function hforce(){
	matter.body.applyforce(ball,{x:0,y:0},{x:0.05,y:0});
}

function vforce()
{
	matter.body.applyforce(ball,{x:0,y:0},{x:0,y:-0.05});
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	
	groundObj=new ground(width/2,670,width,20);
	leftside=new ground(1100,600,20,120);
	rightside=new ground(1100,600,20,120);
	//Create the Bodies Here.
ball=bodies.circle(200,100,20,ball_option);
world.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  drawSprites();
}



