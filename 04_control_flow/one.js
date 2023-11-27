// const isLoggedIn = true
// const temperature = 41

// if ( temperature === 41 ) {
//     console.log("less than 50");
// } else {
//     console.log("temperature is great than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200 
// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`); 
// }
// console.log(`User power: ${power}`);

// const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");
// }

// Real life Example

const userLoggedIn = true
const debitCard = true
const isLoggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (isLoggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in")
}