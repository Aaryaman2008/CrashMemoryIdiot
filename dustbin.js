class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("Dustbin.png");
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      strokeWeight(2);
      stroke("black");
      fill("silver");
      //rect(pos.x, pos.y, this.width, this.height);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height); 
    }
  };