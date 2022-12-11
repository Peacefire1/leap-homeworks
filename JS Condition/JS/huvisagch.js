                    // JS Condition

/* 1-r daalgavar 4 н хувьсагч зарлан тоон утга өг.Өгөгдсөн 4 тооны 80-аас их тоонуудын нийлбэрийг ол.:
a=85 b=75 c=96 d=69 */

let a = 85;
let b = 75;
let c = 96;
let d = 69;
let sum = 0;
if(a > 80){
    sum += a;
}
if(b > 80){
    sum += b;
}
 if(c > 80){
    sum += c;
}
if(d > 80){
    sum += d;
}
console.log(sum);


// 2-r daalgavar   4 н хувьсагч зарлан тоон утга өг.Өгөгдсөн 4 тооны 5-аас бага тоонуудын үржвэрийг ол. 5-аас бага тоо ядаж 1 байгаа:
// a=3 b=7 c=2 d=4


let A=3
let B=7
let C=2
let D=4
let sumA = 1;
if(A < 5){
    sumA *= A;
}
if(B < 5){
    sumA *= B;
}
if(C < 5){
    sumA *= C;
}
if(D < 5){
    sumA *= D;
}

console.log(sumA);

// Assignment-1 

// 1-r bodlog Эхлээд console.log() ашиглахгүйгээр дараах харьцуулалтын илэрхийллийн үр дүнг тодорхойл. Үр дүнгээ шийдсэний дараа console.log() ашиглан баталгаажуулна уу.    
console.log("Assignment 1-r bodlogo")

let i = 4 > 3; //true
let iii = 4 < 3; //false
let ii = 4 >= 3; //true
let iv = 4 <= 3; //flase
let v = 4 == 4; // true
let vi = 4 === 4; // true
let vii = 4 != 4; //false
let iix = 4 !== 4; //false
let ix = 4 != "4"; //false
let x = 4 == "4"; //true
let xi = 4 === "4"; //false

console.log("Ur dun")

console.log(i);
console.log(iii);
console.log(ii);
console.log(iv);
console.log(v);
console.log(vi);
console.log(vii);
console.log(iix);
console.log(ix);
console.log(x);
console.log(xi);



// 2-r bodlogo Эхлээд console.log() ашиглахгүйгээр дараах харьцуулалтын илэрхийллийн үр дүнг тодорхойл. 
// Үр дүнгээ шийдсэний дараа console.log() ашиглан баталгаажуулна уу.
console.log("Assignment 2-r bodlogo")

let one = 4 > 3 && 10 < 12; //true
let two = 4 > 3 && 10 > 12; //false
let three = 4 > 3 || 10 < 12; //true
let four = 4 > 3 || 10 > 12; //true
let five = !(4 > 3); //
let six = !(4 < 3); //
let eight = !(4 > 3 && 10 < 12); // 
let nine = !(4 > 3 && 10 > 12);
let ten = !(4 === "4");

console.log("Ur dun")

console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(five);
console.log(six);
console.log(eight);
console.log(nine);
console.log(ten);