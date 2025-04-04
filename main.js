const botoes = document.querySelectorAll(«.botao»);

 for (let i=0; < botoes.length; i++) {
    botoes[i].onclick = function() {

    for(let j=0; < botoes.length; j++ ){
        botoes[j]. classlist.remove("ativo");
    }

      botoes[i]. classlist.add("ativo");
    
    console.log(botoes[i]);
 }







