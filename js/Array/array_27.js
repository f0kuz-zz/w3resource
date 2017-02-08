/**
 * Created by marcingroszkiewicz on 04.05.2016.
 */

var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];

function property_value(arr, prop) {
    var res = [],
        index = 0,
        aLength = arr.length;

    while(++index < aLength) {
        var value = arr[index];

        if(value.hasOwnProperty(prop)) {
            res.push(value[prop]);
        }
    }

    return res;
}

// function property_value(arr, prop) {
//     var res = [],
//         index = -1,
//         arrLength = arr.length;
//
//     while(++index < arrLength) {
//         var value = arr[index]; // przypisujemy index 0-wy
//
//         if(value.hasOwnProperty(prop)) {
//             res.push(value[prop]); // wyswieltamy tym szczegolnym zapisem ktory dziala tylko w takim przypadku (patrz wyzej przypisanie) -> 0[title] = The Road Ahead
//         }
//     }
//
//     return res;
// }


console.log(property_value(library, 'title'));
console.log(property_value(library, 'author'));
