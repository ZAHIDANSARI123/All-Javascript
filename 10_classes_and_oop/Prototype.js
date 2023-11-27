

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "web",

    getSpiderPower: function () {

        console.log(`Spider power is ${this.spiderman}`);
    }
}
Object.prototype.jahid = function () {
    console.log(`jahid is present in all objects`);
    
}

Array.prototype.heyJahid = function () {
        console.log(`Jahid say hello to all`);
}
// heroPower.jahid()
// myHeros.jahid()
// myHeros.heyJahid()

// heroPower.heyJahid()

// inheritance

const User = {
    name: "Jahid",
    email: "jahid@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "chaiAurCode   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"jahid".trueLength()
"iceTea".trueLength()
