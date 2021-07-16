// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

enum Role {
  ADMIN = 'Admin',
  AUTHOR = 'AUTHOR'
}

const Person = {
  name: 'nafees',
  age: 20,
  hobbies: ['sports', 'cricket']
};

console.log(Person.age);
const res = Add(4, 50, true, 'as-number');
console.log('res=' + res);

type combinetype = number | string;
function Add(
  n1: combinetype,
  n2: combinetype,
  showResult: boolean,
  resultConversion: 'as-number' | 'as-text'
) {
  if (
    typeof n1 === 'number' &&
    typeof n2 === 'number' &&
    resultConversion === 'as-number'
  ) {
    return n1 + n2;
  }
  const result = n1.toString() + n2.toString();
  if (showResult) {
    console.log('Result = ' + result);
  } else {
    return result;
  }
}
