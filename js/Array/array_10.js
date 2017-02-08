/**
 * Created by marcingroszkiewicz on 10.04.2016.
 */

var arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];


for(var i in arr) { // i to jest index 0 tablicy arr

    console.log('"' + "row " + i + '"');

    for(var j in arr[i]) { // j to jest index 0 w 0wym indexie tablicy arr

        console.log('" ' + arr[i][j] + '"'); // dostan sie do 0wego indexu tablicy arr i jego 0wego indexu a nastepnie wyswietl w konsoli

    }

}


//var counter = 0;

//for(var i = 0; i < arr.length; i++) {
//
//    console.log('"' + "row " + counter + '"');
//
//    for(var j = 0; j < arr.length - 1; j++) {
//        console.log('" ' + arr[i][j] + '"');
//    }
//
//    counter++;
//
//}