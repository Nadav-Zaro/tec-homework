const fs = require("fs")
const file = "books_library.json"

const booksArr = [
    {name: "node js",author: "nadav",pages: 234},
    {name: "javascript",author: "nadav",pages: 324},
    {name: "books",author: "nadav",pages: 432},
]

function booksChange(booksArr) {
    return booksArr.name == process.argv[2]
}

switch (process.argv[2]) {
    case "add":
        const result = booksArr.find(booksChange)
        if (err) {
            console.log("book already exist");
        }
        else{
            let book = {name:process.argv[3], author:process.argv[4], pages:process.argv[5]}
            fs.writeFileSync(file,"utf8")
        }
        break;

    default:
        break;
}
if (err) {
    console.log("book already exist");
}
else{
    le
}

