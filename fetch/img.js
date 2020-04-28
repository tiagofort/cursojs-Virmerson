

export function criarImgs(clientes){
    return clientes.map((element)=>{
         let img = document.createElement("img")
         img.src = element.foto
         img.title = element.nome
         return img
     })
 }