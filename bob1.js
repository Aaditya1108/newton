class bob
{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restitution:1,
            friction:0,
            density:0.8
        }
        this.x=x;
        this.y=y;
        this.r=r;

        this.body=Bodies.circle(this.x,this.y(this.r)/2,options)
        World.add(world,this.body);
    }
    display()
    {

        var paperpos=this.body.position;
        push()
        translate(paperpos.x,paper.y);
        rectMode(CENTER)

        //strokeweight(4);
        fill(255,0,255)
        //imageMode(CENTER);
        //this.image,0,0,this.r,this.r)
        ellipse(0,0,this.r,this,r);
        pop()
    }
}