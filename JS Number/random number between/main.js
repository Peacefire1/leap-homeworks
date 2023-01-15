let a = prompt("give me first number")
let b = prompt("give me second number")


function generateRandomNumber(a , b) {
    return Math.floor(Math.random() * (b - a + 1) + a)
}

const randomNum = generateRandomNumber(a, b)
console.log(randomNum);