export default class GeraPassword {

    randPass(length, number, upperCase, lowerCase, symbols) {
        let password = []

        if(length <= 0 || !number && !upperCase && !lowerCase && !symbols) {
            password.push('INVÁLIDO')
            return password.join('')
        }

        for(let i = 0; i < length; i++) {    
            upperCase && password.push(this.creatDigit().toUpperCase())
            lowerCase && password.push(this.creatDigit().toLowerCase())
            number && password.push(String(Math.floor(Math.random() * 9)))
            symbols && password.push(this.creatSymbol())
        }
        
        return password.join('').slice(0, length)
    }

    rand(number) {
        return Number(Math.floor(Math.random() * number))
    }

    creatSymbol() {
        const symbol = ['!', '@', '#', '$', '%']

        const rand = this.rand(5)

        return symbol[rand]
    }

    creatDigit() {
        const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

        const rand = this.rand(26)

        return alphabet[rand]
    }

    generatePassword(digitsLength, addNumber, upperCase, lowerCase, symbols) {
        const password = this.randPass(digitsLength, addNumber, upperCase, lowerCase, symbols)

        return password
    }
}
