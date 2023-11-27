// for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num)
}

const greetings = "Hello jahid"
for (const letter of greetings) {
    // console.log(`Each chai is ${greetings}`)
}

// MAPS


const map = new Map()
map.set('IN', 'India')
map.set('US', 'United States')
map.set('UK', 'United Kingdom')

// console.log(map)

// for (const key of map) {
//     console.log(key)

// }

for (const [key, value] of map) {
    // console.log(key, ':-', value)
}

const myObject = {
    'game1': 'Cricket',
    'game2': 'Football', 
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value)
} 
    


 