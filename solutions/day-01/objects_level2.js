const users = {
     Alex: {
       email: 'alex@alex.com',
       skills: ['HTML', 'CSS', 'JavaScript'],
       age: 20,
       isLoggedIn: false,
       points: 30
     },
     Asab: {
       email: 'asab@asab.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
       age: 25,
       isLoggedIn: false,
       points: 50
     },
     Brook: {
       email: 'daniel@daniel.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
       age: 30,
       isLoggedIn: true,
       points: 50
     },
     Daniel: {
       email: 'daniel@alex.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
       age: 20,
       isLoggedIn: false,
       points: 40
     },
     John: {
       email: 'john@john.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
       age: 20,
       isLoggedIn: true,
       points: 50
     },
     Thomas: {
       email: 'thomas@thomas.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'React'],
       age: 20,
       isLoggedIn: false,
       points: 40
     },
     Paul: {
       email: 'paul@paul.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
       age: 20,
       isLoggedIn: false,
       points: 40
     }
   }

    // Find the person who has many skills in the users object.
    let maxSkills = 0;
    let personWithMaxSkills = '';
    let loggedInUsers = [];
    for (const user in users) {
        if (users[user].skills.length > maxSkills) {
            maxSkills = users[user].skills.length;
            personWithMaxSkills = user;
        }

        if (users[user].isLoggedIn && users[user].points >= 50) {
            loggedInUsers.push(user);
        }
    }
    console.log(`Person with most skills is ${personWithMaxSkills} with ${maxSkills} skills.`);
    console.log(`Count of users who are logged in and have at least 50 points: ${loggedInUsers.length} ${loggedInUsers.join(', ')}`);

    let mernStackDevs = [];
    for (const user in users) {
        const skills = users[user].skills;
        if (skills.includes('MongoDB') && skills.includes('Express') && skills.includes('React') && skills.includes('Node')) {
            mernStackDevs.push(user);
        }
    }
    console.log(`MERN stack developers: ${mernStackDevs.join(', ')}`);

    console.log('All users:', Object.keys(users));