/**
 * Created by marcingroszkiewicz on 07.04.2016.
 */

function last(array, n) {

    if(array == null) {
        return void 0;
    }
    if(n == null) {
        return array[array.length - 1];
    }
    if(n > array.length) {
        return array;
    }
    if(n < 0) {
        return [];
    }

    return array.slice(array.length - n); // sprytne, dzieki temu rownaniu zwraca zawsze odpowiedni index i jedzie do konca

}

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2, 4, 6, 9, 3, 4],3));
console.log(last([7, 9, 0, -2],6));
