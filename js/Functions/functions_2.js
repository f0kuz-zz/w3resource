/**
 * Created by marcingroszkiewicz on 26.09.2016.
 */

(function () {
    function checkPalindrom(text) {
        text = text.replace(/ /g,'').toLowerCase();
        arrText = text.split('').reverse().join('');
        // return arrText;

        if(text === arrText) {
            return 'To jest Palindrome';
        } else {
            return 'Niestety to nie to!';
        }
    }

    console.log(checkPalindrom('Kobyła ma mały bok'));
})();

function check_Palindrome(str_entry){
// Change the string into lower case and remove all non-alphanumeric characters
    var str = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    var count = 0;
// Check whether the string is empty or not
    if(str==="") {
        console.log("Nothing found!");
        return false;
    }
// Check if the length of the string is even or odd
    if ((str.length) % 2 === 0) {
        count = (str.length) / 2;
    } else {
// If the length of the string is 1 then it becomes a palindrome
        if (str.length === 1) {
            console.log("Entry is a palindrome.");
            return true;
        } else {
// If the length of the string is odd ignore middle character
            count = (str.length - 1) / 2;
        }
    }
// Loop through to check the first character to the last character and then move next
    for (var x = 0; x < count; x++) {
// Compare characters and drop them if they do not match
        if (str[x] != str.slice(-1-x)[0]) {
            console.log("Entry is not a palindrome.");
            return false;
        }
    }
    console.log("The entry is a palindrome.");
    return true;
}
check_Palindrome('kobyła ma mały bok');
check_Palindrome('nurses run');
check_Palindrome('fox');