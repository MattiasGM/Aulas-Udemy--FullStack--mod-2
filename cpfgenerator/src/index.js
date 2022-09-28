import GeraCPF from "./modules/geraCPF.js";

import './style/index.css'

(function app() {
    const newCPF = new GeraCPF()
    const generaterCPF = document.querySelector('.container')

    generaterCPF.innerHTML = `CPF:  ${newCPF.geraNovoCPF()}`
})()
