let text =
     'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let words = text.replace(/[^\w\s]/g, "");
   console.log(words)
   console.log(words.split(' '));

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if(shoppingCart.includes('Meat') === false){
    shoppingCart.unshift('Meat');
}

if(shoppingCart.includes('Sugar') === false){
    shoppingCart.push('Sugar');
}

if(shoppingCart.includes('Honey')){
    const honeyIndex = shoppingCart.indexOf('Honey');
    shoppingCart.splice(honeyIndex, 1);
}

if(shoppingCart.includes('Tea')){
    const teaIndex = shoppingCart.indexOf('Tea');
    shoppingCart[teaIndex] = 'Green Tea';
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack)