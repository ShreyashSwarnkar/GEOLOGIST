class Rubber{
  constructor(x,y,r){
    var options = {
	  restitution: 0.3,
	  friction: 5,
	  density: 1
	 };	
	 this.body=Bodies.circle(x, y, (r-20)/2, options)
	 this.x=x;
	 this.y=y;
	 this.r=r
	 World.add(world, this.body);	
  }
  display(){
	var rubberpos=this.body.position;		
	push()
	translate(rubberpos.x, rubberpos.y);
	rectMode(CENTER)
	strokeWeight(4);
	stroke("black");
	fill("darkblue");
	ellipseMode(RADIUS);
	ellipse(0,-20,this.r,this.r);
    pop()
	}

}