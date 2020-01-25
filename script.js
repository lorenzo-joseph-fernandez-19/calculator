class Calculator {
    constructor(preOperand, currOperand) {
        this.preOperand = preOperand
        this.currOperand = currOperand
    }
}

clear() {
    this.currOperand = ''
    this.preOperand = ''
    this.operation = undefined
}

delete() {

}

appendNumber(number) {
// this.currOperand = number this.currOperand.toString() + number.toString()
}


chooseOperation(operation) {

}

calculate() {

}

updateDisplay() {
    this.currOperand.innerText = this.currOperand
}


const numberButtons = document.querySelectorAll('[data-number]')
const opButtons = document.querySelectorAll('[data-operations]')
const delButton = document.querySelectorAll('[data-delete]')
const equalsButton = document.querySelectorAll('[data-equals]')
const preOperand = document.querySelectorAll('[data-previous]')
const currOperand = document.querySelectorAll('[data-current]')

const calculator = new Calculator(preOperand, currOperand)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})