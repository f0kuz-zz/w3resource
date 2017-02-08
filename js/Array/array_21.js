/**
 * Created by marcingroszkiewicz on 27.04.2016.
 */

function flattenArray(array) {
    var count = 0;
    
    while(count < array.length) {
        array = array.reduce(function(a, b) {
            return a.concat(b);
        },[])
        count++;
    }

    return array;
}

console.log(flattenArray([1, [2,[3,[4]]]]));

// NIE SPLASZCZA ZAGLEBIONYCH TABLIC

// var arr = [1, [2], [3, [[4]]],[5,6]];
// var merged = [].concat.apply([], arr);
//
//
// console.log(merged);
