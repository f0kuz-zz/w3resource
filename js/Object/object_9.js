/**
 * Created by marcingroszkiewicz on 18.05.2016.
 */

function Circle(radius) {
    this.radius = radius;
    this.pi = Math.PI;
    this.getArea = function() {
        return (this.pi * Math.pow(radius, 2)).toFixed(2);
    };
    this.getPerimeter = function() {
        return (2 * this.pi * radius).toFixed(2);
    }
}

var myCircle = new Circle(7);

var nextCircle = {
    radius : 8,
    pi : Math.PI
};

Object.prototype.getArea = function() {
    return (this.pi * Math.pow(this.radius, 2)).toFixed(2);
};

Object.prototype.getPerimeter = function() {
  return (2 * this.pi * this.radius).toFixed(2);
};

console.log(myCircle.getArea());
console.log(myCircle.getPerimeter());

console.log(nextCircle.getArea());
console.log(nextCircle.getPerimeter());
