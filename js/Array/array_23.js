/**
 * Created by marcingroszkiewicz on 28.04.2016.
 */
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));


// var arr1 = [2, 4, 7, 5, 2];
// var arr2 = [6, 7, 2, 3, [3, 9]];
//
//
// function difference(a, b) {
//     var sum = [],
//         diff = [];
//
//     for(var i = 0; i < a.length; i++) {
//         sum[a[i]] = false;
//     }
//
//     for(var i = 0; i < b.length; i++) {
//         if(sum[b[i]] == false) {
//             delete sum[b[i]];
//         } else {
//             sum[b[i]] = true;
//         }
//     }
//
//     for(var key in sum) {
//         diff.push(key);
//     }
//
//     return diff;
// }
//
//
// console.log(difference(arr1, arr2));



function difference(arr1,arr2) {

   var a1= flatten(arr1,true);
   var a2= flatten(arr2,true);
   var a=[], diff=[];

   for(var i=0;i<a1.length;i++)
       a[a1[i]]=false;

   for(i=0;i<a2.length;i++)
       if(a[a2[i]]===false)
       { delete a[a2[i]];}
       else a[a2[i]]=true;

   for(var k in a)
       diff.push(k);

   return diff;
}

var flatten = function(a, shallow,r){
   if(!r) {
       r = [];
   }
   if (shallow) {
       return r.concat.apply(r,a);
   }
   for(i=0; i<a.length; i++){
       if(a[i].constructor == Array){
           flatten(a[i],shallow,r);
       }else{
           r.push(a[i]);
       }
   }
   return r;
};
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
console.log(difference([1, 2, 3], [100, 2, 1, 10]));

