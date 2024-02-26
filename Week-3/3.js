let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("First promise is resolved")
        resolve(10)
    },1000)
})

let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Second promise is resolved")
        resolve(20)
    },2000)
})

let promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Third promise is resolved")
        resolve(30)
    },3000)
})

Promise.all([promise1,promise2,promise3]).then((data)=>console.log(data)).catch((error)=>console.log(error))