function calcular(dividendo, divisor) {
    return new Promise(function (resolve, reject) {
      setTimeout(()=>{
        if (divisor != 0) {
            resolve("Resultado da divisao: " + dividendo / divisor)
        } else {
            reject(new Error("O divisor nao pode ser ZERO"))
        }
      }, 1000);
    })
}

//simulando resolve
calcular(10,2)
.then(console.log)
//.then(console.error)
//simulando reject
calcular(10,0)
//.then(console.log)
.then(console.error)