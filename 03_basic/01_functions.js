
function sayMyName(){
    console.log("j");
    console.log("a");
    console.log("h");
    console.log("i");
    console.log("d");
}
// sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2){
    // let result = number1 + number2
    // console.log("jahid");
    return number1 + number2
}
const result = addTwoNumber(3, 4)

// console.log("Result: ", result);

function loginUserMessage(username){
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return
    // }
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("jahid"));
// console.log(loginUserMessage());

// ...rest operator
// function calculateCartPrice(val1, val2, ...num1){
//     return num1
    
// }
// console.log(calculateCartPrice(200, 300, 400));

const user = {
    username: "jahid", 
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
