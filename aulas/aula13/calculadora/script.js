let input = document.querySelector("#inputText")
let textValue =""
function addNunber(number){
    textValue+=number
    updateText()
}
function addOperador(operator){
    textValue+=operator
    updateText()
}
function addDecimal(){
    textValue+="."
    updateText()
}
function limparText(){
    textValue = ""
    updateText()
}
function updateText(){
input.textContent=textValue
}
function calcular(){
    textValue=eval(textValue)
    updateText()
}