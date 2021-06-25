
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var box
function preload(){
	box = loadImage("trashcangreen.png")
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	ground = new Ground(800,690,1600,15)
    box1 = new Box(1415,634,10,95)
    box2 = new Box(1375,678,70,8.65)
	box3 = new Box(1340,634,10,95)
	ball1 = new Ball(500,500,25,25)
}


function draw() {
  rectMode(CENTER);
  background(230);
  ground.displaybody()
  box1.displayBody()
  box2.displayBody()
  box3.displayBody()
  ball1.displayBody()
  image (box,1340,590,75,95)
  if(keyDown(UP_ARROW)){
	  Matter.Body.applyForce(ball1.ball,ball1.ball.position,{
		  x:0.01,y:0.02
	  })
  }
  if(keyDown(DOWN_ARROW)){
	Matter.Body.applyForce(ball1.ball,ball1.ball.position,{
		x:-0.01,y:0.02
	})
}

  

}

