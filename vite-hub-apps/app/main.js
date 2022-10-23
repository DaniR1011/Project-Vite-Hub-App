import './style.css';
import { Home } from './Components/Home/Home';
import { colorMode } from './Components/Home/Home';
import { setUser } from './Components/Home/Home';
import { getUser } from './Components/Home/Home';
import { Games } from './Components/Games/Games';
import {init, pokemon} from './Components/Pokemon/Pokemon';
import {Question} from './Components/Quiz/Quiz';


Home();
colorMode();

const buttonLogin = document.querySelector('#login');
buttonLogin.addEventListener('click', () => {
    setUser()
    Games()
});

