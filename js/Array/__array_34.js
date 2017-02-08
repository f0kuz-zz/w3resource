/**
 * Created by marcingroszkiewicz on 10.05.2016.
 */

var arr = [43, 9, 56, 23, 88, 90, 99, 652, 800];

function nthlargest(arr,highest){
    var x = 0,
        y = 0,
        z = 0,
        temp = 0,
        l = arr.length,
        flag = false,
        result = false;

    while(x < l){
        y = x + 1;

        if(y < l){
            for(z = y; z < l; z++){

                if(arr[x] < arr[z]){
                    temp = arr[z];
                    arr[z] = arr[x];
                    arr[x] = temp;
                    flag = true;
                }else{
                    continue;
                }
            }
        }

        if(flag){
            flag = false;
        }else{
            x++;
            if(x === highest){

                result = true;
            }
        }
        if(result){
            break;
        }
    }

    return (arr[(highest - 1)]);
}

console.log(nthlargest(arr, 1));