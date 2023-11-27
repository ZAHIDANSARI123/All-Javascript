const user = {
    username: "jahid",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        
    }
}

// user.welcomeMessage()
// user.username = 'sam'
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "jahid"
//     console.log(this.username);
// }

// chai()

// const chai = function (){
//     let username = "jahid"
//     console.log(this.username);
// }

// const chai = function (){
//     let username = "jahid"
//     console.log(this.username);
// }

const chai = () => {
    let username = "jahid"
    console.log(this);
}

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "jahid"})

console.log(addTwo(3, 4));



chai()