/**
 * Created by marcingroszkiewicz on 10.05.2016.
 */

function isIn(arr, n) {
    for (var i = 0; i < arr.length; i++) {
        if(arr.indexOf(n) != -1) {
            return true;
        }
    }

    return false;
}

// function isIn(arr, n) {
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i] === n) {
//             return true;
//         }
//     }
//     return false;
// }

console.log(isIn([2, 5, 6, 9], 5));