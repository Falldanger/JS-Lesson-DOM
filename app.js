//Lesson12
let h1 = document.getElementById('header');

h1.innerText = 'Hello';
console.log(document.getElementById('header'));


let inputField = document.querySelector('[value = "20"]');
inputField.value = 100;

console.log(inputField);
//DZ

let element = {
    class: "inputForm",
    value: 50
}

let inputFormElement = document.querySelector(`.${element.class}`);

inputFormElement.value = element.value;

console.log(inputFormElement);