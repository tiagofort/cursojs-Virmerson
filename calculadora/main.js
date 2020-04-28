import { Calculadora } from './calculadora.js'

export function calc(op) {
    let v1 = parseFloat(document.getElementById("valor1").value)
    let v2 = parseFloat(document.getElementById("valor2").value)
    let calc = new Calculadora(v1, v2)
    let result = 0
    if (op == 1) {
        result = calc.somar()
    } else if (op == 2) {
        result = calc.subtrair()
    } else if (op == 3) {
        result = calc.multiplicar()
    } else if (op == 4) {
        result = calc.dividir()
    }
    //window.alert("Resultado: " + result)
    document.getElementById("msg").innerText = result
}