let nome = "";
let idade = "";
let cpf ="";
let telefone ="";
let paragrafo = document.getElementById("demo");
fetch("./data.json")
.then(response => response.json())
.then(data =>{
    const objectList = document.getElementById('object-list'); 


    data.pessoas.forEach(obj => { 
      const listItem = document.createElement('li');
      const listItem2 = document.createElement('li');
      const listItem3 = document.createElement('li');
      const listItem4 = document.createElement('li');
      const listItem5 = document.createElement('li');
      listItem.textContent = obj.nome;
      listItem2.textContent = obj.idade;
      listItem3.textContent = obj.cpf;
      listItem4.textContent = obj.telefone;
      listItem5.textContent = "------------------------";
      objectList.appendChild(listItem5);
      objectList.appendChild(listItem);
      objectList.appendChild(listItem2);
      objectList.appendChild(listItem3);
      objectList.appendChild(listItem4);
      
})})
   