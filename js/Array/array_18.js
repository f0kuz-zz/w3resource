/**
 * Created by marcingroszkiewicz on 17.04.2016.
 */


function binarySearch(array, value) {
    var l = 0,
        p = array.length - 1,
        s = Math.floor((l+p) / 2);

    array.sort(function (a, b) {
        return a - b;
    });

    while(array[s] != value && l < p) {
        if(value < array[s]) {
            p = s - 1;
        } else if(value > array[s]) {
            l = s + 1;
        }
        s = Math.floor((l+p) / 2);
    }
    return (array[s] != value) ? -1 : s;
}

var arr = [45,24,56,43,78,67,25,7,58,95,69,49,32,1];

console.log(binarySearch(arr, 69));


// function binary_Search(items, value){
//     var firstIndex  = 0,
//         lastIndex   = items.length - 1,
//         middleIndex = Math.floor((lastIndex + firstIndex)/2);
//
//     while(items[middleIndex] != value && firstIndex < lastIndex)
//     {
//         if (value < items[middleIndex])
//         {
//             lastIndex = middleIndex - 1;
//         }
//         else if (value > items[middleIndex])
//         {
//             firstIndex = middleIndex + 1;
//         }
//         middleIndex = Math.floor((lastIndex + firstIndex)/2);
//     }
//
//     return (items[middleIndex] != value) ? -1 : middleIndex;
// }
// var items = [1, 2, 3, 4, 5, 7, 8, 9];
// console.log(binary_Search(items, 1));
// console.log(binary_Search(items, 5));