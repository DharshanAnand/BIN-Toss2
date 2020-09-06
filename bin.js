class Bin {
    constructor(x,y,width,height) {
      this.image=loadImage("dustbingreen.png");
      var options = {
          friction:1000,
          density:1000
      }
      
      this.body = Bodies.rectangle(x,y,width,height,options);
      
      this.width = width;
      this.height=100;
      this.image.height = 100;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      rectMode(CENTER);
      fill("white");
      stroke("white");
      rect(pos.x, pos.y, this.width, this.height);
      imageMode(CENTER);
      image(this.image,800,250,this.width,this.height);
    }
  };