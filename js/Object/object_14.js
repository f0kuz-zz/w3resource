/**
 * Created by marcingroszkiewicz on 19.05.2016.
 */

function allValues(obj) {
    var valAccess = [];

    for(key in obj) {
        valAccess.push(obj[key]);
    }

    return valAccess;
}

function Military(place, mission, auto) {
    this.place = place;
    this.mission = mission;
    this.auto = auto;
    this.size = 220
}

var soldier = new Military('Boston', 'FortBreak', 'Tank');

console.log(allValues(soldier));