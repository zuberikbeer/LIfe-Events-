let name = "Mitch Cuckovich";
let age = 25;
let birthday = "Janurary 24";

const pineapplePizza = false;

let lifeEvents = [
  "I was born in Macomb, Michigan",
  "I went to Wayne State University",
  "I played travel lacrosse",
  "I enjoy lifting weights at the gym",
];

if (pineapplePizza === true) {
  console.log(
    `My name is ${name} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  pineapplePizza === false;
  console.log(
    `My name is ${name} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;

while (counter < Math.floor(Math.random() * 10)) {
  console.log(`${counter} !== 5`);
  counter++;
}

let randomNumber = Math.floor(Math.random() * 10);

if (randomNumber != 5) {
  counter++;
  console.log(`${randomNumber} !==5`);
} else {
  console.log(
    "5===5. It took counter iterations to randomly gernerate the number 5."
  );
}

let hours = window.prompt("Enter hours worked");
let wage = window.prompt("Enter hourly wage");
let overtimeWage = 10 * (wage * 1.5);
if (hours === 50) {
}
console.log(overtimeWage + wage);
