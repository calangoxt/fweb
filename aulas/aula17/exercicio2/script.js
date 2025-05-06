let nome = "";
let cidade = "";
let paragrafo = document.getElementById("demo");
fetch("./data.json")
.then(response => response.json())
.then(data =>{
nome = data.pessoas[0].nome;
cidade = data.pessoas[0].local.cidade;

    document.getElementById("demo").innerHTML = "primeiro registro do array é: " +nome + " de " + cidade
})
