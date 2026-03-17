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
abrir Menu
============================== */

function abrirMenu(){
let menu = document.getElementById("menuPerfil");

if(menu.style.display === "flex"){
menu.style.display = "none";
}else{
menu.style.display = "flex";
}
}



/* ==============================
Entre paginas 
============================== */


window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  const tempoMinimo = 2000; // 2 segundos

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.5s ease";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);

  }, tempoMinimo);
});




/* ==============================
tela de carregamento de inicio
============================== */

const textos = [
  "Carregando mapa...",
  "Invocando NPCs...",
  "Preparando batalha...",
  "Gerando loot...",
  "Abrindo portais..."
];

const dicas = [
  "💡 Dica: Use estratégia para vencer inimigos mais fortes.",
  "⚔️ Dica: Equipe itens melhores para aumentar seu poder.",
  "🧙 Dica: Magias consomem energia, use com sabedoria.",
  "🛡️ Dica: Defesa é tão importante quanto ataque.",
  "🎯 Dica: Explore o mapa para encontrar segredos."
];

let progresso = 0;

const barra = document.getElementById("progresso");
const porcentagem = document.getElementById("porcentagem");
const texto = document.getElementById("loading-text");
const dica = document.getElementById("dica");

dica.innerText = dicas[Math.floor(Math.random() * dicas.length)];

const intervalo = setInterval(() => {
  progresso += Math.random() * 10;

  if(progresso >= 100){
    progresso = 100;
    clearInterval(intervalo);

    setTimeout(() => {
      const loader = document.getElementById("loader");

      loader.style.opacity = "0";
      loader.style.transition = "opacity 0.6s ease";

      setTimeout(() => {
        loader.style.display = "none";
      }, 600);

    }, 800);
  }

  barra.style.width = progresso + "%";
  porcentagem.innerText = Math.floor(progresso) + "%";

  texto.innerText = textos[Math.floor(Math.random() * textos.length)];

}, 300);





/* ==============================
efieto cinema entre paginas
============================== */

const overlay = document.getElementById("cinema-transition");

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e){

    const href = this.getAttribute("href");

    if(href && !href.startsWith("#") && !this.hasAttribute("target")){
      e.preventDefault();

      // ativa efeito
      overlay.classList.add("active");
      document.body.classList.add("cinema-zoom");

      setTimeout(() => {
        window.location.href = href;
      }, 600);
    }

  });
});


/* ==============================
abre bortas ao entrar
============================== */


const doors = document.getElementById("doors");

/* FECHADO ao entrar (abre depois) */
window.addEventListener("load", () => {
  doors.classList.add("close");

  setTimeout(() => {
    doors.classList.remove("close");
    doors.classList.add("open");
  }, 100);
});

/* AO CLICAR EM LINKS */
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e){

    const href = this.getAttribute("href");

    if(href && !href.startsWith("#") && !this.hasAttribute("target")){
      e.preventDefault();

      // fecha as portas
      doors.classList.remove("open");
      doors.classList.add("close");

      setTimeout(() => {
        window.location.href = href;
      }, 800);
    }

  });
});



