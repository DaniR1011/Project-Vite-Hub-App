import "./3enraya.css";
import { Games } from "../Games/Games";

let turno = 0;
let tablero = [];
const player = '❌';
const rival = '⭕️';
let listaBotones = [];
let title;
let playAgain;

export const tresEnRaya = () => {
    const app = document.querySelector('#app')
    app.innerHTML = `
    <section class="tresRaya">
        <button id="goBackraya">Go Back</button>
        <h3>Bienvenido al 3 en raya!</h3>
        <h4 id="title"></h4>
        <div class="container">
            <button class="raya"></button>
            <button class="raya"></button>
            <button class="raya"></button>
            <button class="raya"></button>
            <button class="raya"></button>
            <button class="raya"></button>
            <button class="raya"></button>
            <button class="raya"></button>
            <button class="raya"></button>
        </div>
        <button class="playAgain">Play again</button>
    </section>
    `;

    const buttonReload = document.querySelector('#goBackraya');
    buttonReload.addEventListener("click", () => Games()
    );

    document.querySelectorAll('.raya').forEach((obj, i) => 
    obj.addEventListener('click', (e) => btnPulsado(e, i)));
    listaBotones = document.querySelectorAll('.raya')

    title = document.querySelector("#title");
    playAgain = document.querySelector(".playAgain");
    playAgain.addEventListener("click",() => resetTablero()
    );
}

const btnPulsado = (e, pos) => {
    const btn = e.target;
    if(!(Object.keys(tablero).flat().includes(`${pos}`))) {
        turno ++;
        btn.innerHTML = player;
        tablero[pos] = player;
        if (turno != 9 && !comprobarHaGanado()){
            turnoRival()
        }
            if(!comprobarHaGanado()){
                if(turno == 9) {
                resetTablero()
            }
    }
}
}

const resetTablero = () => {
        tablero = [];
        turno = 0;
        for (const button of listaBotones) {
           button.innerHTML = "";
        }
        title.innerHTML = "";
    }

const comprobarHaGanado = () => {
    if(haGanado()) {
        const title = document.querySelector('#title')
        if(turno % 2 !== 0){
            title.innerHTML = `Has ganado! 😃`
        } else {
            title.innerHTML = `Has perdido ☹️` 
        }
        return true
    } 
    return false
}

const turnoRival = (param, pos) => {
    let posAleatoria = Math.floor(Math.random() * 9);
    while (Object.keys(tablero).flat().includes(`${posAleatoria}`)) {
        posAleatoria = Math.floor(Math.random() * 9);
    }
    const button = listaBotones[posAleatoria]
    button.innerHTML = rival
    tablero[posAleatoria] = rival
    turno ++;
}

const haGanado = ()  => {
    if(tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]){
        return true;
    }else if(tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3]){
        return true;
    }else if(tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6]){
        return true;
    }else if(tablero[0] == tablero[3] && tablero[0] == tablero[6] && tablero[0]){
        return true;
    }else if(tablero[1] == tablero[4] && tablero[1] == tablero[7] && tablero[1]){
        return true;
    }else if(tablero[2] == tablero[5] && tablero[2] == tablero[8] && tablero[2]){
        return true;
    }else if(tablero[0] == tablero[4] && tablero[0] == tablero[8] && tablero[0]){
        return true;
    }else if(tablero[2] == tablero[4] && tablero[2] == tablero[6] && tablero[2]){
        return true;
    }
    return false
}
