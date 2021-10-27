// exception_1
// e = false => 1,2,3,5
// e = true => 1,2,4,5

// exception_2
// e = false => 1,2,3,clean up,5
// e = true => 1,2,4,clean up ,5

// exception_3
// function safeDiv(num1,num2) {
//     try {
//         if (num2 ==0) {
//             throw "denominator is 0"
//         }
//         console.log(num1 / num2);
//     } catch (error) {
//         console.log(error);
//     }
// }
// safeDiv(process.argv[2],process.argv[3])