export default function sketch (p) {
  let rotation = 0;

  p.setup = function () {
    p.createCanvas(300, 300, p.WEBGL);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.rotation){
      rotation = props.rotation * Math.PI / 180;
    }
  };

  p.draw = function () {
    p.background('#3A3765');
    p.stroke(255);
    p.fill(p.noise(rotation/1000)*255, p.noise(rotation/1000+10000)*255, p.noise(5*rotation/1000+5*rotation/1000+20000)*255);
    p.push();
    p.rotateX(((p.mouseY-p.height)/p.height)%360);
    // p.rotateY((((p.mouseX-p.width)/(p.width*2))+rotation/100)%360);
    p.rotateY(rotation/100);
    p.sphere(100, 24, 16);
    p.pop();
    rotation++;
  };
};
