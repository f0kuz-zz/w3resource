/**
 * Created by marcingroszkiewicz on 09.04.2016.
 */

//var str = prompt("Podaj teskt", "Tu wpisz tekst"),
//    UPPER = "ABCDEFGHIJKLMNOPRSTUWXYZ",
//    LOWER = UPPER.toLowerCase(),
//    result = [];
//
//
//
//for(var i = 0; i < str.length; i++) {
//
//    if(UPPER.indexOf(str[i]) !== -1) {
//
//        result.push(str[i].toLowerCase());
//
//    } else if(LOWER.indexOf(str[i]) !== -1) {
//
//        result.push(str[i].toUpperCase());
//
//    } else {
//
//        result.push(str[i]);
//
//    }
//// TODO-me: stop using alert
//}
//
//console.log(result.join("")); // wazne zeby metoda przyjmowala cudzyslowy



function swap(text) {

    var sentence = text.split(""); // wazne zeby metoda przyjmowala cudzyslowy. W innym wypadku instrukcja warunkowa ponizej nie odczyta indeksu

    for(var i = 0; i < text.length; i++) {

        if(sentence[i] == sentence[i].toUpperCase()) {

            sentence[i] = sentence[i].toLowerCase();

        } else if(sentence[i] == sentence[i].toLowerCase()) {

            sentence[i] = sentence[i].toUpperCase();

        }

    }

    result = sentence.join("");
    console.log(result);

}

swap("Marcin");

