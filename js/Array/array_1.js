/**
 * Created by marcingroszkiewicz on 06.04.2016.
 */

// Moze byc tak

function isArray1(input) {

    arr = (toString.call(input) === "[object Array]");
    return arr;

}

// Moze byc tez tak

function isArray2(input) {

    arr = !!Array.isArray(input);
    return arr;

}


var array = ["input"];

console.log("TRUE");

console.log(Array.isArray([0, 2, "Marcin"]));

console.log(Array.isArray(new Array()));

console.log(Array.isArray([]));

console.log(Array.isArray(Array.prototype));

console.log(Array.isArray(array));

console.log("FALSE");

console.log(Array.isArray());

console.log(Array.isArray({}));

console.log(Array.isArray("string"));

console.log(Array.isArray(1));

console.log(Array.isArray(true));

console.log(Array.isArray(null));

console.log(Array.isArray(undefined));

console.log(Array.isArray({__proto__: Array.prototype}));
