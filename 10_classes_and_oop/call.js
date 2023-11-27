function setUsername(username){
    // Complex DB calls
    this.username = username;
    console.log("called");
}

function createUser(username, email, password){
    setUsername(this, username)

    this.email =email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123456")
console.log(chai);