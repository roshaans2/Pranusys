const findFactorial = (n) => {
    let f = 1
    for(let i=1;i<=n;i++){
        f = f*i
    }
    return f
}

const n = 4
console.log(findFactorial(n))