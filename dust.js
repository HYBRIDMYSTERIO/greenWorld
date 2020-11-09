class Dust {
    constructor(x,y,width,height){
        
        var option = {
            'isStatic':false,
            'restitution':0
        }
        this.body = Bodies.rectangle(x,y,width,height);
        this.height = height;
        this.width = width;
        this.image = loadImage("GREEN.png");

        World.add(world,this.body);

    }
 displaydust(){
     var position = this.body.position;
     imageMode(CENTER);
    
     image(this.image,position.x,position.y,this.width,this.height);
 }
}