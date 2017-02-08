/**
 * Created by marcingroszkiewicz on 17.05.2016.
 */

Array.prototype.bubbleSort = function() {
    var isSorted = false;

    while(!isSorted) {
        isSorted = true;

        for(var i = this.length -1; i >= 0 ; i--) {
            if(this[i] < this[i -1]) {
                var tmp = this[i];
                this[i] = this[i -1];
                this[i -1] = tmp;
                isSorted = false;
            }
        }
    }

    return this;
};

var start = new Date();
console.log([2,-5,55,66,34,67,2,1,5,-9,4,34,0,5,34,16].bubbleSort());
var stop = new Date();
var timeWas = stop - start;
console.log(timeWas);