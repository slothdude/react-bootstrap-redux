export default function sketch (p) {
  let r = 25;
  var colorChange = 0;
  var circles = [];

  p.setup = function () {
    let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    circles.push(new p.Circle(p.windowWidth/2, p.windowHeight/2, 3, 3));
    circles.push(new p.Circle(p.windowWidth/2+100, p.windowHeight/2+100, -3, 3));

  };

  p.draw = function () {
      p.background('#3A3765');
      for (var i=0; i<circles.length; i++) {
          // console.log(circles[i]);
        circles[i].display();
        circles[i].move();
      }
      colorChange++
  };

  p.mousePressed = function () {
      console.log(circles.length);
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
        if (this.x > p.windowWidth - r || this.x < r) {
            this.xspeed = -this.xspeed;
        }
        if (this.y > p.windowHeight - r || this.y < r) {
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
