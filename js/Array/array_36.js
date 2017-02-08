/**
 * Created by marcingroszkiewicz on 10.05.2016.
 */

function preFilled(n, val) {
    return Array.apply(null, new Array(n)).map(Number.prototype.valueOf, val);
}

// function preFilled(n, val) {
//     return Array.apply(null, new Array(n)).map(Number.prototype.valueOf, val);
// }

console.log(preFilled(9, 4));
console.log(preFilled(2, 7));