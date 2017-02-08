/**
 * Created by marcingroszkiewicz on 26.09.2016.
 */

function substrings(str) {
    var array = [];
    for (var x = 0, y = 1; x < str.length; x++, y++)
    {
        array[x]=str.substring(x, y); /*[d] [o] [g] [y] [s]*/
    }
    var combi = [];
    var temp= "";
    var slent = Math.pow(2, array.length); /*3*3=9*/

    for (var i = 0; i < slent ; i++)
    {
        temp= "";
        for (var j=0;j<array.length;j++) {
            if (( i & Math.pow(2, j) )){
                temp += array[j];
            }
        }
        if (temp !== "")
        {
            combi.push(temp);
        }
    }
    console.log(combi.join("\n"));
}

substrings("dog");