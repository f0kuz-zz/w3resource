/**
 * Created by marcingroszkiewicz on 15.05.2016.
 */

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

function listProp() {
    var res = [];
    for(key in student) {
        res.push(key);
    }

    return res.toString();
}

console.log(listProp());
