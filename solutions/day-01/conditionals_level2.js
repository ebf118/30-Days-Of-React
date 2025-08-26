// const score = parseInt(prompt('Enter your score:'));

// switch (true) {
//     case score >= 90 && score <= 100:
//         console.log('A');
//         break;
//     case score >= 70 && score <= 89:
//         console.log('B');
//         break;
//     case score >= 60 && score <= 69:
//         console.log('C');
//         break;
//     case score >= 50 && score <= 59:
//         console.log('D');
//         break;
//     case score >= 0 && score <= 49:
//         console.log('F');
//         break; 
//     default:
//         console.log('Invalid score');
//         break
// }

// const month = prompt('Enter month:').toLowerCase();

// switch (true) {
//     case month === 'september' || month === 'october' || month === 'november':
//         console.log('The season is Autumn');
//         break;
//     case month === 'december' || month === 'january' || month === 'february':
//         console.log('The season is Winter');
//         break;
//     case month === 'march' || month === 'april' || month === 'may':
//         console.log('The season is Spring');
//         break;
//     case month === 'june' || month === 'july' || month === 'august':
//         console.log('The season is Summer');
//         break;
//     default:
//         console.log('Invalid month');
//         break;
// }

const day = prompt('Enter day:').toLowerCase();

switch (day) {
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log(`${day} is a working day`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`${day} is a weekend`);
        break;
    default:
        console.log('Invalid day');
        break;
}
