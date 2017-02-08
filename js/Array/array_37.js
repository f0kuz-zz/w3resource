/**
 * Created by marcingroszkiewicz on 11.05.2016.
 */

function preFilled(n, val) {
    return Array.apply(null, new Array(n)).map(String.prototype.valueOf, val);
}

console.log(preFilled(3, 'sample text'));