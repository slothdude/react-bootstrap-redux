## Public URL

https://marc-personal-website.herokuapp.com/

## Getting Started

```
git clone https://github.com/slothdude/react-bootstrap-redux.git
cd react-bootstrap-redux
npm install
npm start
```



## To fix the 3x3 invertible matrix error
wrap line 68213 `this.invert3x3().transpose3x3(this.mat3);` in the p5.js file in node_modules
in a null check like so:

```
if(this.invert3x3()){
    this.invert3x3().transpose3x3(this.mat3);
}
```
