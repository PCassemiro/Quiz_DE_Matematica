function clicar() {
    var botao= window.document.getElementById('botao')
    var Pergunta= window.document.getElementById('Perguntas')
    window.alert('funcionou')
    // daqui pra baixo não está funcionando
    botao.value="confirmar"
    Pergunta.innerHTML =
    `<p>Qual o valor de X:</p>
    <p>150+X=210<p/>
    <label><input type="radio" value="10">10</label>
    <label><input type="radio" value="30">30</label>
    <label><input type="radio" value="50">50</label>
    <label><input type="radio" value="60">60</label>`;

    if (Pergunta.value==60) {
        Pergunta.innerHTML =
    `<p>Qual o valor de X:</p>
    <p>50-X=210<p/>
    <label><input type="radio" value="10">160</label>
    <label><input type="radio" value="30">-160</label>
    <label><input type="radio" value="50">210</label>
    <label><input type="radio" value="60">210</label>`
    }else{
        Pergunta.innerHTML =`Errou`
    }

    
}
