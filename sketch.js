
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var tree1;
var mango1,mango2,mango3,mango4,mango5,mango6,
	mango7,mango8,mango9,mango10,mango11;
var boy1;
var launcher1;
var stone1;



function preload(){

	//loading image for boy1
	boy1=loadImage("boy.png");
	
}



function setup() {

	createCanvas(1365, 620);
	
	//create engine and world
	engine = Engine.create();
	world = engine.world;

	//objects
	ground1=new Ground(682,610,1365,25);
	tree1=new Tree(1110,597,470,550);
	mango1=new Mango(1000,130,25);
	mango2=new Mango(1100,100,25);
	mango3=new Mango(1050,160,25);
	mango4=new Mango(1000,200,25);
	mango5=new Mango(900,230,25);
	mango6=new Mango(950,240,25);
	mango7=new Mango(940,290,30);
	mango8=new Mango(1020,290,30);
	mango9=new Mango(1150,220,30);
	mango10=new Mango(1140,280,30);
	mango11=new Mango(1210,280,35);
	stone1=new Stone(235,450,30,30); 
	launcher1 = new Launcher(stone1.body,{x:235,y:480});	

	//update and run Engine
	Engine.run(engine);
  
}



function draw() {

	background("lightBlue");

	textSize(20);
	fill("purple");
	textFont("GEORGIA");
	text("Press Space to reset the stone Position",50,50);
		
	image(boy1,200,413,170,250);
	ground1.display();
	tree1.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display()

	stone1.display();
	launcher1.display();

	 //call detectCollision function
	detectCollision(stone1,mango1);
	detectCollision(stone1,mango2);
	detectCollision(stone1,mango3);
	detectCollision(stone1,mango4);
	detectCollision(stone1,mango5);
	detectCollision(stone1,mango6);
	detectCollision(stone1,mango7);
	detectCollision(stone1,mango8);
	detectCollision(stone1,mango9);
	detectCollision(stone1,mango10);
	detectCollision(stone1,mango11);

	drawSprites();
	
}



//make the stome body move with mouse if dragged by mouse
function mouseDragged(){
	Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY}) 
}



//make the stone disconnect from the point when the mouse is released by calling a function from Launcher class
function mouseReleased(){
	launcher1.fly();
}



//if  space key is pressed...
function keyPressed() {
	if (keyCode ===32) {
   	  Matter.Body.setPosition(stone1.body, {x:235, y:420}) 
	  launcher1.attach(stone1.body);
	}
}

//when stone touches mango, the mango falls down and becomes not static
function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
  
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	
	if (distance<=lmango.r+lstone.r){
	 Matter.Body.setStatic(lmango.body , false);
    } 

  }
  




	