const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = calculator.querySelector('.calculator__display');


keys.addEventListener('click', event => {
    //exclude grid borders
    /* The Element.closest() method returns the closest ancestor of the current element */
   if(!event.target.closest('button')) return 
   const key = event.target;
   const keyValue = key.textContent;
   const displayValue = display.textContent;

/* The HTMLElement.dataset property provides read and write access to any custom data attributes (data-*) set on the element. An abcDef key will be transformed in the DOM into a data-abc-def attribute */
   const type = key.dataset.type;
   const previousKeyType = calculator.dataset.previousKeyType;

//condition to add number, operator, or calculate result

    if(type === 'number'){
        if(displayValue === '0' || previousKeyType === 'operator'){
        display.textContent = keyValue; 
        }else{
        display.textContent = displayValue + keyValue
        }
    }

    if(type === 'operator'){
        const operatorKeys = keys.querySelectorAll('[data-type="operator"]');
        // add in the DOM for each operator key selected a data-state and a 'selected' state for the operator selected
        operatorKeys.forEach(element => {element.dataset.state = ''})
        
        key.dataset.state = 'selected'

        calculator.dataset.firstNumber = displayValue;
        calculator.dataset.operator = key.dataset.key;
    }

    if(type === 'equal'){
        const firstNumber = calculator.dataset.firstNumber;
        const operator = calculator.dataset.operator;
        const secondNumber = displayValue;
        display.textContent = calculate (firstNumber, operator, secondNumber);
    }

    if(type === 'clear'){
        calculator.dataset.firstNumber = ''
        calculator.dataset.operator = ''
        display.textContent = '0'
    }

        calculator.dataset.previousKeyType = type;
})

    function calculate (firstNumber, operator, secondNumber){
        // parseInt parses the string provided as an argument and returns an integer
        firstNumber = parseInt(firstNumber);
        secondNumber = parseInt(secondNumber);
    
        if(operator === 'plus') return firstNumber + secondNumber;
        if(operator === 'minus') return firstNumber - secondNumber;
        if(operator === 'times') return firstNumber * secondNumber;
        if(operator === 'divide') return firstNumber / secondNumber;
        return result
    }