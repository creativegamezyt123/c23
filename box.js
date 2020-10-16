class box
{ 
    constructor(x,y,width,height,angle)
    {
     var options ={
         restitution:0.3,
         friction:0.5,
         density:1.2
     }
    this.x = x;
    this.y = y;
   this.body = Bodies.rectangle(this.x,this.y,width,height,options)
    
    World.add(world,this.body);
    }  
    display()
{  
    push()
    translate(paperpos.x, paperpos.y);
    rectMode(CENTER)
    strokeWeight(3);
    fill(255,0,255);
    rect(this.body.x,this.body.y,width,height);
    pop()
}
}
