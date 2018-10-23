## Useful links for Marc
- icons from FontAwesome: https://fontawesome.com/icons?d=gallery&m=free
- bootstrap docs: https://getbootstrap.com/docs/4.1/components/buttons/
- https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp

## To fix the 3x3 invertible matrix error
wrap line 68213 `this.invert3x3().transpose3x3(this.mat3);`
in a null check like so:

```
if(this.invert3x3()){
    this.invert3x3().transpose3x3(this.mat3);
}
```
