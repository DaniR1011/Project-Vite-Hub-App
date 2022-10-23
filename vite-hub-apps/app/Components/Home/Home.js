import "./Home.css";

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

export const Home = () => {
    const app = document.querySelector('#app');
    app.innerHTML = `
    <section class="home">
    <button id="colorMode">🎨</button>
    <h1>Neoland Hub-Games</h1>
    <h4>Introduce tu nombre</h4>
    <div> <input class="loginInput" type="text" id="text" placeholder="Introduce tu nombre:"/> </div>
    <button id="login">➡</button>
    <img src="https://cdn.vox-cdn.com/thumbor/F3CUPGg2z1QAaD4dHD7k2Ea1aDw=/121x44:1733x974/1200x800/filters:focal(799x496:1105x802)/cdn.vox-cdn.com/uploads/chorus_image/image/66301419/Pok_mon_Home.0.jpg" alt="foto"/>
    </section>
    `;
}

export const setUser = (param) => {
    const input = document.querySelector('#text')
    localStorage.setItem('user', input.value);
}

export const getUser = (param) => {
    // const input = document.querySelector('#text')
    const user = localStorage.getItem('user');
    return user
}







