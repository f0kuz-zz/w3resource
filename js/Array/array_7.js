/**
 * Created by marcingroszkiewicz on 09.04.2016.
 */

/*Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
 Sample Output : -4,-3,1,2,3,5,6,7,8*/

var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];


arr1.sort(function (a, b) {

    return a - b;

});

console.log(arr1);

var names = ["Marcin", "Ania", "krzysiek","Zbigniew", "ola", "Leszek"];


names.sort(function(a, b) {

   if(a < b) {
       return -1;
   } else if(a > b) {
       return 1;
   } else {
       return 0;
   }

});

console.log(names);
