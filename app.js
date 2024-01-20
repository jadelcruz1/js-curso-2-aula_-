let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroGerado = gerarNumero();
let tentativas = 1;
exibirMensagemInicial();



function verificarChute(){
    let chute = document.querySelector("input").value;   
    
    
    if (chute == numeroGerado){
        textoNaTela("h1", "Parabéns! Você Acertou!");
        let palavrasTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativa = `Você acertou com ${tentativas} ${palavrasTentativa}.`;
        let mensagem = mensagemTentativa;
        textoNaTela("p", mensagem);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        if(chute > numeroGerado){
            textoNaTela("p", "O número secreto é menor.");
        } else{
            textoNaTela("p", "O número secreto é maior.");
        }
        tentativas++;
        limparCampo();
    }
}

function textoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    textoNaTela("h1","Descupra o número se for capaz." );
    textoNaTela("p", "Escolha um número entre 1 e 10.");
}

function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumeroEscolhido = listaNumerosSorteados.length;
    if(quantidadeDeNumeroEscolhido == numeroLimite){
        listaNumerosSorteados = [];
    }
    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumero();  
    }else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
     
} 

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
    
}

function reiniciarJogo(){
    numeroGerado = gerarNumero();
    tentativas = 1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);


}
