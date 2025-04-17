let body= document.querySelector("#trocarcor")
let cor =1
setInterval(trocarCor , 1000)
function trocarCor(){
    if(cor==1){
        body.style.backgroundColor = "red"
        cor++
    }else if(cor==2){
        body.style.backgroundColor = "blue"
        cor++
    }  else if(cor==3){
        body.style.backgroundColor = "green"
        cor++
    }else if(cor==4){
        body.style.backgroundColor = "pink"
        cor=1
    }
    }
