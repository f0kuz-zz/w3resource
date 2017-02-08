/**
 * Created by marcingroszkiewicz on 09.04.2016.
 */


var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3],
    freq,
    max = 0;


arr.sort();


for(var i = 0; i < arr.length; i++) {

    if(arr[i] === arr[i+1]) {
        freq++;
    } else {
        freq = 0;
    }

    if(freq > max) {
        result = arr[i];
        max = freq;
    }

}


console.log("Most frequently value is: " + result + " cause her frequently is " + max);

