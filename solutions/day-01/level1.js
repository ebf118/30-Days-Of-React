const arr = [];
const arr2 = ['1', '2', '3', '4', '5', '6'];

console.log(arr2.length); // 6
console.log(arr2[0]);
console.log(arr2[3]);
console.log(arr2[5]);

const arr3 = [
    '1',
    2,
    true,
    {'a': 1, 'b': 2},
    [1, 2, 3],
    null
];

console.log(arr3.length); // 6

const itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon'
]

console.log(itCompanies);
console.log(itCompanies.length); // 7
console.log(itCompanies[0]); // Facebook
console.log(itCompanies[3]); // Apple
console.log(itCompanies[6]); // Amazon
console.log(itCompanies[0], 
    '', 
    itCompanies[1], 
    '', 
    itCompanies[2], 
    '', 
    itCompanies[3], 
    '', 
    itCompanies[4], 
    '', 
    itCompanies[5], 
    ' and ', itCompanies[6], ' are big IT companies.');

console.log(itCompanies.includes('Facebook')) // true

const zeroContaineCompany = []
for(let i=0; i<itCompanies.length; i++){
    if(itCompanies[i].includes('o')){
        const zeroCount = itCompanies[i].toLowerCase().split('');
        let count = 0
        for(let j=0; j< zeroCount.length; j++){
            if( zeroCount[j] === 'o'){
                count += 1
            }
        }
        if(count>1){
            zeroContaineCompany.push(itCompanies[i])
        }
    }
}
console.log(zeroContaineCompany)

console.log(zeroContaineCompany.sort());
console.log(zeroContaineCompany.reverse());
console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(4, 7)); 
console.log(itCompanies.slice(3, 4)); // Apple
console.log(itCompanies.shift()); // Facebook
console.log(itCompanies.splice(4, 7)); 
console.log(itCompanies.pop()); // Amazon
console.log(itCompanies.splice())