class Box {
    constructor(x,y,w,h) {
  
      var box_features = {
        isStatic: true,
        friction: 1000000000
      };
      
      this.box = Bodies.rectangle(x,y,w,h, box_features);
      World.add(world, this.box);
  this.w = w
  this.h = h
  
  
    }
    displayBody() {
      push()
      translate(this.box.position.x, this.box.position.y)
      rotate(this.box.angle)
      fill("blue")
      rectMode(CENTER);
      rect(0,0, this.w, this.h);
      pop()
    }
  }
  