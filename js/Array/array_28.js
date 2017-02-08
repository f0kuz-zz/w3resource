/**
 * Created by marcingroszkiewicz on 05.05.2016.
 */

function longest_common_starting_substring(arr) {
    var arr = arr.sort(),
        a1 = arr[0],
        a2 = arr[arr.length-1],
        len = a1.length,
        i = 0;

    while(i < len && a1.charAt(i) === a2.charAt(i)) {
        i++;
    }

    return a1.substring(0, i);
}

// function longest_common_starting_substring(arr1){
//     var arr = arr1.sort(),
//         a1 = arr[0],
//         a2 = arr[arr.length-1],
//         L = a1.length,
//         i = 0;
//
//     console.log(arr);
//
//     while(i < L && a1.charAt(i) === a2.charAt(i)) {
//         i++;
//     }
//
//     return a1.substring(0, i);
// }

console.log(longest_common_starting_substring(['go', 'goog']));

console.log(longest_common_starting_substring(['SQLInjection', 'SQLTutorial']));

console.log(longest_common_starting_substring(['abcd', '1234']));

