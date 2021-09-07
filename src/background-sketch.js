export default function sketch (p) {
  let r = 25;
  let colorChange = 0;
  let circles = [];

  let frameLeftX = 0;
  let frameRightX = 0;
  let frameTopY = 0;
  let frameBottomY = 0;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    circles.push(new p.Circle(p.windowWidth/2, p.windowHeight/2, 3, 3));
    circles.push(new p.Circle(p.windowWidth/2+100, p.windowHeight/2+100, -3, 3));
  };

  p.draw = function () {
      p.background('#3A3765');
      for (let i=0; i<circles.length; i++) {
        circles[i].display();
        circles[i].move();
      }
      colorChange++

      // if(p.windowWidth < 770){
      //   frameLeftX = 0;
      //   frameRightX = 0;
      //   frameTopY = 0;
      //   frameBottomY = 0;
      // }
      //
      // else {
      //   frameLeftX = p.windowWidth/2 - 152;
      //   frameRightX = p.windowWidth/2 + 152;
      //   frameTopY = 378;
      //   frameBottomY = 682;
      //
      //   p.line(frameLeftX, frameTopY, frameRightX, frameTopY);
      //   p.line(frameLeftX, frameBottomY, frameRightX, frameBottomY);
      //   p.line(frameLeftX, frameTopY, frameLeftX, frameBottomY);
      //   p.line(frameRightX, frameTopY, frameRightX, frameBottomY);
      // }
  };

  p.mousePressed = function () {
      if(circles.length > 200)
          return;

      let xspeed = Math.floor(Math.random() * Math.floor(5))+1;
      let yspeed = Math.floor(Math.random() * Math.floor(5))+1;
      circles.push(new p.Circle(p.mouseX, p.mouseY, xspeed, yspeed));
  };

  p.Circle = function(x,y,xspeed,yspeed){
      this.x = x;
      this.y = y;
      this.xspeed = xspeed;
      this.yspeed = yspeed;

      this.move = function() {
        this.x += this.xspeed;
        this.y += this.yspeed;
        if (this.x > p.windowWidth - r || this.x < r ) {
            this.xspeed = -this.xspeed;
        }
        if (this.y > p.windowHeight - r || this.y < r ) {
            this.yspeed = -this.yspeed;
        }
        // figure out if its being hit from the top/bottom or the side using speed??
        if (this.x > frameLeftX && this.x < frameRightX && this.y > frameTopY && this.y < frameBottomY) {
          this.xspeed = -this.xspeed;
          this.yspeed = -this.yspeed;
        }
      };

      this.display = function() {
        p.stroke(255);
        p.fill(p.noise(colorChange/1000)*255, p.noise(colorChange/1000+10000)*255, p.noise(5*colorChange/1000+5*colorChange/1000+20000)*255);
        p.ellipse(this.x, this.y, r*2, r*2);
      };
  }
};
