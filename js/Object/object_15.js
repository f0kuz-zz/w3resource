/**
 * Created by marcingroszkiewicz on 20.05.2016.
 */

var Druzyna = {
    iloscOsob : 10,
    poziom : 'Mid',
    charakter : 'Ostry'
};

function keyVal(obj) {
    var res = [],
        count = 0;

    for(key in obj) {
        if(obj.hasOwnProperty(key));
        count++;
    }

    var L = count;
    var count1 = 0;

    while(count1 < L) {
        //count1 = 0;

        for(key in obj) {
            res[count1] = [key, obj[key]];
            count1++;
        }
    }

    return res;
}

console.log(keyVal(Druzyna));