// Primitive

// 7 types : String, Number, boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = symbol('123')
const anotherId = symbol('123')

//console.log(id === anotherId);


//const bigNumber = 834786582349n


// Reference (Non primitive)

// Array, Objects, Functions


const heros = ["shaktiman", "naagraj", "doganaj"]     // Array
let myObj = {            // Object
    name: "vikash",
    age: 33,
} 

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);

// +++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "jahidansaridotcom"

let anothername = myYoutubename
anothername = "privetjobwala"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@gmail.com"
       //upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "jahid@google.com"