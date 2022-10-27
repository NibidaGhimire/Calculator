class Calculator{
    constructor(previousOperandElement,currentOperandElement){
    this.previousOperandElement=previousOperandElement;
    this.currentOperandElement=currentOperandElement;
        this.clear();
    }

    clear(){
        this.previousOperand=""
        this.currentOperand=""
        this.operation=undefined;

    }

    delete(){
        this.currentOperand=this.currentOperand.toString().slice(0,-1)
    }

    appendNumber(number){
        if(number==="." && this.currentOperand.includes(".")){return;}
        this.currentOperand=this.currentOperand.toString()+number.toString()

    }

    chooseOperation(operation){
        if(this.previousOperandTextElement!=="" &&operation!=="%"){
            this.compute();
        }
        this.operation=operation
        this.previousOperand=this.currentOperand
        this.currentOperand=""
    }

    compute(){
        if(this.currentOperand===""){return}
        let computation
        const previous=this.previousOperand
        const current=this.currentOperand
        switch(this.operation){
            case "+":
                computation=previous+current
                break
            case "-":
                computation=previous-current
                break
            case "×":
                computation=previous*current
                break   
            case "÷":
                computation=previous/current
                break  
            case "%":
                computation=current/100
                break       
            default:
                return    
        }
        this.currentOperand=computation
        this.previousOperand=""
        this.operation=undefined

    }

    update(){
        this.currentOperandElement.innerText=this.currentOperand
        this.operation!==undefined?
            this.previousOperandElement.innerText=
            `${this.previousOperand}${this.operation}`
            :
            this.previousOperandElement.innerText=this.previousOperand
        
    }
}



const numberButton= document.querySelectorAll("[data-number]");
const operationButton= document.querySelectorAll("[data-operation]");
const equalButton= document.querySelector("[data-equals]");
const deleteButton= document.querySelector("[data-delete]");
const allClearButton= document.querySelector("[data-allClear]");
const previousOperandElement= document.querySelector("[data-previousOperand]");
const currentOperandElement= document.querySelector("[data-currentOperand]");

const calculator=new Calculator(previousOperandElement,currentOperandElement)


numberButton.forEach(button=>{
    button.addEventListener("click",()=>{
        calculator.appendNumber(button.innerText)
        calculator.update()

    })
})


operationButton.forEach(button=>{
    button.addEventListener("click",()=>{
        calculator.chooseOperation(button.innerText)
        calculator.update()

    })
})

equalButton.addEventListener("click",button=>{
        calculator.compute()
        calculator.update()

})

allClearButton.addEventListener("click",button=>{
    calculator.clear()
    calculator.update()

})

deleteButton.addEventListener("click",button=>{
    calculator.delete()
    calculator.update()

})
