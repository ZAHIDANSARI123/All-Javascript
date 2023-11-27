const user = {
    username: "jahid",
    loginCount: 23,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
}

}

console.log(user.username);
// console.log("user.getUserDetails()");
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const userOne = new User("jahid", 23, true)     //one time new User to use
const userTwo =new User("shakti", 23, false) 

console.log(userOne);
console.log(userTwo);
