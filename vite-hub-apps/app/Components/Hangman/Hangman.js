import "./Hangman.css";
import { Games } from "../Games/Games";

 let reiniciar;
 let vidasRestantes;
 let letra;
 let palabra;
 let letras;
 let vidas;
 let title;

export const hangman = () => {
  const app = document.querySelector('#app')
   app.innerHTML = `
   <div class="elementos">
      <button id="goBackhangman">Go Back</button>
      <h1>Hangman Game</h1>
      <h3>Elige la letra correcta para adivinar la palabra.</h3>
      <h4 id="title"></h4>
      <div class="letra"></div>
      <div class="palabra"></div>
      <h3>Vidas restantes: <span class="vidasRestantes">5</span></h3>
      <button class="reiniciar">Play again</button> 
    </div>
   `;
   const buttonReload = document.querySelector('#goBackhangman');
   buttonReload.addEventListener("click", () => Games()
   );
   initHangman('start');
}

 const palabras = new Map([
   ['reloj'],
   ['bootcamp'],
   ['telefonillo'],
   ['sombra'],
   ['desarrollador'],
   ['javascript'],
 ]);

 const listaPalabras = [...palabras.keys()];

 const getPalabraRandom = function (list) {
   return list[Math.floor(Math.random() * listaPalabras.length)];
 };

 let palabraElegida;

 const initHangman = function (e) {
  reiniciar = document.querySelector('.reiniciar');
  letra = document.querySelector('.letra');
  palabra = document.querySelector('.palabra');
  vidasRestantes = document.querySelector('.vidasRestantes');
  title = document.querySelector("#title");
   palabra.innerHTML = '';
   if (e === 'start') {
     for (const i of 'abcdefghijklmnopqrstuvwxyz') {
       const html = `<button class="abecedario">${i.toUpperCase()}</button>`;
       letra.insertAdjacentHTML('beforeend', html);
     }
   } else if (e === 'reset') {
      letras.forEach(btn => {
       btn.classList.remove('disabled');
     });
    title.innerHTML = "";
   }
   palabraElegida = getPalabraRandom(listaPalabras);
   vidas = 5;
   for (let i = 0; i < palabraElegida.length; i++) {
    const html = `<p class="casilla">_</p>`;
    palabra.insertAdjacentHTML('beforeend', html);
  }
   letras = document.querySelectorAll('.abecedario');
   vidasRestantes.textContent = vidas;

   letras.forEach(btn => {
    btn.addEventListener('click', pressLetra);
  });
 
  reiniciar.addEventListener('click', function () {
    initHangman('reset');
  });
 };

 const perderVida = function () {
   vidas--;
   vidasRestantes.textContent = vidas;
   if (vidas === 0) {
    title.innerHTML = `Has perdido! 😞`
   }
 };

 const getComb = function (letter) {
   let indexes = [];
   [...palabraElegida].forEach((val, i) => {
     if (val === letter) {
       const index = i;
       indexes.push(index);
     }
   });
   return indexes;
 };

 const corregirPalabra = function () {
   let val = true;
   for (let i = 0; i < palabra.children.length; i++) {
     if (palabra.children[i].textContent === '_') {
       val = false;
     }
   }
   return val;
 };

 const pressLetra = function () {
   const letter = this.textContent.toLowerCase();

   if (palabraElegida.includes(letter)) {
     const indexes_list = getComb(letter);
     indexes_list.forEach((val, i) => {
       palabra.children[val].textContent = this.textContent;
     });
   } else {
     perderVida();
   }
   if (corregirPalabra()) {
    title.innerHTML = `Has ganado! 😃`
   }
   this.classList.add('disabled');
 };

