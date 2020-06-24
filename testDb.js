const db = require('./models');

const errorHandler = error => {
    console.log('🔥🔥🔥🔥🔥');
    console.log(error)
}


//  CREATE
// db.user.create ({
//     firstName: 'Steve',
//     lastName: 'Peters',
//     age: 44,
//     email: 'stpets@bigdaddybezos.com'
// }).then(userData => {
//         console.log('Welcome to jungle 🌴');
//         console.log(userData);
// }).catch(errorHandler);

// console.log('Adding that user was exhausting 😓');

//  READ
db.user.findOne({
    where: {
        id: 1
    }
}).then(foundUser => {
    console.log(`🍊 Hey there ${foundUser.firstName}! You are ${foundUser.age} years old`);
}).catch(errorHandler);


//  UPDATE
//  DETROY
