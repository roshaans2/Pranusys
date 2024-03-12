// try{
//     console.log(x);
//     //Network error
//     //Promise rejection
//     //Security Error
// }
// catch(error){
//     console.log(error)
// }

// console.log("Hello")

// console.log("Hello")
// console.log("World")

// try{
//     console.log(x)
// }
// catch(error){
//     console.log(error)
// }

// finally{
//     console.log("Hi")
// }

const prompt=require("prompt-sync")({sigint:true});

try{
const dividend = Number(prompt("Enter a dividend:"))
const divisor =  Number(prompt("Enter a divisor:"))
if(divisor == 0){
    throw new Error("Error")
    const result = dividend/divisor
    console.log(result)
}
}
catch(Error){
    console.log(Error)
}

console.log("Hello")





