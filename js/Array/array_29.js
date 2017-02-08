/**
 * Created by marcingroszkiewicz on 05.05.2016.
 */

function num_string_range(start, end, step) {
    var res = [];

    if(start === undefined || end === undefined || step === undefined || typeof start != typeof end) {
        return false;
    }

    if(start > end) {
        step = -step;
    }

    if(typeof start === 'string') {
        if(start.length != 1 || end.length != 1) {
            throw TypeError('String must be one character');
        }

        start = start.charCodeAt(0);
        end = end.charCodeAt(0);

        while(step > 0 ? end >= start : end <= start) {
            res.push(String.fromCharCode(start));
            start += step;
        }
    } else if(typeof start === 'number') {
        while(step > 0 ? end >= start : end <= start) {
            res.push(start);
            start += step;
        }
    }

    return res;
}


// function num_string_range(start, end, step) {
//     var range = [];
//
//     if ((typeof start == "undefined") || (typeof end == "undefined") || (typeof step == "undefined") || (typeof start) != (typeof end)) {
//         return false;
//     }
//
//     if(end < start) {
//         step = -step; // operator jednoargumentowy zmieniajacy na liczbe ujemna(a boolean zmienia na typ number)
//     }
//
//     if(typeof start == "string") {
//         if(start.length != 1 || end.length != 1) {
//             throw TypeError("String must be one character"); // rzuc wyjatek typu TypeError
//         }
//
//         start = start.charCodeAt(0);
//         end = end.charCodeAt(0);
//
//         while(step > 0 ? end >= start : end <= start) { // nie mam pojecia dlaczego musi byc taka kolejnosc true i false - DO WYJASNIENIA!
//             range.push(String.fromCharCode(start));
//             start += step;
//         }
//     } else if(typeof start == "number") {
//         while(step > 0 ? end >= start : end <= start) {
//             range.push(start);
//             start += step;
//         }
//     } else {
//         throw TypeError("Start and end must be string or number");
//     }
//
//     return range;
// }

console.log(num_string_range('a', "z", 2));
console.log(num_string_range("Z", "A", 2));
console.log(num_string_range(2, 15, 2));
console.log(num_string_range(0, 25, 5));
// console.log(num_string_range(20, 5, 5));

