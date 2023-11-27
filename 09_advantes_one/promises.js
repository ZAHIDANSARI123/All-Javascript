const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task completed')
        resolve()
}, 1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2')
        resolve()
}, 1000)
}).then(function(){
    console.log("Async task 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email: "chai@gamil.com"})
}, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false          // try it true and false
        if (!error) {
            resolve({username: "jahid", password: "12345"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"));

 
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false          // try it true and false
        if (!error) {
            resolve({username: "javascript", password: "12345"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response);
}

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
   
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(response);
         const data = await response.json()
         console.log(data);
    } catch (error) {
        
        console.log("E: ", error);
    }

}
 getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
