let actualNum = '0';
let operator = '';
let operant = '';

const inputDisplay = document.querySelector('.display')

const buttons = document.querySelectorAll('button');

buttons.forEach(function (button){
    button.addEventListener('click', function (event){
        const buttonText = event.target.textContent;

        if('+-*'.includes(buttonText)){
            operator = buttonText;
            operant = Number(actualNum); 
            actualNum = '0';
        }
        else if (buttonText === '='){
            if(operator==='+')
                actualNum = Number(operant) + Number(actualNum);
            else if(operator==='-')
                actualNum = Number(operant) - Number(actualNum);
            else if(operator==='*')
                actualNum = Number(operant) * Number(actualNum);
        }
        else if (buttonText === 'AC'){
            actualNum = '0';
            operator = '';
            operant = '';
        }
        else{
            if(actualNum==='0')
                actualNum = '';
            actualNum = actualNum + Number(buttonText);
        }
        inputDisplay.value = actualNum
    })
})