class Tree {

	constructor(x,y,width,height){

		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;		
		this.image=loadImage("tree.png");
		this.bottomWall=Bodies.rectangle(this.x, this.y, this.width, this.wallThickness, {isStatic:true})
		this.leftWall=Bodies.rectangle(0, this.y-this.height/2, this.wallThickness, this.height, {isStatic:false})
		this.rightWall=Bodies.rectangle(this.x+this.width2, this.y-this.height/2, this.wallThickness, this.height, {isStatic:false})
		
		World.add(world, this.bottomWall)
		World.add(world, this.leftWall)
		World.add(world, this.rightWall);

	}
	display()
	{
			var posBottom=this.bottomWall.position;

			push()
			translate(posBottom.x, posBottom.y+10);
			imageMode(CENTER);
			image(this.image,-50,-270,this.width, this.height)
			pop()
			
	}

}
