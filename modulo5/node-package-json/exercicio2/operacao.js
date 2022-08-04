const tipoConta = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

let resultado = ""

switch (tipoConta) {
    case "soma":
        resultado = num1 + num2
        break;
    case "subt":
        resultado = num1 - num2
        break;
    case "mult":
        resultado = num1 * num2
        break;
    case "div":
        resultado = num1 / num2
        break;
    default:
        break;
}

console.log(`Resposta: ${resultado}`)