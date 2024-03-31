
function calculaTipo(event) {
    event.preventDefault();
  
    // Coleta valores dos campos de entrada
    let distancia = parseFloat(document.getElementById('distancia').value);
    let combustivel = parseFloat(document.getElementById('combustivel').value);
    let freteTon = parseFloat(document.getElementById('freteTon').value);
    let pesoTon = parseFloat(document.getElementById('pesoTon').value);
    let pedagio = parseFloat(document.getElementById('pedagio').value);
    let kmPorLitro = parseFloat(document.getElementById('kmPorLitro').value); 
    // Variável para comissão já como decimal
    let comissao = parseFloat(document.getElementById('Comissão').value);
    comissao = comissao / 100;
    // Realização dos cálculos
    const custoPorDieselTotal = (distancia / kmPorLitro) * combustivel;
    const freteTotal = pesoTon * freteTon;
    const totalComissao = freteTotal * comissao;
    const custoPorKmTotal = freteTotal / distancia;
    const freteLiquido = freteTotal - custoPorDieselTotal - totalComissao - pedagio;

    // Atualiza a tela HTML com os resultados
    document.getElementById('tip').innerHTML = custoPorDieselTotal.toFixed(2);
    document.getElementById('tip2').innerHTML = freteTotal.toFixed(2);
    document.getElementById('tip3').innerHTML = totalComissao.toFixed(2);
    document.getElementById('tip4').innerHTML = custoPorKmTotal.toFixed(2);
    document.getElementById('tip5').innerHTML = freteLiquido.toFixed(2);
    // Exibe a div com os resultados
    document.getElementById('totalTip').style.display = "block";
  }

  //Função que limpa o HTML
  function resetaBotao(event){
    event.preventDefault();
    document.getElementById('distancia').value = '';
    document.getElementById('combustivel').value = '';
    document.getElementById('freteTon').value = '';
    document.getElementById('pesoTon').value = '';
    document.getElementById('pedagio').value = '';
    document.getElementById('kmPorLitro').value = '';
    document.getElementById('Comissão').value = '';


    document.getElementById('tip').innerHTML = '';
    document.getElementById('tip2').innerHTML = '';
    document.getElementById('tip3').innerHTML = '';
    document.getElementById('tip4').innerHTML = '';
    document.getElementById('tip5').innerHTML = '';
    document.getElementById('tip5').innerHTML = '';
    document.getElementById('tip6').innerHTML = '';

    document.getElementById('totalTip').style.display = "block";
  }
  
  // Ocultação das divs inicialmente (opcional)
  document.getElementById('totalTip').style.display = "none";
  
  // Adição do evento de submit no formulário
  document.getElementById('tipsForm').addEventListener('submit', calculaTipo);
