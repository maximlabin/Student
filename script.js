for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let servings = 0;

do {
  servings++;
  let answer = prompt(`Еще по одной? (Текущее количество порций: ${servings}) Введите 1, если хотите закончить.`);

  if (answer === "1") {
    break;
  }
} while (true);

console.log(`Спасибо за общение! Количество порций: ${servings}`);


let number = 13;
let factorial = 1;

for(let i = number; i > 0; i--){
  factorial *= i;
}

console.log(factorial);

let surname = "ANNA";
let isPalindrome = true;

for (let i = 0; i < surname.length / 2; i++) {
  if (surname[i] !== surname[surname.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log(`${surname} is a palindrome!`);
} else {
  console.log(`${surname} is not a palindrome.`);
}

let journalNumber = 13;

for (let i = 2; i <= journalNumber; i++) { 
  let isPrime = true;
  
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      isPrime = false;
      break;
    }
  }
  
  if (isPrime) {
    console.log(i);
  }
}

const inputField = document.getElementById("inputField");
const inputField1 = document.getElementById("inputField1");
const submitButton = document.getElementById("submitButton");
let n = 0;

inputField.addEventListener("input", function() {
  const inputText = inputField.value.trim().toLowerCase();
  if (inputText === "звезды и месяц") {
    n++;
  }
});

inputField1.addEventListener("input", function() {
  const inputText = inputField1.value.trim().toLowerCase();
  if (inputText === "водопровод") {
    n++;
  }
});

submitButton.addEventListener("click", function() {
    const myText = `Вы ответили правильно на ${n} вопросов`;
    const outputElement = document.getElementById("output");
    outputElement.innerText = myText;
});