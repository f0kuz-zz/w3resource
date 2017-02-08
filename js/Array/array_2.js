/**
 * Created by marcingroszkiewicz on 06.04.2016.
 */

// POSRANE ZDANIE - JAK DLA MNIE TO TO NIE DZIALA I NIE MA PRAWA

function arrayClone(arra1) {

    return arra1.slice(0,2);

}

console.log(arrayClone([1, 2, 4, 0]));
console.log(arrayClone([1, 2, [4, 0]]));

var test = arrayClone([1, 2, 4, 0]);





//var myHonda = {
//    color: "red",
//    wheels: 4,
//    engine: {
//        cylinders: 2,
//        size: 1.6
//    }
//};
//
//var myCar = [myHonda, 2, 'cherry condition', 'purchased 1997'];
//
//var newCar = myCar.slice(0, 2);
//
//console.log(myCar.toSource());
//
//console.log("myCar = " + myCar.toSource());
//console.log("newCar = " + newCar.toSource());
//console.log("myCar[0].color = " + myCar[0].color);
//
//myHonda.color = "Blue";
//
//console.log("The new color of my Honda is " + myHonda.color);