/**
 * Created by marcingroszkiewicz on 17.05.2016.
 */

String.prototype.subset = function() {
    var res = [];

    for(var i = 0; i < this.length; i++) {
        for(var j = i +1; j < this.length +1; j++) {
            res.push(this.slice(i, j));
        }
    }

    return res;
};

console.log('dog'.subset());


//0,1 d
//0,2 og
//0,3 dog
//1,2 o
//1,3 og
//2,3 g
