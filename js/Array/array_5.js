/**
 * Created by marcingroszkiewicz on 08.04.2016.
 */

    /*"Red,Green,White,Black"
     "Red,Green,White,Black"
     "Red+Green+White+Black"*/

var myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join(" + "));


//function convertString(array, text) {
//
//    //return array.toString();
//    text;
//
//    for(var i = 0; i <= array.length * 3; i++) {
//
//        text += array[i].toString();
//        return text;
//
//    }
//
//}
//
//console.log(convertString(myColor, tablic));


//var text = " ";
//
//for(var i = 0; i <= (myColor.length * 3) - 1; i++) {
//
//    if(i < myColor.length) {
//        text += myColor[i].toString() + ", ";
//    }
//
//}
//
//document.getElementById('demo').innerHTML = text;
