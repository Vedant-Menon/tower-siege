class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          density:0.04,
          friction:0.2,
          restitution:1.2
              }
      this.body = Bodies.rectangle(x,y,width,height,options);
      
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //imageMode(CENTER);
      //image(this.image,pos.x,pos.y,this.width,this.height);
      rectMode(CENTER);
     //fill("lightblue");
    rect(pos.x, pos.y, this.width, this.height);
    }
  };