/**
 * Created by marcingroszkiewicz on 12.05.2016.
 */

var array = [10, 20, 30, 40, 50];

function changePosition(arr, oldIndex, newIndex) {
    var x,
        temp;

    while(oldIndex < 0) {
        oldIndex += arr.length;
    }

    while(newIndex < 0) {
        newIndex += arr.length;
    }

    if(oldIndex) {
        x = arr[oldIndex];
        temp = arr[newIndex];
        arr[newIndex] = x;
        arr[oldIndex] = temp;
    }

    return arr.filter(function(el) {
        return el;
    })
}

// function changePosition(arr, oldIndex, newIndex) {
//     var x,
//         y,
//         temp;
//
//     while(oldIndex < 0) {
//         oldIndex += arr.length;
//     }
//
//     while(newIndex < 0) {
//         newIndex += arr.length;
//     }
//
//     //if(newIndex >= arr.length) {
//     //    var k = newIndex - arr.length;
//     //
//     //    while(k--) {
//     //        arr.push(undefined);
//     //    }
//     //}
//
//     if(oldIndex) {
//         x = arr[oldIndex];
//         temp = arr[newIndex];
//         arr[newIndex] = x;
//         arr[oldIndex] = temp;
//     }
//
//     return arr.filter(function(el) {
//        return el;
//     });
// }

console.log(changePosition(array, 1, 2));

