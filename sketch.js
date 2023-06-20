
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plane;
var block1;
var block2;
var block3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
var plane_options={isStatic:true};
plane=Bodies.rectangle(500,697,1500,3,plane_options);
World.add(world,plane);
	Engine.run(engine);
	var block1_options={restitution:0.6,frictionAir:0.15};
	var block2_options={restitution:0.9,frictionAir:0.11};
	var block3_options={restitution:0.5,frictionAir:0.1,friction:1};
  block1=Bodies.circle(200,10,60,block1_options);
  World.add(world,block1);
  block2=Bodies.rectangle(350,10,60,60,block2_options);
  World.add(world,block2);
  block3=Bodies.rectangle(500,10,60,60,block3_options);
  World.add(world,block3);
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("green");
  rect(plane.position.x,plane.position.y,1200,3);
  ellipse(block1.position.x,block1.position.y,60);
  rect(block2.position.x,block2.position.y,60,60);
  rect(block3.position.x,block3.position.y,60,60);

  drawSprites();
 
}



