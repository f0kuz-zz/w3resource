/**
 * Created by marcingroszkiewicz on 15.05.2016.
 */

var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

function displayRead(arr) {
    for(var i = 0; i < arr.length; i++) {
        var book = arr[i].title + "' by the '" + arr[i].author + "'";
        if(arr[i].readingStatus === true) {
            console.log("All ready read '" + book);
        }

        if(arr[i].readingStatus === false) {
            console.log("You still need to read '" + book);
        }
    }
}

displayRead(library);