const objectList = document.getElementById('object-list'); 
let paragrafo = document.getElementById("demo");
fetch("./data.json")
.then(response => response.json())
.then(data =>{
    

    Object.keys(data).forEach(materia => {
        const alunos = data[materia];


        const tituloMateria = document.createElement('li');
        tituloMateria.textContent = `Matéria: ${materia}`;
        tituloMateria.style.fontWeight = "bold";
        objectList.appendChild(tituloMateria);
        alunos.forEach(aluno=>{
      const listItem = document.createElement('li');

      listItem.textContent = aluno;

      objectList.appendChild(listItem);

      
})})})