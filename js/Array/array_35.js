/**
 * Created by marcingroszkiewicz on 10.05.2016.
 */

var arr = [1,2,5,7,56,67,8,9,0,34];

function getRandom(a) {
    return a[Math.floor(Math.random() * a.length)];
}

// function getRandom(a) {
//     return a[Math.floor(Math.random() * a.length)];
// }

console.log(getRandom(arr));