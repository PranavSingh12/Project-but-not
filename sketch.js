  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Body = Matter.Body;
  const Render = Matter.Render;
  var dustbinObj,dustbinimg,groundObject;
  var world;
  var paper,paperimg;
  
  function preload() {
	  paperimg = loadImage("paper.png");
	  dustbinimg = loadImage("trashcan.png");
  
  }
  
  function setup() {
	  createCanvas(1600, 700);
	  rectMode(CENTER);
  
  
  
	  engine = Engine.create();
	  world = engine.world;
	  
	  groundObject=new Ground(width/2,670,width,20);
	  dustbinObj=new dustbin(1200,650);
	  paper=new Paper(100,600,50);
  
  
	  Engine.run(engine);
	
  }
  
  
  
  function draw() {
	rectMode(CENTER);
	background("grey");
	Engine.update(engine);
   
	paper.display();
	groundObject.display();
	dustbinObj.display();
	
	
  
  
  }
  
  function keyPressed(){
	  if(keyCode === UP_ARROW) {
		  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	  }
	}