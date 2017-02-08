/**
 * Created by marcingroszkiewicz on 28.04.2016.
 */

var arr1 = [1, 2, 3, 7, 8, 8];
var arr2 = [100, 2, 1, 76, 10, 8];

// POPRAWNA
//
// function union(a1, a2) {
//     var res = [],
//         obj = {};
//
//     if(a1 === null || a2 === null) {
//         return void 0;
//     }
//
//     for(var i = a1.length - 1; i >= 0; i--) {
//         obj[a1[i]] = 0;
//     }
//
//     for(var i = a2.length - 1; i >= 0; i--) {
//         obj[a2[i]] = 0;
//     }
//
//     for(key in obj) {
//         res.push(key);
//     }
//
//     return res;
// }
//
//
// console.log(union(arr1, arr2));

// POPRAWNA

function union(a1, a2) {
    var newArr = a1.concat(a2);
        newArr = newArr.filter(function(item, index) {
            return newArr.indexOf(item) === index;
        });

    return newArr.sort(function (a, b) {
        return a - b;
    });

    //// Albo tak ale podpowiada jakies glupoty
    // return newArr.sort((a, b) => a - b);
}
console.log(union(arr1, arr2));



















































//
//
// function union(a, b) {
//
//     var obj = {},
//         res = [];
//
//     if((a == null) || (b == null)) {
//
//         return void 0;
//     }
//
//     for(var i = a.length -1; i >= 0; --i) {
//
//         obj[a[i]] = a[i];
//     }
//
//     for(var i = b.length -1; i >= 0; --i) {
//
//         obj[b[i]] = b[i];
//     }
//
//     for(key in obj) {
//
//         res.push(obj[key]);
//     }
//
//     console.log(res);
// }
//
// union(arr1, arr2);