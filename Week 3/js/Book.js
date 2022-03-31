
alert("Hello! Welcome to Book Management System!")

var book = []

var input = prompt("1 -> View All Books \n2 -> Add a Book \n3 -> Delete a Book \n4 -> Exit the system")

while(input != 4){
    if(input == 1){
        viewBooks();
    }
    else if(input == 2){
        var newBook = prompt("Please enter the new book name");
        addBook(newBook);
    }
    else if(input == 3){
        var delBook = prompt("Please enter name of book to be deleted");
        deleteBook(delBook)
    }   
    else{
        console.log("Option is invalid!");
    }
    input = prompt("1 -> View All Books \n2 -> Add a Book \n3 -> Delete a Book \n4 -> Exit the system")
};

alert("Thank you! Hope to see you again!")

function viewBooks(){
    console.log("The books that are in the library are : ");
    for(var b of book){
        console.log(b);
    }
}

function addBook(newBook){
    var confirmAdd = confirm("Do you really want to add " + newBook + "?")
    if(confirmAdd){
        book.push(newBook);
        console.log("Book added!")
    }
    else{
        console.log("Book has not been added!")
    }

}

function deleteBook(delBook){
    var index = book.indexOf(delBook);
    //if book is not present, the value will be -1
    if(index == -1){
        console.log("Book does not exist in this library");
    }
    else{
        var confirmDel = confirm("Do you really want to deleted " + delBook + "?")
        if(confirmDel){
            book.splice(index, 1);
            console.log("Book deleted!")
        }
        else{
            console.log("Book has not been deleted!")
        }

    }
}
