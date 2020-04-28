let promise = new Promise(function (resolve, reject) {
    console.log("Conectando com o BD")
    if (false) {
        setTimeout(() => {
            resolve("Conectado com Sucesso")
        }, 1000);
    } else {
        setTimeout(() => reject(new Error("Erro ao conectar ao BD")), 1000);
    }
})

// promise.then(
//     function (result) { console.log("Resposta da Promise: "+result) },
//     function (error) { console.log("Resposta da promise: "+error) }
// )

//promise.catch(console.log)
promise.then((r)=>console.log(r))
promise.catch((r)=>console.log(r))
promise.finally(()=>console.log("Finalizando conexao"))
