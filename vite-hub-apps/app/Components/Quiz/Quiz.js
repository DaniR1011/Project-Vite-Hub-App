import "./Quiz.css" 
import { cleanPage } from "../../utils/cleanpage";
import {trivial} from "../../data";
import { Games } from "../Games/Games";

const {questions} = trivial;
let questionList;

 const getQuestion = async () => {
     questionList = questions;
     printQuestion(questionList)
 }

 let correctas = [4,3,1,3,1];
 let opcionElegida = [];
 let cantidadCorrecta = 0;
 
 function respuesta(seleccionada) {
     opcionElegida[seleccionada.id] = seleccionada.value;
 }
 
 function corregir(){
     cantidadCorrecta = 0;
     for(let i = 0; i < correctas.length; i++){
         if(Object.values(opcionElegida).includes(`${correctas[i]}`)){
             cantidadCorrecta++;
         }
     }
     document.getElementById("resultado").innerHTML = cantidadCorrecta;
 }

export const printQuestion = (questions) => {
    const questionContainer = document.querySelector(".que");
    questionContainer.innerHTML = "";
    let letra = "abcde";
    let i = 0;
    for (const item of questions) {
        questionContainer.innerHTML += `
                <h3 id="titleQuestion">${item.question}</h3>
                <input type="radio" class="quizButton" id="${letra[i]}" value="1" name="${i}">${item.answer[0].optiona}</input>
                <input type="radio" class="quizButton" id="${letra[i]}" value="2" name="${i}">${item.answer[0].optionb}</input>
                <input type="radio" class="quizButton" id="${letra[i]}" value="3" name="${i}">${item.answer[0].optionc}</input>
                <input type="radio" class="quizButton" id="${letra[i]}" value="4" name="${i}">${item.answer[0].optiond}</input>
                <input type="radio" class="quizButton" id="${letra[i]}" value="5" name="${i}">${item.answer[0].optione}</input>
                <br>
                <img id="images" src=${item.answer[0].img} alt=${item.answer[0].img} />
    `       
    i++;
    }
    for (let index = 0; index < correctas.length; index++) {
        let texto = `#${letra[index]}`
        const elements = document.querySelectorAll(texto)
        console.log(elements)
        for (const element of elements) {
            element.addEventListener("click", () => respuesta(element))
        }
    }
};

export const Question = () => {
    const app = document.querySelector('#app');
    cleanPage(app);
    app.innerHTML = `
    <button id="goBackquiz">Go Back</button>
    <h2 class="title" id="#">Quiz Neo</h2>
    <div class="que"></div>
    <button class="checkButton">Corregir respuestas</button>
    <h4>Cantidad acertadas: <span id="resultado"></span></h4>
    `;
    getQuestion();

    const buttonReload = document.querySelector('#goBackquiz');
    buttonReload.addEventListener("click", (ev) => Games()
    );

    const checkButton = document.querySelector('.checkButton');
    checkButton.addEventListener("click", () => corregir())
};