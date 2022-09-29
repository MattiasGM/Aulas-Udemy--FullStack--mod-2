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

    const numbersOfCharacters = mount(container, 'number', 'numbersOfCharacters', 'inputNumbers', 'Quantidade de caracteres')
    const addNumbers = mount(container, 'checkbox', 'addNumbers', 'checkbox', 'Adicionar números')
    const upperCase = mount(container, 'checkbox', 'upperCase', 'checkbox', 'Letras maiúsculas')
    const lowerCase = mount(container, 'checkbox', 'lowerCase', 'checkbox', 'Letras minúsculas')
    const symbols = mount(container, 'checkbox', 'symbols', 'checkbox', 'Simbolos')

    const generater = creat('input', 'submit', 'button', 'Gerar Senha', 'button')
    container.appendChild(generater)

    document.addEventListener('click', e => {
        if(e.target.id === 'submit') {
            const container = document.querySelector('.container')
            const panel1 = document.querySelector('#divPanel')
            const numbersOfCharacters = Number(document.querySelector('#numbersOfCharacters').value)
            const addNumbers = document.querySelector('#addNumbers')
            const upperCase = document.querySelector('#upperCase')
            const lowerCase = document.querySelector('#lowerCase')
            const symbol = document.querySelector('#symbol')

            panel1.innerHTML = `Password: <p>${newPassword.generatePassword(numbersOfCharacters, addNumbers.checked, upperCase.checked, lowerCase.checked, symbol.checked)}</p>`
            container.appendChild(panel)
            
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
