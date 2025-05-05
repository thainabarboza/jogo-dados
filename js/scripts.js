
let dados = document.querySelector('.dados');
let apresenta = document.querySelector('.apresenta');
let ndados = 0;
let resultado = document.querySelector('.resultado');
let soma = 0;
let atinge = document.querySelector('.atinge');
let recomecar = document.querySelector('.recomecar');
let numeros = aleatorio(7,21);
let jogoterminou = false;
let porcetagem = 0;
let progressBar = document.querySelector('.progress-bar');
let historico = document.querySelector('.historico');

atinge.innerHTML = "<p><b>ATINGE OS "+numeros+"</b></p>";
historico.innerHTML = "<div>"

function dado() {
	if(jogoterminou){
		alert("CLIQUE EM RECOMEÇAR")
	}else{

	apresenta.innerHTML ='';
	for(let i =1; i<= ndados; i++);{
		var pinta = aleatorio(1,6);
		soma += pinta;

		apresenta.innerHTML = "<div class='dados pos"+pinta+"'><div class='pinta p1'></div><div class='pinta p2'></div><div class='pinta p3'></div><div class='pinta p4'></div><div class='pinta p5'></div><div class='pinta p6'></div><div class='pinta p7'></div></div>" ;

		}
	historico.innerHTML += "<spam class='historico'>"+pinta+",</spam>";
	resultado.innerHTML += "<p><b>Saiu ("+pinta+")<br>Total ("+soma+")</b></p>";
	porcetagem = Math.floor(soma/numeros * 100);
	progressBar.style.width = porcetagem + '%';
	progressBar.innerHTML = porcetagem + '%';
	if(soma == numeros){
		document.querySelector('.resultado').innerHTML += '<h2 class="green">GANHOU</h2>'
		jogoterminou = true;
		recomecar.classList.remove("none");
		progressBar.style.backgroundColor = 'green';
		historico.innerHTML += "</div>"
	}else if(soma > numeros){
		document.querySelector('.resultado').innerHTML += '<h2 class="red">ARREBENTOU</h2>'
		jogoterminou = true;
		recomecar.classList.remove("none");
		progressBar.style.backgroundColor = 'red';
		historico.innerHTML += "</div>"
		}

	}

}

dados.onclick = function() {
	dado();
}

recomecar.onclick = function(){
	atinge.innerHTML = '';
	apresenta.innerHTML ='';
	resultado.innerHTML = '';
	progressBar.innerHTML = '';
	progressBar.style.backgroundColor = '#0d6efd';
	progressBar.style.width = '0%';
	soma = 0;
	numeros = aleatorio(7,21);
	atinge.innerHTML = "<p><b>ATINGE OS "+numeros+"</b></p>";
	jogoterminou = false;
	historico.innerHTML += "<div>"
}

function aleatorio(min,max) {
	return Math.floor(Math.random() * (max - min + 1 ) )+ min;
}
