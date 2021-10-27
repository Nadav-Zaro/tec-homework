const fs = require("fs");
const file = "books.json";
const booksJson = fs.readFileSync(file, "utf8")
const booksObj = JSON.parse(booksJson);
function findShortBook(value) {
    return value;
}
const result = booksObj.find(findShortBook)
if (result == undefined) {
    console.log("error");
}
else{
    let min = result.pages
    booksObj.forEach(element => {
        if (min > element.pages) {
            min = element.pages
        }
    });
    console.log(min);
}