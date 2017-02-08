/**
 * Created by marcingroszkiewicz on 12.04.2016.
 */

var arr = ["Marcin", "Madzia", 2, 4, 2, "Jacek", "marcin", "Igor", "Madzia",4, 7, 4, "Madzia", 8]; // [1, 2, 2, 4, 5, 4, 7, 13, 8, 7, 3, 6, 13];

// ES6

function deleteDuplicate(a) {

    unique = Array.from(new Set(a));
    return unique;
}

console.log(deleteDuplicate(arr));

//function deleteDuplicate(a) {
//
//    var obj = {};
//
//    return a.filter(function (elem) {
//        return obj.hasOwnProperty(elem) ? false : (obj[elem] = true);
//    });
//}
//
//console.log(deleteDuplicate(arr));


//function deleteDuplicate(num) {
//
//    var output = [],
//        obj = {};
//
//    for(var i = 0; i < num.length; i++) {
//        obj[num[i]] = 0; // z zalozenia kazdy objekt w JS posiada unikalne klucze
//    }
//
//    for(key in obj) {
//        output.push(key);
//    }
//
//    return output;
//
//}
//
//console.log(arr);
//console.log(deleteDuplicate(arr));


// Dziala ale nie rozumiem w jaki sposob - zreszta nie jest wydajny dla duzych tablic(quadratic times)

//var uniq = arr.filter(function(element, index, array) {
//
//    return array.indexOf(element) == index;
//});
//
//console.log(uniq);


