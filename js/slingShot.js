class slingShot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 2
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        this.image1 = loadImage("images/sling1.png");
        this.image2 = loadImage("images/sling2.png");
        this.image3 = loadImage("images/sling3.png");
        World.add(world,this.sling);  
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body
    }


    display(){
        imageMode(CENTER);
        image(this.image1,0,0)
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
      }    
}