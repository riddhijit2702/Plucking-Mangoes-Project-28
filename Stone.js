 class Stone{
     constructor(x,y,r){
  var options={
      isStatic:false,
      restitution:0.5,
     friction:1.5,
    
  }
this.r=r
 this.x=x
 this.y=y
this.debug=true;
 this.body=Bodies.circle(x,y,r,options)
 World.add(world,this.body)
 this.image=loadImage("stone.png")
     }
     display(){
  
     imageMode(CENTER)   
     image(this.image,this.body.position.x,this.body.position.y,100,100) 
     }

 }
