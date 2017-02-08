/**
 * Created by marcingroszkiewicz on 10.05.2016.
 */

function removeArrayFromElement(arr, n) {
    var index = arr.indexOf(n);

    if(index != -1) {
        arr.splice(index, 1);
    }

    return arr;
}

// function removeArrayFromElement(arr, n) {
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i] === n) {
//             var index = arr.indexOf(arr[i]);
//             arr.splice(index, 1);
//         }
//     }
//
//     return arr;
// }

console.log(removeArrayFromElement([2, 5, 9, 6], 5));