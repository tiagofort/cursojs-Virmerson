
import { criarImgs } from './img.js'
export function chFetch() {
    var url = './clientef.json'
    fetch(url)
        .then((response) =>
            response.text()
        )
        .then((text) => {
            let clientes = JSON.parse(text)
            let imgs = criarImgs(clientes)
            document.body.append(imgs)
        })
}