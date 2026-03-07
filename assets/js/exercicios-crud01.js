const converterDolar = document.getElementById("botao-converter-usd");
    converterDolar.addEventListener("click",dolar);
    
const converterEuro = document.getElementById("botao-converter-eur");
    converterEuro.addEventListener("click",euro);

const converterLibra = document.getElementById("botao-converter-gbp");
    converterLibra.addEventListener("click",libra);

const converterDolarCanadence = document.getElementById("botao-converter-cad");
    converterDolarCanadence.addEventListener("click",dolarCanadence);

const converterIene = document.getElementById("botao-converter-jpy");
    converterIene.addEventListener("click",iene);

const converterPesoArgentino = document.getElementById("botao-converter-ars");
    converterPesoArgentino.addEventListener("click",pesoArgentino);
    
const converterFracoSuico = document.getElementById("botao-converter-chf");
    converterFracoSuico.addEventListener("click",fracoSuico);

const converterYuanChines = document.getElementById("botao-converter-cny");
    converterYuanChines.addEventListener("click",yuanChines);

// USD = 0.1907  # Dólar Americano
// EUR = 0.1641  # Euro
// GBP = 0.1422  # Libra Esterlina
// CAD = 0.2589  # Dólar Canadense
// JPY = 30.08   # Iene Japonês
// ARS = 270.75  # Peso Argentino
// CHF = 0.1481  # Franco Suíço
// CNY = 1.37    # Yuan Chinês


function dolar(){
    const campoReal = document.getElementById("campo-valor");
    const valorReal = campoReal.value;

    let valorRealParaDolar = valorReal * 0.1907;


    const tagLi = document.createElement("li");
    tagLi.innerHTML =`R$${valorReal} => $${valorRealParaDolar.toFixed(2)}`;
    const tagUl = document.getElementById("conversoes");
    tagUl.appendChild(tagLi);
}
function euro(){
    const campoReal = document.getElementById("campo-valor");
    const valorReal = campoReal.value;

    let valorRealParaEuro = valorReal * 0.1641;


    const tagLi = document.createElement("li");
    tagLi.innerHTML =`R$${valorReal} => €${valorRealParaEuro.toFixed(2)}`;
    const tagUl = document.getElementById("conversoes");
    tagUl.appendChild(tagLi);
}
function libra(){
    const campoReal = document.getElementById("campo-valor");
    const valorReal = campoReal.value;

    let valorRealParaLibra = valorReal * 0.1422;


    const tagLi = document.createElement("li");
    tagLi.innerHTML =`R$${valorReal} => £${valorRealParaLibra.toFixed(2)}`;
    const tagUl = document.getElementById("conversoes");
    tagUl.appendChild(tagLi);
}
function dolarCanadence(){
    const campoReal = document.getElementById("campo-valor");
    const valorReal = campoReal.value;

    let valorRealParaDolarCanadence = valorReal * 0.2589;


    const tagLi = document.createElement("li");
    tagLi.innerHTML =`R$${valorReal} => C$${valorRealParaDolarCanadence.toFixed(2)}`;
    const tagUl = document.getElementById("conversoes");
    tagUl.appendChild(tagLi);
}
function iene(){
    const campoReal = document.getElementById("campo-valor");
    const valorReal = campoReal.value;
    
    let valorRealParaIene = valorReal * 30.08;
    
    
    const tagLi = document.createElement("li");
    tagLi.innerHTML =`R$${valorReal} => ¥${valorRealParaIene.toFixed(2)}`;
    const tagUl = document.getElementById("conversoes");
    tagUl.appendChild(tagLi);
}
function pesoArgentino(){
    const campoReal = document.getElementById("campo-valor");
    const valorReal = campoReal.value;

    let valorRealParaPesoArgentino = valorReal * 270.75;


    const tagLi = document.createElement("li");
    tagLi.innerHTML =`R$${valorReal} => AR$${valorRealParaPesoArgentino.toFixed(2)}`;
    const tagUl = document.getElementById("conversoes");
    tagUl.appendChild(tagLi);
}
function fracoSuico(){
    const campoReal = document.getElementById("campo-valor");
    const valorReal = campoReal.value;

    let valorRealParaFracoSuico = valorReal * 0.1481;

    const tagLi = document.createElement("li");
    tagLi.innerHTML =`R$${valorReal} => Fr${valorRealParaFracoSuico.toFixed(2)}`;
    const tagUl = document.getElementById("conversoes");
    tagUl.appendChild(tagLi);
}
function yuanChines(){
    const campoReal = document.getElementById("campo-valor");
    const valorReal = campoReal.value;

    let valorRealParaYuanChines = valorReal * 270.75;

    const tagLi = document.createElement("li");
    tagLi.innerHTML =`R$${valorReal} => 元${valorRealParaYuanChines.toFixed(2)}`;
    const tagUl = document.getElementById("conversoes");
    tagUl.appendChild(tagLi);
}