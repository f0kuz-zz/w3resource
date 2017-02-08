/**
 * Created by marcingroszkiewicz on 15.05.2016.
 */

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

function delProp(prop) {
    for(key in student) {
        if(key === prop) {
            delete student[key]; // jedynie taki zapis w funkcji usuwa pair key/value
        }
    }

    return student;
}

console.log(delProp('rollno'));

//console.log(student);
//delete student.rollno;
//console.log(student);