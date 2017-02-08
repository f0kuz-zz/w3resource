/**
 * Created by marcingroszkiewicz on 17.05.2016.
 */

function Cylinder(cylHeight, cylDiameter) {
    this.cylHeight = cylHeight;
    this.cylDiameter = cylDiameter;
}

Object.prototype.Volume = function() {
  var radius = this.cylDiameter / 2;
    return this.cylHeight * Math.PI * radius * radius;
};

var cyl = new Cylinder(7, 4);
console.log("volume = " + cyl.Volume().toFixed(4));