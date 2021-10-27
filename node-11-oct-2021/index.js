// command_line_1

// const process = require("process");
// const numArr = [1, 2, 3, 4, 5];
// function findNum(value,index) {
//         if (process.argv[2] == value) {
//             console.log("index:",index);
//             return value ;
//         }
// }
// function findNum(value) {
//     return value == process.argv[2];
// }
// const result = numArr.find(findNum)

// if (result == undefined) {
//     console.log("number not exist");
// }
// else {
//     numArr.forEach((element, index) => {
//         if (element === Number(process.argv[2])) {
//             console.log("number:",element,"index:", index);
//         }
//     });
//     console.log(result);
// }

// command_line_2

// const process = require("process");
// const numArr = [1, 2, 3, 4, 5];
// function findSome() {
//     let min = numArr[0];
//     let max = numArr[0];
//     let sum = 0;
//     let avg = 0;
//     numArr.forEach(element => {
//         sum += element;
//         if (max < element) {
//             max = element;
//         }
//         if (min > element) {
//             min = element;
//         }
//     })
//     avg = sum / numArr.length;
//     if (process.argv[2] == "max") {
//         console.log("max:",max);
//     }
//     if (process.argv[2] == "min") {
//         console.log("min:",min);
//     }
//     if (process.argv[2] == "sum") {
//         console.log("sum:",sum);
//     }
//     if (process.argv[2] == "avg") {
//         console.log("avg:",avg);
//     }
// }
// findSome()

// command_line_3

// const process = require("process");
// const numArr = [1, 2, 3, 4, 5];
// function findSome2() {
//     let min = numArr[0];
//     let max = numArr[0];
//     let sum=0;
//     let avg=0;
//     numArr.forEach(element => {
//         sum += element;
//         if (max < element) {
//             max = element;
//         }
//         if (min > element) {
//             min = element;
//         }
//     })
//     avg = sum / numArr.length;
//     switch (process.argv[2]) {
//         case "max":
//             console.log("max",max);
//             break;
//             case "min":
//             console.log("min",min);
//             break;
//             case "sum":
//             console.log("sum",sum);
//             break;
//             case "avg":
//             console.log("avg",avg);
//             break;

//         default:
//             break;
//     }
// };
// findSome2()

// file_sync
// const file = "text.txt";
// const process = require("process");
// const fs = require("fs");

// 1
// function deleteAndWrite() {
//     fs.writeFileSync(process.argv[2], process.argv[3])
// }
// deleteAndWrite()

// 2
// function searchAndShow() {
//     const data = fs.readFileSync(process.argv[2], "utf8",);
//     console.log(data);
// }
// searchAndShow()


// 3
// function addText() {
//     fs.writeFileSync(process.argv[2], process.argv[3] , {flag: 'a'})
// }
// addText()

// const file2 = "text2.txt";

// 4
// function deleteAndWriteObj() {
//     const book = {name:"book1",pages:123} 
//     fs.writeFileSync(process.argv[2], JSON.stringify(book))
// }
// deleteAndWriteObj()

// 5
// function readFile() {
//     const data = JSON.parse(fs.readFileSync(file2, "utf8" ));
//     console.log("book name:",data.name,"pages:", data.pages);
// }
// readFile()

// array_opeartion_1

const bookArr = [];
bookArr.push({ name: "book1", pages: 123 });
bookArr.push({ name: "book2", pages: 231 });
bookArr.push({ name: "book3", pages: 321 });
// console.log(bookArr);

// array_opeartion_2

// const process = require("process");

// function findBook(value) {
//     return value.name == process.argv[2];
// }

// const result = bookArr.find(findBook)
// if (result == undefined) {
//     console.log("book not found");
// }
// else{
//     console.log(result.pages);
// }

// array_opeartion_3

// const process = require("process");

// function findBookAdd(value) {
//     return value.name == process.argv[2];
// }

// const result = bookArr.find(findBookAdd)
// if (result2 == undefined) {
//     console.log("book not found");
// }
// else{
//    result.pages += 100;
//    console.log(bookArr);
// }

// array_opeartion_4

// const process = require("process");process.argv[2]

// function findBook(value) {
//     return value.name == process.argv[2];
// }

// const result = bookArr.find(findBook)
// if (result == undefined) {
//     console.log("book not found");
// }
// else{
//     bookArr.splice(bookArr.indexOf(result) , 1)
//     console.log(bookArr);
// }

// array_opeartion_5

const process = require("process");

const numArr = [1, 2, 3, 4];
function findNum(value) {
    return value == process.argv[2];
}
const result = numArr.find(findNum);
if (result == undefined) {
    console.log("number not found");
}
else {
    numArr[numArr.indexOf(result)] += 1
    console.log(numArr);
}
