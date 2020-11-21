
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var g
var ball
var bin1,bin2,bin3


	
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;   

	//Create the Bodies Here.
    
	 g = new ground(width/2,670,width,20)
	 ball = new paper(200,450,40)
	 bin1 = new dustbin(960,585,30,150)
	 bin2 = new dustbin(1050,645,150,30)
	 bin3 = new dustbin(1140,585,30,150)
	Engine.run(engine);
  
}


	
function draw() {
  rectMode(CENTER);
  background(0);
  g.display()
  ball.display()
  bin1.ascreen()
  bin2.ascreen()
  bin3.ascreen()
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	  
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
	
	}
