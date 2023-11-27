const coding = ["js", "ruby", "java", "python",]

coding.forEach( function(val) {
    console.log(val);
} )

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach( (item, index, array) => {
//     console.log(item, index, array);
// } )

// Mobile cart

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "java"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "java"
    }
]

myCoding.forEach( (item) => {

    console.log(item.languageName);
})