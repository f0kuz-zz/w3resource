/**
 * Created by marcingroszkiewicz on 10.04.2016.
 */

var arr = [0, 1, 2, 3, 4];


function sumSq() {

    var sum = 0,
        i = arr.length; // i = 5

    while(i--) { // bardzo fajny sposob! teraz i = 4 czyli prawda i dekrementacja az i = 0 czyli falsz i zatrzymanie petli
        sum += Math.pow(arr[i], 2); // a tutaj tak jak w petli for i przyjmuje okreslona wartosc
    }

    return sum; // funkcja powinna zwracac wynik za pomoca return
}

console.log(sumSq(arr));


//function sumSq() {
//
//var sum = 0;  // wazne zeby przypisac 0 poniewaz jak jest pusta wartosc zmiennej to zwraca NaN (innaczej jest gdy uzywamy pozniej w kodzie inkrementacji - wtedy wiadomo, ze jest to wartosc liczbowa)
//    for(var i = 0; i <= arr.length - 1; i++) {
//
//        result = Math.pow(arr[i], 2);
//
//        sum += result;
//
//        outcome = sum;
//
//    }
//    return outcome;
//}
//
//console.log(sumSq(arr));