const month = prompt('Enter month:').toLowerCase();
const year = parseInt(prompt('Enter year:'));

switch (month) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 31 days`);
        break;
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 30 days`);
        break;
    case 'february':
        //check if divisible by 4 but not divisible by 100 unless divisible by 400
        if (((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))) {
            console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 29 days`);
        } else {
            console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 28 days`);        
        }
        break;
    default:
        console.log('Invalid month');
        break;
}