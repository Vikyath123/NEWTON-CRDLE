class Bob{
    constructor(x){
        var option = {
            dencity:1.8,
            friction:0.5,
            restitution:1
            
        }
        this.bob=Bodies.circle(x,400,25,option)
World.add(world,this.bob)
    }
    display(){
        fill("pink");
        var pos= this.bob.position ;
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,25)

    }
}