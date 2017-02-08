/**
 * Created by marcingroszkiewicz on 26.04.2016.
 */

var arr = [1,4,4,5,6,4,1,23,45,1,6,34,23,34,1];


function duplicateCharacters(arr) {
    var dupeChars = {}, ctr = 0, duplicates = [];

//Creates the specific KEYS in the 'dupeChars' object and assign them a 0 value
//IMPORTANT - A variable CANT be named with a leading number, thus we add a _ to the KEY
    for(var i = 0; i < arr.length; i++){

        dupeChars[('_' + arr[i])] = 0;
    }
    console.log(dupeChars);

//Increment the specific KEY/VALUE pair in the 'dupeChars' object
    for(var i = 0; i < arr.length; i++){

        dupeChars[ ('_' + arr[i]) ]++;
                                         // dupeObj[1]++;
                                         // dupeObj[4]
    }
    console.log(dupeChars);

//Adds ONLY the duplicated values to the array, by scanning through the
//object to find instances that have MORE then 1 in their Key/Value pair
    for(var key in dupeChars) {

        if(dupeChars[key] > 1) {

            duplicates[ctr] = key.slice(1); //slice off the _ from the key
            ctr++;
        }
    }

    console.log('Original array: [' + arr + ']\n' + 'Duplicate values: ' + duplicates);
}

duplicateCharacters(arr);