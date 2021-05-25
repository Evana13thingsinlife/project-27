class Bob{
    constructor(){
         class Bob{ 
           constructor(x,y)
          this.body=Bodies.circle(x,y,40,options); 
             this.radius = 40; 
        var options={
            isStatic:true, 
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(200,200,30,options);
        this.radius = 70;
      
        World.add(world,this.body)
    }
    display (){
        var pos= this.body.position;
        fill("pink");
       ellipse(pos.x,pos.y,this.radius);

    }
}
