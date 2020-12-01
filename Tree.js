class Tree{

    constructor(x,y,width,height)
    {
    var options={
        isStatic:true,
        friction:5
    }
    this.x=x
    this.y=y
    this.width=width
    this.height=height
    this.image=loadImage("tree.png")
    this.body=Bodies.rectangle(this.x,this.y,width,height,options)
    World.add(world,this.body)
  
    }
    display(){

        var pos=this.body.position
        push()
      // translate(pos.x,pos.y)
      imageMode(CENTER)
      image(this.image,this.x,this.y,500,500) 
        rectMode(CENTER)
       
        pop()
        
    } 
}
