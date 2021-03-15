class Rope{

    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB
        }
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope)

    }
    display(){
        var posA = this.rope.bodyA.position
        var posB = this.pointB
        line(posA.x,posA.y,posB.x,posB.y)
    }
















}