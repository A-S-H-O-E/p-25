class Ball {
    constructor(x,y, r) {
  
      var ball_features = {
        isStatic: false,
        restitution: 1
      };
      var paper = loadImage("paper.png")

      
      this.ball = Bodies.circle(x,y,r,ball_features);
      World.add(world, this.ball);
  
     this.r = r
    this.paper = paper
    }
    displayBody() {
      push()
      translate(this.ball.position.x, this.ball.position.y)
      rotate(this.ball.angle)
      fill("blue")
      imageMode(CENTER);
      image(this.paper,0,0,50,50);
      pop()
    }
  }
  