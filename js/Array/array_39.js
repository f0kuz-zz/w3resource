/**
 * Created by marcingroszkiewicz on 12.05.2016.
 */

var array = [58, '', 'abcd', true, null, false, 0];

function checkFalseValue(arr) {
    var i = arr.length,
        res = [];

    while(i-- >= 0) {
        if(arr[i]) {
            res.push(arr[i]);
        }
    }

    return res;
}

// function isEligible(value) {
//     if(value !== null || value !== false || value !== "" || value !== 0) {
//         return value;
//     }
// }
//
// function checkFalseValue(arr) {
//     return arr.filter(isEligible);
// }

console.log(checkFalseValue(array));