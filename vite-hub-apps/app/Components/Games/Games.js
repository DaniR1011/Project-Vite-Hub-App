import './Games.css';
import { getUser } from '../Home/Home';
import { init, pokemon } from '../Pokemon/Pokemon';
import { Question } from '../Quiz/Quiz'; 
import { printQuestion } from '../Quiz/Quiz';
import { tresEnRaya } from '../3enraya/3enraya';
import { hangman } from '../Hangman/Hangman';

export const colorMode = () => {
    const changeColor = document.querySelector('#colorMode');
    const randomColors = ['red', 'dark', 'white', 'purple', 'yellow', 'pink', 'blue', 'orange'];
    changeColor.addEventListener('click', () => {
    let finalColor = randomColors[Math.floor(Math.random()*randomColors.length)];
    if(document.body.classList.value !== '') {
    document.body.classList.remove(document.body.classList.value) 
    }
    document.body.classList.add(finalColor)
 });
};

export const Games = () => {
    let user = getUser();
    const app = document.querySelector('#app');
    app.innerHTML = `
    <section class="games">
        <button id="colorMode">🎨</button>
        <h1>Bienvenido ${getUser().charAt(0).toUpperCase() + getUser().substring(1).toLowerCase()}</h1>
        <div class="game">
            <button id="Pokemon">Poke Api Pokemon</button>
            <button id="tresRaya">Tres en raya</button>
            <button id="quiz">Quiz-Neo</button>
            <button id="hangman">Hangman</button>
        </div>
    </section>
    `;
    const buttonPokemon = document.querySelector('#Pokemon');
    buttonPokemon.addEventListener('click', () => {
    pokemon()
})
    const btnQuestion = document.querySelector("#quiz");
    btnQuestion.addEventListener("click", () => {
    Question()
})
    const tresRaya = document.querySelector('#tresRaya');
    tresRaya.addEventListener('click', () => {
    tresEnRaya()
})
    const buttonHangman = document.querySelector('#hangman');
    buttonHangman.addEventListener('click', () => {
    hangman() 
})
    colorMode()
}
