class Paper {
    constructor(x, y){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
      this.body = Matter.Bodies.circle(x, y, 10, options);
      this.width = 20;
      this.height = 20;
      World.add(world, this.body);
    }
        display(){
          var pos =this.body.position;
          var angle = this.body.angle;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          elipseMode(CENTER);
          fill(255,178,0);
          elipse(0, 0, this.width, this.height);
          pop();
        }
      

}