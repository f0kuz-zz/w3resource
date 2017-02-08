/**
 * Created by marcingroszkiewicz on 17.04.2016.
 */

var arr = ["Madzia", "Ciocia", "Legia", "Mistrz", "Mecz", "Telefon"];


function shuffle(a) {

    var long = a.length,
        index,
        temp;

    while(long >= 0) {

        index = Math.floor(Math.random() * long); // zakladamy losowa zmienna index ktora odpowiada za index losowego elementu
        console.log(index); // 1

        long--; // 5

        // Swap the last element with it
        temp = arr[long];
        console.log(temp); // temp = Telefon
        arr[long] = arr[index];
        console.log(arr[long]); // arr[5] = Ciocia
        arr[index] = temp;
        console.log(arr[index]); // arr[1](Ciocia) = Telefon
    }

    return a;
}

console.log(shuffle(arr));