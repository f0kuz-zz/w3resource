/**
 * Created by marcingroszkiewicz on 17.04.2016.
 */

arr1 = [1,0,2,3,4,34,8,2,45];
arr2 = [3,5,6,7,8,13,23,34,56,67];


function sumArray(a, b) {

    var sum = [];
    var ctr = 0;

    while(ctr < a.length && ctr < b.length) {

        sum.push(a[ctr] + b[ctr]);
        ctr++;
    }

    if(a.length < b.length) {

       for(var i = a.length; i < b.length; i++) {

           sum.push(b[i]);
       }

    } else if(a.length > b.length) {

        for(var i = b.length; i < a.length; i++) {

            sum.push(a[i]);
        }
    }

    console.log(sum);
}

sumArray(arr1, arr2);