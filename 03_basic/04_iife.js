// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();

// (function ourcode() {
//     console.log(`DB CONNECTED TWO `);
// })()

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('jahid')




