
import GeraCPF from "./modules/geraCPF.js";

import './Style/index.css'

(function app() {
    const newCPF = new GeraCPF()
    const generaterCPF = document.querySelector('.generater-cpf')

    generaterCPF.innerHTML = newCPF.geraNovoCPF
})()