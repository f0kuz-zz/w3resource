/**
 * Created by marcingroszkiewicz on 13.05.2016.
 */

function arrayRange(start, end) {
    var res = [],
        count = end - start;

    while(count-- >= 0) {
        res.push(start++);
    }

    return res;
}

// function arrayRange(s, e) {
//     var arr = [];
//
//     for(var i = s; i <= e; i++) {
//         arr.push(i);
//     }
//
//     return arr;
// }


console.log(arrayRange(-6, 15));
//[1, 2, 3, 4]