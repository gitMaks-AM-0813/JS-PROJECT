const yearForm = document.querySelector(".years__form");
const yearInput = document.getElementById("yearInput");
const yearResult = document.getElementById("result");

yearForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const year = Number(yearInput.value);

    if (!year || year < 1) {
        yearResult.textContent = "Будь ласка, введіть коректний рік.";
        return;
    }

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        yearResult.textContent = "Ви народилися у високосний рік";
    } else {
        yearResult.textContent = "Ви народилися не у високосний рік.";
    }
});
const button = document.getElementById("CheckButton");
const input = document.getElementById("randnambInput");
const resultRandnamb = document.getElementById("resultRandnamb");

button.addEventListener("click", function () {
    event.preventDefault();
    const randnamb = Number(input.value);

    if (randnamb === 4) {
        resultRandnamb.textContent = "Ви вгадали число!";
    } else {
        resultRandnamb.textContent = "Ви не вгадали число!";
    }
});

const input1 = document.querySelector(".calc__input");
const input2 = document.querySelector(".calc__input-two");
const result = document.querySelector(".calc__input-result");

let operator = "";

function calculate(op) {
    operator = op;
}

function showResult() {
    const num1 = Number(input1.value);
    const num2 = Number(input2.value);

    let res;

    if (operator === "+") {
        res = num1 + num2;
    } 
    else if (operator === "-") {
        res = num1 - num2;
    } 
    else if (operator === "*") {
        res = num1 * num2;
    } 
    else if (operator === "/") {
        if (num2 === 0) {
            result.value = "Ділення на 0";
            return;
        }
        res = num1 / num2;
    } 
    else {
        result.value = "Оберіть операцію";
        return;
    }

    result.value = res;
}

const form = document.querySelector(".enternum__form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    getBiggestNumber();
});

function getBiggestNumber() {
    const inputs = document.querySelectorAll(".enternum__input");
    const text = document.querySelector(".enternum__text");

    const num1 = Number(inputs[0].value);
    const num2 = Number(inputs[1].value);
    const num3 = Number(inputs[2].value);

    const biggest = Math.max(num1, num2, num3);

    text.textContent = `Найбільше число, яке ви ввели - ${biggest}`;
}