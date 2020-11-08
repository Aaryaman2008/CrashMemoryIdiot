
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustbin;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;

ground=new Ground(600,375,1200,15);
dustbin=new Dustbin(900,350,50,100);
paper=new Paper(100,350,40)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(100,200,400);
 ground.display();
 dustbin.display(); 
 paper.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode == UP_ARROW){
  
  Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-80});
  
   }

   if(keyCode == DOWN_ARROW){
  
    Matter.Body.applyForce(paper.body,paper.body.position,{x:-60,y:+80});
    
     }
  }
  