import { cleanPage } from "../../utils/cleanpage";
import { Games } from "../Games/Games";
import "./Pokemon.css";

let arrayPokemon = [];

const getPokemon = async () => {
    const gif = document.querySelector("#gif");
    for (let i = 1; i < 151; i++) {
try{
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    const jsonPokemon = await data.json();
    arrayPokemon.push(jsonPokemon);
    } catch (error) {
      console.log("Error:", error);
  }
}
gif.remove()
printPokemon(arrayPokemon, "", "all");
};

const printPokemon = (list, word, type) => {
    console.log(word)
    console.log(type)
    let filteredPokemon = list.filter((item) => 
    item.name.toLowerCase().includes(word.toLowerCase()));
    if(type !== "all") {
        filteredPokemon = filteredPokemon.filter((item) => 
         item.types[0].type.name.includes(type));
     }
    const pokemonContainer = document.querySelector(".pokemon")
    pokemonContainer.innerHTML = "";


    for (const item of filteredPokemon) {
        pokemonContainer.innerHTML += `
        <figure>
                <h3>${item.name}</h3>
                <p>Weight: ${item.weight}</p>
                <p>Height: ${item.height}</p>
                <p>Base Experience: ${item.base_experience}</p>
                <p>Type: ${item.types[0].type.name}</p>
                <img src=${item.sprites["front_default"]} alt=${item.sprites["front_default"]}/>
        </figure>
        `
    }
pokemonContainer.innerHTML += `<p><a href="#">Back to top</a></p>`
};

export const pokemon = () => {
    const app = document.querySelector('#app');
    cleanPage(app);
    app.innerHTML = `
    <section class="pokemons">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"/>
        <h2 class="title" id="#">Poke Api</h2>
        <button id="goBackpokemon">Go back</button>
    </section>
        <section class="poke"> 
            <input class="pokeInput" type="text" id="search" placeholder="Search a Pokemon:"/> 
            <div class="selectContenedor" id="#selectContenedor"></div>
        </section>
    <div class="pokemon">
        <img id="gif" src="./assets/cargando.gif"/>
    </div>
    `;
    getPokemon();
    init();

const buttonReload = document.querySelector('#goBackpokemon');
buttonReload.addEventListener("click", (ev) => Games()
);

const searchInput = document.querySelector("#search");
searchInput.addEventListener("input", (ev) => { 
const select = document.querySelector(".select")
console.log(select.value)
printPokemon(arrayPokemon, ev.target.value, select.value)});
};

export function init(){
    let select = document.createElement("select")
    select.classList.add("select")

    let all = document.createElement("option")
    all.setAttribute("value", "all")
    let allText = document.createTextNode("All")
    all.appendChild(allText)

    let grass = document.createElement("option")
    grass.setAttribute("value", "grass")
    let grassText = document.createTextNode("Grass")
    grass.appendChild(grassText)

    let fire = document.createElement("option")
    fire.setAttribute("value", "fire")
    let fireText = document.createTextNode("Fire")
    fire.appendChild(fireText)

    let water = document.createElement("option")
    water.setAttribute("value", "water")
    let waterText = document.createTextNode("Water")
    water.appendChild(waterText)

    let normal = document.createElement("option")
    normal.setAttribute("value", "normal")
    let normalText = document.createTextNode("Normal")
    normal.appendChild(normalText) 

    select.appendChild(all)
    select.appendChild(grass)
    select.appendChild(fire)
    select.appendChild(water)
    select.appendChild(normal)

    let selectContenedor = document.getElementById("#selectContenedor")
    selectContenedor.appendChild(select)

    const list = document.querySelector(".select")
    const input = document.querySelector("#search")
    list.addEventListener("change", (ev) => printPokemon(arrayPokemon, input.value, ev.target.value))
}

// const findType = (list, word) => {
//     if(word !== "All") {
//         const filteredType = list.filter((item) => 
//         item.types[0].type.name.includes(word));
//         const typeContainer = document.querySelector(".pokemon")
//         typeContainer.innerHTML = "";  
//         for (const item of filteredType) {
//             typeContainer.innerHTML += `
//             <figure>
//                     <h3>${item.name}</h3>
//                     <p>Weight: ${item.weight}</p>
//                     <p>Height: ${item.height}</p>
//                     <p>Base Experience: ${item.base_experience}</p>
//                     <p>Type: ${item.types[0].type.name}</p>
//                     <img src=${item.sprites["front_default"]} alt=${item.sprites["front_default"]}/>
//             </figure>
//             `
//         }
//     }  else {
//         printPokemon(arrayPokemon, "");
//     }
// };