class Dustbin {
    constructor(x,y,width,height){
        var option = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.height = height;
        this.width = width;

        World.add(world,this.body);

    }
 displaydustbin(){
     var position = this.body.position;
     rectMode(CENTER);
     fill("white");
     stroke("white");
     strokeWeight(4);
     rect(position.x,position.y,this.width,this.height);
 }
}
