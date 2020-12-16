class Block{
    constructor(x, y, width, height, angle) {
        var options = {
          restitution : 0.3,
          friction : 1,
          density: 0.0000000000000000000000000001
        }
        this.visibility = 225;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        
      }
      display(){
        

        if (this.body.speed < 5) {
          var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
        }
        else{
          
          push();
          World.remove(world, this.body);
          this.visibility -= 5
          tint(225,this.visibility);
          //rect(0,0,this.width, this.height)
          
          pop();
        }
       }

       score(){
        if(this.visibility<0 && this.visibility>=-100){
          scores++
        }
      }
      
}
