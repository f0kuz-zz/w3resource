/**
 * Created by marcingroszkiewicz on 13.05.2016.
 */

function arrayRange(start, len) {
    var arr = new Array(len);

    for(var i = 0; i < arr.length; i++) {
        arr[i] = start++;
    }

    return arr;
}

// function arrayRange(start, quant) {
//     var arr = [];
//     var count = 0;
//
//     while(count < quant) {
//         arr.push(start++);
//         count++;
//     }
//
//     return arr;
// }

console.log(arrayRange(6, 8));
//[-6, -5, -4, -3]¬