class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
   
    get password(){
        return this._password.toUpperCase();
    }

    set password(value){
        this._password = value.toUpperCase()
    }

    // get password(){
    //     return `${this._password}jahid`
    // }

    // set password(value){
    //     this._password = value
    // }

}


const jahid = new User("j@jahid.ai", "jahid123");
console.log(jahid.password);