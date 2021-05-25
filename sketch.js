
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1, bob2, bob3,bob4, bob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1=new Bob(300,350,50,50);
	bob2=new Bob(350,350,50,50);
	bob3=new Bob(400,350,50,50);
	bob4=new Bob(450,350,50,50);
	bob5=new Bob(500,350,50,50);
	roof=new Roof(400,190,250,15);

 add const  = Matter.Constraint; 
	bob1=new Bob(300,350);
	bob2=new Bob(350,350); 
	bob3=new Bob(400,350); 
	bob4=new Bob(450,350); 
	bob5=new Bob(500,350);
	roof=new Roof(400,190,300,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
roof.display();


 
}



