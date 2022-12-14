// let i = 1;

// while(i <= 10){
//     console.log(i);
//     i++
// }
// while(i <= 10){
//     if(i % 2 == 1){
//         console.log(i,"sondogi")
//     }
//     i++
// }
// let sum=0;

// while(i <= 100){
//     sum = sum + i ;
//       i++  
// }
// console.log(sum);

// let g = (prompt("too"));



// for(i=2 ; i < g ; i++){
//     if(g % i == 0){

//     }
// }
// console.log(g,"prime too");


// let inputValue= Number(prompt("too"));
// let isprime=inputValue==1? false:true;

// for(let i=2;i<inputValue;i++){
//   inputValue%i==0? isprime*=false :isprime*=true;
// };

// alert(`${inputValue} is ${isprime? 'prime':'not prime'} number`);


// let a = 1;
// let c = 1;
// while(a <= g){
//     c = c * a 
//     a++
// }console.log(c);


// i=0;
// let sum= 0 ;

// while(i < g.length ){
//     sum = sum + Number(g[i])
//     i++
// }
// console.log(sum);
console.log("1");
let a = 1;
while (a <= 10){
    console.log(a);
    a = a + 1;
}

console.log("2");

let b = 1 ;

while(b <= 10){
    if(b % 2 == 1){
        console.log(b)
    }
    b++
}
console.log("3")

let c = 0;

while(c <= 10){
    if(c % 2 == 0){
        console.log(c)
    }
    c++
}

console.log("4")

let d = 1; 
let sum = 0 ;
while(d <= 100){
    sum = sum + d
    d++
}
console.log(sum);

console.log("5")

let N = Number(prompt("give me number"));
let A = 0;
let sumA = 0;
while(A <= N){
    console.log(A);
    sumA = sumA + A;
    A++
}
console.log(sumA)

console.log("6")


let inputValue= Number(prompt("too"));
let isprime=inputValue==1? false:true;

for(let i=2;i<inputValue;i++){
  inputValue%i==0? isprime*=false :isprime*=true;
};

console.log(`${inputValue} is ${isprime? 'prime':'not prime'} number`);


console.log("7")

// let1 firsNumber = Number(prompt("first number"));
// let secondNumber = Number(prompt("Second number"));
let x = 5;
let aa = " ";
let i=0;
let j =1;
while(i <= 5){
    while(j <= x){
        aa = aa +j
        j++
        console.log(aa)
    }
    i++
}




