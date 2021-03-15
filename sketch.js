
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 roof=new Roof(400,100,600,50)
bob1=new Bob(300)
bob2=new Bob(350)
bob3=new Bob(400)
bob4=new Bob(450)
bob5=new Bob(500)
rope1=new Rope(bob1.bob,{x:300,y:100})
rope2=new Rope(bob2.bob,{x:350,y:100})
rope3=new Rope(bob3.bob,{x:400,y:100})
rope4=new Rope(bob4.bob,{x:450,y:100})
rope5=new Rope(bob5.bob,{x:500,y:100})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display();
  bob1.display();
  bob2.display();
  bob4.display();
  bob5.display();
 bob3.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.bob,bob1.bob.position,{x:-5,y:-5})
	}
}



