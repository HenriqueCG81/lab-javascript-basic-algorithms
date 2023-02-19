// Iteration 1: Names and Input
const hacker1 = 'Henrique';
console.log(`The driver's name is ${hacker1}`);
const hacker2 = 'Pedro';
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters`
  );
}

// Iteration 3: Loops
let upperName = '';
let separetedName = '';
upperName = hacker1.toUpperCase();
for (let i = 0; i < upperName.length; i++) {
  if (i < upperName.length - 1) {
    separetedName += upperName[i] + ' ';
  } else {
    separetedName += upperName[i];
  }
}
console.log(separetedName);

let navigatorBack = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorBack += hacker2[i];
}
console.log(navigatorBack);

let nameFirst = hacker1.localeCompare(hacker2);

if (nameFirst === -1) {
  console.log("The driver's name goes first.");
} else if (nameFirst == 1) {
  console.log('Yo, the navigator goes first definitely.');
} else {
  console.log('What?! You both have the same name?');
}
