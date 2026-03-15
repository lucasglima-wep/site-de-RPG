/* ==============================
MODO ESCURO
============================== */

function modoEscuro(){

document.body.classList.toggle("dark-mode");

const icone = document.getElementById("tema");

if(document.body.classList.contains("dark-mode")){

icone.classList.replace("bi-moon","bi-sun");
localStorage.setItem("tema","escuro");

}else{

icone.classList.replace("bi-sun","bi-moon");
localStorage.setItem("tema","claro");

}

}


/* ==============================
CARREGAR TEMA SALVO
============================== */

document.addEventListener("DOMContentLoaded", function(){

const temaSalvo = localStorage.getItem("tema");

if(temaSalvo === "escuro"){

document.body.classList.add("dark-mode");

const icone = document.getElementById("tema");

if(icone){
icone.classList.replace("bi-moon","bi-sun");
}

}

});


/* ==============================
ANIMAÇÃO AO TROCAR PÁGINA
============================== */

document.querySelectorAll("a:not([data-page])").forEach(link => {

link.addEventListener("click", function(e){

const destino = this.href;

if(destino && destino.includes(window.location.hostname)){

e.preventDefault();

document.body.classList.add("saindo");

setTimeout(()=>{
window.location = destino;
},300);

}

});

});


/* ==============================
TROCAR CONTEÚDO SEM RECARREGAR
============================== */

document.addEventListener("DOMContentLoaded", function(){

const conteudo = document.getElementById("conteudo");

document.querySelectorAll("[data-page]").forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const pagina = this.getAttribute("data-page");

fetch(pagina)
.then(res => res.text())
.then(html => {

const parser = new DOMParser();
const doc = parser.parseFromString(html,"text/html");

const novoConteudo = doc.querySelector(".conteudo");

if(novoConteudo){

conteudo.innerHTML = novoConteudo.innerHTML;

}

});

});

});

});
