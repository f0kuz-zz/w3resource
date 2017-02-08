/**
 * Created by marcingroszkiewicz on 20.05.2016.
 */

function Computer(model, ram, hdd, mhz) {
    this.model = model;
    this.ram = ram;
    this.hdd = hdd;
    this.mhz = mhz;
}

var laptop = new Computer('Asus', '8GB', 200, 4000);

function keyToVal(obj) {
    var resVal = {},
        count = 0,
        j = 0;

    for(key in obj) {
        if(obj.hasOwnProperty(key));
        count++;
    }

    L = count;

    while(j < L) {
        for(key1 in obj) {
            resVal[j] = obj[key1];
            j++;
        }
    }

    //return resVal;

    var resKey = Object.keys(obj);

    for(var i = 0; i < L; i++) {
        for(key2 in resVal) {
            resVal[resKey[i]] = key2;
        }
    }

    return resVal;
}

console.log(keyToVal(laptop));
//console.log(Object.keys(laptop));
