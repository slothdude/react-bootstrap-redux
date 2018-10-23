export default function sketch (p) {
  let rotation = 0;

  p.setup = function () {
    let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {

  };

  p.draw = function () {
    p.background(0);
  };
};
