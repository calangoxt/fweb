let input = document.querySelector("#inputText")
let textValue = ""

function addNumber(number) {
    textValue += number
    updateText()
}

function addOperador(operator) {
    textValue += operator
    updateText()
}

function addDecimal() {
    textValue += "."
    updateText()
}

function limparText() {
    textValue = ""
    updateText()
}

function updateText() {
    input.value = textValue  // Aqui está a correção
}

function calcular() {
    try {
        textValue = eval(textValue)
        updateText()
    } catch (error) {
        textValue = "Erro"
        updateText()
    }
}