
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground, dustbin1, dustbin2, dustbin3;
var paper_img, paperSprite;

function preload(){
	paper_img = loadImage("paperBall.png");
}

function setup() {
	var canvas = createCanvas(800, 700);
	rectMode(CENTER);

	paperSprite = createSprite(100, 600, 10, 10);
	paperSprite.addImage(paper_img);
	paperSprite.scale = 0.015;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Ground(400,height,800,50);
	
	dustbin1 = new Bin(600, 670, 100, 10);
	dustbin2 = new Bin(550, 650, 10, 50);
	dustbin3 = new Bin(650, 650, 10, 50);

	var paper_options ={
		isStatic: false,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2
	}
	
	paperObject = Bodies.circle(100 , 650 , 15, paper_options);
	World.add(world, paperObject);
	
   
}


function draw() {
  
  Engine.update(engine);
  background("snow")

  paperSprite.x = paperObject.position.x;
  paperSprite.y = paperObject.position.y;
  dustbin2.display();
  dustbin1.display();
  dustbin3.display();
  
  ground.display();
  
  ellipseMode(RADIUS);
  ellipse(paperObject.position.x, paperObject.position.y, 15, 15);
  
  keyPressed();

  drawSprites();
}

function keyPressed(){

	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:85, y:-85});
	}
}

