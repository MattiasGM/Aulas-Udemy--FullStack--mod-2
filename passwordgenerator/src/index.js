import GeraPassword from "./modules/geraPassword.js";
import Creat from "./modules/creatTags.js"

const newPassword = new GeraPassword()
const { creat } = new Creat()

import './style/index.css'

(function app() {

    const container = document.querySelector('.container')

    const panel = creat('div', 'divPanel')
    panel.innerHTML = `Password: Selecione as opções`
    container.appendChild(panel)

    mount(container, 'number', 'numbersOfCharacters', 'inputNumbers', 'Quantidade de caracteres')   // creat input number of characters
    mount(container, 'checkbox', 'addNumbers', 'checkbox', 'Adicionar números')                     // creat input check add Numbers
    mount(container, 'checkbox', 'upperCase', 'checkbox', 'Letras maiúsculas')                      // creat input check add Upper Case
    mount(container, 'checkbox', 'lowerCase', 'checkbox', 'Letras minúsculas')                      // creat input check add Lower Case
    mount(container, 'checkbox', 'symbols', 'checkbox', 'Simbolos')                                 // creat input check add Symbols

    const generater = creat('input', 'submit', 'button', 'Gerar Senha', 'button')
    container.appendChild(generater)

    document.addEventListener('click', e => {
        if(e.target.id === 'submit') {
            const numbersOfCharacters = Number(document.querySelector('#numbersOfCharacters').value)
            const addNumbers = document.querySelector('#addNumbers').checked
            const upperCase = document.querySelector('#upperCase').checked
            const lowerCase = document.querySelector('#lowerCase').checked
            const symbol = document.querySelector('#symbols').checked

            panel.innerHTML = `Password: <p>${newPassword.generatePassword(numbersOfCharacters, addNumbers, upperCase, lowerCase, symbol)}</p>`
            
        }
    })

})()

function mount(container, input, id, className, text) {
    const p = creat('p');
    const Input = creat('input', id, className, '', input, '0');
    const Label = creat('label');
    p.innerHTML = text;
    Label.appendChild(p);
    Label.appendChild(Input);
    container.appendChild(Label)
    return;
}
