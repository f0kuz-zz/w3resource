/**
 * Created by marcingroszkiewicz on 04.05.2016.
 */

function twoSum(nums, target) {
    var res = [];

    for(var i = 0; i < nums.length; i++) {
        for(var j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                res.push('Array[' + i + '] + Array[' + j + '] = ' + target);
            }
        }
    }

    return res;
}

// function two_sum(nums, target) {
//     var result = [];
//
//     for(var i = 0; i < nums.length; i++) {
//         for(var j = i+1; j < nums.length; j++) {
//             if(nums[i] + nums[j] == target) {
//                 result.push('Array[' + i + '] + Array[' + [j] + '] = ' + target);
//             }
//         }
//     }
//
//     return result;
// }

console.log(twoSum([10,20,10,40,50,60,70], 50));