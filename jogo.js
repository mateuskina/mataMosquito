var altura, largura
var vidas = 1
var tempo = 10
var criarMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?','')

if (nivel === 'facil') {
    //1500
    criarMosquitoTempo = 1500
}else if(nivel === 'normal'){
    //1000
    criarMosquitoTempo = 1000
}else if(nivel == 'dificil')
    //750
    criarMosquitoTempo = 750

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
}

var cronometro = setInterval(function(){
    tempo -= 1

    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo    
    }

}, 1000)

ajustaTamanhoPalcoJogo()

function posicaoRandomica() {

    //remover o mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        if (vidas > 3) {
            //GAME OVER
            window.location.href = 'fim_de_jogo.html'
        }else{
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
            vidas++    
        }
        
    }
    
    //posicionando elemento
    var posicaox = Math.floor(Math.random() * largura)-90
    var posicaoy = Math.floor(Math.random() * altura)-90
    posicaox = posicaox < 0 ? 0 : posicaox
    posicaoy = posicaoy < 0 ? 0 : posicaoy

    //criar elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaox + 'px'
    mosquito.style.top = posicaoy + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function (){
        this.remove()
    }

    document.body.appendChild(mosquito)
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio() {
    var lado = Math.floor(Math.random() * 2)
    switch (lado) {
        case 0:
            return 'ladoA'   
        case 1:
            return 'ladoB'
    }
}