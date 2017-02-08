/**
 * Created by marcingroszkiewicz on 11.04.2016.
 */

var arr = [1, 2, 3, 4, 5, 6],
    sum = 0,
    product = 1;


for(var i = 0; i < arr.length; i++) {

    sum += arr[i];
    product *= arr[i];

}

console.log("Sum: " + sum + " Product: " + product);


//function sumPro(x) {
//
//    var sum = x.reduce(function(prevVal, currVal) {
//        return prevVal + currVal;
//    });
//
//    var product = x.reduce(function(prevVal, currVal) {
//        return prevVal * currVal;
//    });
//
//    console.log("Sum: " + sum + " Product: " + product);
//
//}
//
//sumPro(arr);