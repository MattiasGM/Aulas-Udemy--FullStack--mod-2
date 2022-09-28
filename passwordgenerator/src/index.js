import GeraPassword from "./modules/geraPassword.js";

import './style/index.css'

(function app() {
    const newPassword = new GeraPassword()
    const generaterCPF = document.querySelector('.container')

    generaterCPF.innerHTML = `CPF:  ${newPassword.generatePassword()}`
})()
