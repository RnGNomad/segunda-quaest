const inputs = document.querySelectorAll(".campo-texto")

const aviso = document.getElementsByClassName('campo-valido')

inputs.forEach(item => {
    item.addEventListener('input', () =>{
        if(item.value === ''){
            item.classList.remove('preenchido')
            item.classList.add('vazio')
        }else{
            item.classList.add('preenchido')
            item.classList.remove('vazio')  
            item.classList.remove('mostrar')
        }
    })
});

function checarTodosInputs() {
    if(checarValores(0)){
        aviso[0].classList.add('mostrar')
    }else{
        aviso[0].classList.remove('mostrar')
    }

    if(checarValores(1)){
        aviso[1].classList.add('mostrar')
    }else{
        aviso[1].classList.remove('mostrar')
    }

    if(checarValores(2)){
        aviso[2].classList.add('mostrar')
    }else{
        aviso[2].classList.remove('mostrar')
    }

    if(checarValores(3)){
        aviso[3].classList.add('mostrar')
    }else{
        aviso[3].classList.remove('mostrar')
    }
}

function checarValores(item){
    if(inputs[item].classList.contains('vazio')){
        inputs[item].classList.add('mostrar')
        return true
    }
}

/*
 iniciar com classe nos input para verificar se elas existem
 se nao sera adicionado uma classe para indicar que deve ser preenchido
 
 Um forEach que checa os ultimos inputs que foram clicados?
 
  Fazer uma funcao para dar um valor que fala true ou false, de acordo com o resultado trocar oque e necessario

  Fazer com que a classe vazio seja removida do input se ele for escrito e adicionar caso ela seja apagada
 */