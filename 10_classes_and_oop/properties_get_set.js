function User(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, "email", {
        get: function () {
            return this._email.toUpperCase();

},
set: function (value) {
    this.email = value;
}

    })

}

Object.defineProperty(this, "password", {
    get: function () {
        return this._email.toUpperCase();

},
set: function (value) {
this.password = value;
}

})

const chai = new User("h@jahid", "jahid123");

console.log(chai.email);

