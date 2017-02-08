/**
 * Created by marcingroszkiewicz on 24.09.2016.
 */

(function () {
    function reverseChar(char) {
        // celowa zamiana na string
        // String literal
        // char = char + '+';
        // String constructor
        // char = String(char);
        // toString
        char = char.toString();
        return char.split('').reverse().join('');
    }

    console.log(reverseChar(235436));
})();

