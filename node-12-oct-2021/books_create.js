// object_persistence_1
const fs = require("fs");
const file = "books.json";
const books = [
    {name: "json" ,description: "undefined",pages: 232},
    {name: "node-js" ,description: "NaN",pages: 232}
]
const booksJson = JSON.stringify(books)
fs.writeFileSync(file,booksJson)