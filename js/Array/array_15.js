/**
 * Created by marcingroszkiewicz on 17.04.2016.
 */

var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
var ordinal = ["th","st","nd","rd"];
var text = " choice is ";
var counter = 1;
var output = "";


//for(var i = 0; i < color.length; i++) {
//
//    if(i <= 2) {
//        console.log(counter + ordinal[i+1] + text + color[i]);
//    } else {
//        console.log(counter + ordinal[0] + text + color[i]);
//    }
//
//    counter++;
//}


for(var i = 0; i < color.length; i++) {

    switch(i) {
        case 0:
            output += [i+1] + ordinal[i+1] + text + color[i] + "\n";
            break;
        case 1:
            output += [i+1] + ordinal[i+1] + text + color[i] + "\n";
            break;
        case 2:
            output += [i+1] + ordinal[i+1] + text + color[i] + "\n";
            break;
        default:
            output += [i+1] + ordinal[0] + text + color[i] + "\n";
    }
}

console.log(output);

