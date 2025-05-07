let imgPK = document.querySelector("#fotoPK");
let formPK = document.querySelector("#formPK");
let inputPK = document.querySelector("#inputPK");

let idPK = document.querySelector("#idPK");
let nomePK = document.querySelector("#nomePK");

let tipo1 = document.querySelector("#tipo1PK");
let tipo2 = document.querySelector("#tipo2PK");

let habiPK = document.querySelector("#habiPK");
let pesoPK = document.querySelector("#pesoPK");
let alturaPK = document.querySelector("#alturaPK");

let btnVoltar = document.querySelector("#btnVoltar");
let btnProximo = document.querySelector("#btnProximo");

let numeroPokedex = 1;

const fetchPokemon = async(pokemon)=>{
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();
    return data
}
const showPokemon = async(pokemon) =>{
    const dataPokemon = await fetchPokemon(pokemon);
    const audio = new Audio(dataPokemon.cries.latest);
    audio.play();
 
try {
    // Tenta definir a imagem padrão
    if (dataPokemon.sprites.front_default) {
      imgPK.src = dataPokemon.sprites.front_default;
    } else if (dataPokemon.sprites.front_shiny) {
      // Se não existir, tenta a shiny
      imgPK.src = dataPokemon.sprites.front_shiny;
    } else {
      // Se nenhuma imagem existir, usa fallback
      imgPK.src = 'img/nao-encontrado.png';
    }
  
    // Caso a imagem falhe ao carregar (ex: URL quebrada)
    imgPK.onerror = () => {
      imgPK.src = 'img/nao-encontrado.png';
    };
  
  } catch (erro) {
    console.error('Erro ao definir imagem do Pokémon:', erro);
    // Fallback total se algo der muito errado
    if (imgPK) {
      imgPK.src = 'img/nao-encontrado.png';
    }
  }
    idPK.innerHTML = `<br>ID:${dataPokemon.id}`;
    nomePK.innerHTML = dataPokemon.name;
    tipo1.innerHTML = dataPokemon.types[0].type.name;
    if(
        dataPokemon.types[1] != undefined
    ){
    tipo2.innerHTML = dataPokemon.types[1].type.name;}
    else{
        tipo2.innerHTML = ""
    }
    habiPK.innerHTML = dataPokemon.abilities[0].ability.name;
    pesoPK.innerHTML =`Peso:${dataPokemon.weight/10}kg`;
    alturaPK.innerHTML =`Altura:${dataPokemon.height/10}m`;
}
formPK.addEventListener("submit",(event)=>{
    event.preventDefault();
    showPokemon(inputPK.value.toLowerCase());
})
btnVoltar.addEventListener("click",(e)=>{
    if(numeroPokedex>1){
        numeroPokedex--;
    }
    showPokemon(numeroPokedex);
})
btnProximo.addEventListener("click",(e)=>
{
if(numeroPokedex<1025){
    numeroPokedex++;
}
showPokemon(numeroPokedex);
})


showPokemon(numeroPokedex);