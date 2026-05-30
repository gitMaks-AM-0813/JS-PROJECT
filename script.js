function calculate(operator){
    const num1 = parseFloat(document.querySelector("calc__input").value);
    const num2 = parseFloat(document.querySelector("calc__input-two").value);
    const resultInput = (document.querySelector("calc__input-result"));

      if (isNaN(num1) || isNaN(num2)) {
        resultInput.value = "Помилка";
        return;
    }

     let sum = 0;
    switch(operator) {
        case '+': sum = num1 + num2; break;
        case '-': sum = num1 - num2; break;
        case '*': sum = num1 * num2; break;
        case '/': 
            break;
    }
    
    resultInput.value = sum;
}