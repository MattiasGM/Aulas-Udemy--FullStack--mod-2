class CpfValidate {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfClear', {
            enumerable: true,
            get: function() {
                return cpf.replace(/\D+/g, '')
            }
        })
    }

    validate() {
        if(typeof this.cpfClear === 'undefined') return false
        if(this.cpfClear.length !== 11) return false
        if(this.isSequential()) return false

        const cpfPartial = this.cpfClear.slice(0, -2)
        const digit1 = CpfValidate.creatDigit(cpfPartial)
        const digit2 = CpfValidate.creatDigit(cpfPartial + digit1)
        const newCpf = cpfPartial + digit1 + digit2

        return newCpf === this.cpfClear
    }

    static creatDigit(cpfPartial) {
        const cpfArray = Array.from(cpfPartial)
        let regressive = cpfArray.length + 1
        const total = cpfArray.reduce((ac, val) => {
            ac += (Number(val) * regressive)
            regressive--
            return ac
        }, 0)
        
        const digit = 11 - (total % 11)
        return digit > 9 ? '0' : String(digit)
    }

    isSequential() {
        return this.cpfClear[0].repeat(this.cpfClear.length) === this.cpfClear
    }
}

export default CpfValidate