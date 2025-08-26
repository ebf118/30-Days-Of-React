const age = parseInt(prompt('Enter your age:'))

if (age > 18) {
    console.log('You are old enough to drive');
}else{
    let ageDiff = 18 - age;
    console.log(`You are left with ${ageDiff} years to drive`);
}

const myAge = 34;

if(age > myAge){
    let ageDiff = age - myAge;
    console.log(`You are ${ageDiff} years older than me`);
}else{
    let ageDiff = myAge - age;
    console.log(`I am ${ageDiff} years older than you`);
}

let a = 4;
let b = 3;

if(a > b){
    console.log(`${a} is greater than ${b}`);
}else{
    console.log(`${a} is less than ${b}`);   
}

a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is less than ${b}`);