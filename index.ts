// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const Person={
  name:string;
  age:number;
  role:[number,string];
}={
  name:'nafees',
  age:37,
  role:[1,"Admin"]
}

console.log(Person.name);


