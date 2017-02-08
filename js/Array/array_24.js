/**
 * Created by marcingroszkiewicz on 03.05.2016.
 */

var sample = [NaN, 0, 15, false, -22, '',undefined, 47, null];

function filterArray(a) {
    var result = [],
        index = 0,
        resIndex = 0,
        aLength = a ? a.length : 0;

    while(index++ < aLength) {
        var value = a[index];

        if(value) {
            result.push(value)
        }
    }

    return result;
}

// function filter_array(a) {
//    var result = [],
//        index = 0,
//        resIndex = 0,
//        aLength = a ? a.length : 0;
//
//    while(index++ < aLength) {
//        var value = a[index];
//
//        if(value) {
//            result[resIndex++] = value;
//        }
//    }
//
//     return result;
// }

console.log(filterArray(sample));