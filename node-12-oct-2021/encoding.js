// encoding_1
// const fs = require("fs");
// const fileName = "english.txt";
// fs.writeFileSync(fileName, "node is great");
// const data = fs.readFileSync(fileName)
// console.log(data);
// לא התקבלה מחרוזת תקינה ניתן להמיר אתה בעזרת הוספת אינקודין לפעולת הקריאה

// encoding_2
// const fs = require("fs");
// const fileName = "hebrew.txt";
// fs.writeFileSync(fileName, "שלום עולם")
// const data = fs.readFileSync(fileName)
// console.log(data);
// לא התקבלה מחרוזת תקינה ניתן להמיר אתה בעזרת הוספת אינקודין לפעולת הקריאה

// encoding_3
// const fs = require("fs");
// const fileName = "hebrew.txt";
// fs.writeFile(fileName, "שלום עולם", (err,data)=>{
//     if (err) {
//         console.log(err);
//     }
//     else{
//         const data = fs.readFileSync(fileName)
//         console.log(data);
//     }
// })

// exception_1
//  במקרה והמקרה שקרי פעולת ההדפסה תתבצע הבלוק 
// במקרה והמקרה 
let e = false
console.log(1);
try {
    console.log(2);
    if(e)
    {
        console.log("ad");
        throw "some error"
    }
    console.log(3);
} catch (error) {
    console.log(4);
}
console.log(5);
