// Singleton
// Object.create

// onject literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Jahid",
    "full name": "Jahid Ansari",
    [mySym]: "mykey1",
    age: 20,
    location: "garhwa",
    email: "zahid@google.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "zahid@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "zahid@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());