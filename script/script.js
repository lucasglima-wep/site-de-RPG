
// ----------------------------------------------

function toggleMenu(){
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".overlay");

  if(sidebar) sidebar.classList.toggle("open");
  if(overlay) overlay.classList.toggle("show");
}

/* FECHAR AO CLICAR FORA */
const overlayEl = document.querySelector(".overlay");

if(overlayEl){
  overlayEl.addEventListener("click", () => {
    document.querySelector(".sidebar")?.classList.remove("open");
    overlayEl.classList.remove("show");
  });
}



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
  const menu = document.getElementById("menuPerfil");
  if(menu){
    menu.classList.toggle("ativo");
  }
}

document.addEventListener("click", function(e){
  const menu = document.getElementById("menuPerfil");
  const botao = document.querySelector(".foto-topo");

  if(menu && !menu.contains(e.target) && !botao.contains(e.target)){
    menu.classList.remove("ativo");
  }
});


/* ==============================
Entre paginas 
============================== */


window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  const tempoMinimo = 5000; // 5 segundos

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.5s ease";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);

  }, tempoMinimo);
});





/* ==============================
LOADER SUAVE OTIMIZADO
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

// cache DOM (evita buscar várias vezes)
const barra = document.getElementById("progresso");
const porcentagem = document.getElementById("porcentagem");
const texto = document.getElementById("loading-text");
const dica = document.getElementById("dica");
const loader = document.getElementById("loader");

// util simples (mais limpo)
const randomItem = arr => arr[(Math.random() * arr.length) | 0];

// dica inicial
dica.textContent = randomItem(dicas);

let inicio = 0;
let ultimoTexto = 0;

const DURACAO = 12000;
const TROCA_TEXTO_DELAY = 800;

// easing function separada 
const easeOutQuint = t => 1 - Math.pow(1 - t, 5);

function animar(timestamp) {
  if (!inicio) inicio = timestamp;

  const tempo = timestamp - inicio;
  const progressoBase = Math.min(tempo / DURACAO, 1);
  const progresso = easeOutQuint(progressoBase);

  const valor = progresso * 100;

  // update DOM 
  barra.style.width = `${valor}%`;
  porcentagem.textContent = `${valor | 0}%`;

  // troca de texto controlada
  if (tempo - ultimoTexto >= TROCA_TEXTO_DELAY) {
    texto.textContent = randomItem(textos);
    ultimoTexto = tempo;
  }

  if (progressoBase < 1) {
    requestAnimationFrame(animar);
  } else {
    finalizarLoader();
  }
}

function finalizarLoader() {
  barra.style.width = "100%";
  porcentagem.textContent = "100%";

  // usa apenas um fluxo de timeout
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.6s ease";

    loader.addEventListener(
      "transitionend",
      () => (loader.style.display = "none"),
      { once: true }
    );
  }, 800);
}

requestAnimationFrame(animar);


/* ==============================
TRANSIÇÃO (OTIMIZADA)
============================== */

const overlay = document.getElementById("cinema-transition");
const doors = document.getElementById("doors");

// event delegation 
document.addEventListener("click", e => {
  const link = e.target.closest("a");
  if (!link) return;

  const href = link.getAttribute("href");

  if (href && !href.startsWith("#") && !link.target) {
    e.preventDefault();

    overlay.classList.add("active");
    document.body.classList.add("cinema-zoom");

    doors.classList.remove("open");
    doors.classList.add("close");

    setTimeout(() => {
      window.location.href = href;
    }, 800);
  }
});


/* ==============================
PORTAS AO ENTRAR
============================== */

window.addEventListener("load", () => {
  doors.classList.add("close");

  requestAnimationFrame(() => {
    doors.classList.remove("close");
    doors.classList.add("open");
  });
});





