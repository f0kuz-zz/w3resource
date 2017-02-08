/**
 * Created by marcingroszkiewicz on 19.05.2016.
 */

var onThisDay = new Date();

function Student(name, job, date) {
    this.name = name;
    this.date = onThisDay;
    this.year = this.date.getFullYear();
    this.job = job;
}

function isObject(obj) {
    var type = typeof obj;
    //return type === 'function' || type === 'object' && !!obj;
    return type;
}

function allKeys(obj) {
    if(!isObject(obj)) {
        return [];
    }
    var keyAccess = [];

    for(key in obj) {
        keyAccess.push(key);
    }

    return keyAccess;

}

Object.prototype.ageMethod = function (age) {
    return this.year - age;
};

Object.prototype.rollno = true;

var student1 = new Student('Marcin', 'programmer', onThisDay);

console.dir(allKeys(student1));