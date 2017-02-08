/**
 * Created by marcingroszkiewicz on 09.05.2016.
 */

var array1 = [1, 2, 3];
var array2 = [2, 30, 1, 4];

// function merge(a, b) {
//    res = a.concat(b);
//
//    unique = Array.from(new Set(res));
//
//    return unique;
// }
//
// console.log(merge(array1, array2));

function merge(a, b) {
    var res = [],
        obj = {},
        newArray = a.concat(b),
        len = newArray.length;

    while(len--) {
        var item = newArray[len];

        if(!obj[item]) {
            res.unshift(item);
            obj[item] = true;
        }
    }

    return res;
}

// function merge(a, b) {
//     var res_array = [],
//         arr = a.concat(b),
//         L = arr.length,
//         obj = {};
//
//     while(L--) {
//         var item = arr[L];
//
//         if(!obj[item]) {
//             res_array.unshift(item);
//             obj[item] = true;
//         }
//     }
//
//     return res_array;
// }

console.log(merge(array1, array2));