/**
 * Created by marcingroszkiewicz on 15.05.2016.
 */

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
};

function objLength(obj) {
    count = 0;

    for(key in obj) {
        if(obj.hasOwnProperty(key)) {
            count++;
        }
    }

    myLength = count;

    return myLength;
}

console.log(objLength(student));