function ConverterDolar(){
    let elemento = document.getElementById("valor");
    let valor = parseFloat(elemento.value);
    let dolar = (valor/5.13).toFixed(2);
    let conversao = document.getElementById("valorConvertido");
    conversao.innerHTML = `O valor em dólar é US$ ${dolar}`;
}

function ConverterEuro(){
    let elemento = document.getElementById("valor");
    let valor = parseFloat(elemento.value);
    let euro = (valor/5.62).toFixed(2);
    let conversao = document.getElementById("valorConvertido");
    conversao.innerHTML = `O valor em euro é € ${euro}`;
}

function ConverterBitcoin(){
    let elemento = document.getElementById("valor");
    let valor = parseFloat(elemento.value);
    let bitcoin = (valor/198555.49).toFixed(6);
    let conversao = document.getElementById("valorConvertido");
    conversao.innerHTML = `O valor em bitcoin é ₿ ${bitcoin}`;
}