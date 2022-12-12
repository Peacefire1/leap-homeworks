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
let five = !(4 > 3); // false
let six = !(4 < 3); // true
let eight = !(4 > 3 && 10 < 12); // false
let nine = !(4 > 3 && 10 > 12);// true
let ten = !(4 === "4"); //true

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

//3-r bodlogo
// if … else ашиглан myAge болон yourAge-ийн утгыг харьцуул. Харьцуулалт дээр үндэслэн үр дүнг консол руу хөгшин (би эсвэл та) гэж тэмдэглэнэ үү. Насыг оруулахын тулд prompt("Насаа оруулна уу:")-г ашиглана уу.
console.log("Assignment 3-r bodlogo")
let myAge = 24;
let yourAge = Number(prompt("Give me your age"));
if(myAge < yourAge){
    console.log("ta nadaas ah ym bn");
}else if(myAge == yourAge){
    console.log("2uulaa jiytsuu ym bn");
}else if(myAge > yourAge){
    console.log("bi uuruus cin ah ym bn");
}

// 4-r bodlogo Амралтын өдөр эсвэл ажлын өдөр эсэхийг шалгаарай.

console.log("Assigments 4-r bodlogo");

let workday = Number(prompt("Heddeh udur uu toogoor oruul nuu! \n 1-7"));

if(workday >= 1 && workday <= 5 ){
    console.log("Workday")
}else if(workday == 6 || 7 == workday){
    console.log("weekend")
}


//5-r bodlogo Хэрэглэгчээс цаг оруулах, цаг тутамд үнэлгээ өгөх скрипт бичээрэй. Тухайн хүний цалинг тооцно уу

console.log("Assigments 5-r bodlogo");

let hours = 40;
let ratePerHour = 28;

if(hours == 40 ){
    console.log()
}



