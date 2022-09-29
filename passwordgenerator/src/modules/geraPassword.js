export default class GeraPassword {

    randPass(length, number, upperCase, lowerCase, symbols) {
        let password = ''
        let index = 0

        while(index < length) {
            if(!number && !upperCase && !lowerCase && !symbols) return password = INVÁLIDO
            if(upperCase) {
                password += this.creatDigit().toUpperCase()
                index++
                if(index >= length) break
            }
            if(lowerCase) {
                password += this.creatDigit().toLowerCase()
                index++
                if(index >= length) break
            }
            if(number) {
                password += String(Math.floor(Math.random() * 9))
                index++
                if(index >= length) break
            }
            if(symbols) {
                password += this.creatSymbol()
                index++
                if(index >= length) break
            }
        }
        return password
    }

    creatSymbol() {
        let symbol = ['!', '@', '#', '$', '%']

        const rand = Number(Math.floor(Math.random() * 5))

        return symbol[rand]
    }

    creatDigit() {
        let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

        const rand = Number(Math.floor(Math.random() * 26))

        return alphabet[rand]
    }

    generatePassword(digitsLength, addNumber, upperCase, lowerCase, symbols) {
        let password = this.randPass(digitsLength, addNumber, upperCase, lowerCase, symbols)

        return password
    }
}
