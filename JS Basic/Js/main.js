                            //JS Basic
//1-r daalgavar "Comments can make code readable :)"

//2-r daalgavar "Java script lesson begin"

/*3-r daalgavar" 
Comments can make code readable" 
олон мөртэй коммент болгох   */

// 4-r daalgavar  number, string, boolean, undefined, null зэрэг утгуудыг өгөх 


let a = 1;
console.log(typeof(a));

let b = "1";

console.log(typeof(b));


let c;
console.log(typeof(c));

let d = null;
console.log(d);

let e = true;
console.log(typeof(e));

// 5-r daalgavariig deer hatm hiisen

// 6-r daalgavar   Утга оноогоогүй хувьсагч зарлах 

let chat;

// 7-r daalgavar   Утга оноосон хувьсагч зарлах 

let chatoff = 1 ;

// 8-r daalgavar Олон мөрөнд First name, last name, marital status, country, age гэсэн нэртэй хувьсагч зарлах


let firstName;
let lastName;
let maritalStatus;
let country;
let age;


// 9-r daalgavar Нэг мөрөнд First name, last name, marital status, country, age гэсэн нэртэй хувьсагч зарлах

let Firstname, Lastname, MaritalStatus, Country, Age ;

console.log(Lastname, Firstname, MaritalStatus,Country,Age)

// 10-r Гурвалжингийн периметрийг олох 

        // formula " P = a + b + c 

let aSide = 4;
let bBase = 5;
let cSide = 6;

let P = aSide + bBase + cSide;
console.log(P);

// 11-r daalgavar Гурвалжингийн периметрийг олох 
        // Area of a circle Formula A=Pr^2

const PI = 3.14 ;

let r = 45;
let A = PI * (r * r);

console.log(A);

// 12-r daalgavar m = y2-y1/x2-x1 хариуг олох 

let y = 4;
let x = 5;

let m = (y * 2 - y * 1)/(x * 2 - x * 1);

console.log(m);

// 13-r daalgavar 15 Gegabyte нь хэдэн биттэй тэнцүү вэ ?

/*
*  There are 8000000000 bits in 1 gigabyte
*/

const bits = 8_000_000_000;
let Gb = 1;
let Gb15 = (Gb * 15 * 8000000000)
console.log(Gb15);

//14-r daalgavar  15 МB дата 3 секундэд манай интернэт онлайнаар татаж чаддаг бол түүнийг BIT Rate-ийг олно уу.

    // 1 bit = 0.000000125 MB 

    let bit = 0.000000125;
    let MB = 1
    let sec3 = bit * MB * 15;
    
    console.log(sec3);


// 15 -r daalgavar side1, side2, side3 гэсэн хувьсагчдад гурвалжны гурван талыг онооно. Ийнхүү гурван тал өгөдсөн байхад үед гурвалжны талбайг ол.

    /*      Semi Perimeter s=(a+b+c)/2 
        Area of Triangle = ^s(s-a)(s-b)(s-c)
    */

let side1 = 5 ;
let side2 = 5 ;
let side3 = 5 ;

let s = (side1 + side2 + side3) / 2 ;
console.log(s)

let AreaOfTriangle = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

console.log(AreaOfTriangle);

// 16-r daalgavar  Өгсөн тоог цельсээс фаренгейт рүү хөрвүүл.

// F=C*9/5+32 celsius to fahrenheit formula

let C = Number( prompt("C"));

let F = (C * (9/5) + 32);

alert(F);
console.log(F);

// 17-r daalgavar Өгсөн тоог фаренгейтээс цельс рүү хөрвүүл.

// °C = [(°F-32)×5]/9  Fahrenheit to celsius formula


let F0 = Number (prompt("F"));

let C0 = ( (( F0 - 32 ) * 5) / 9 )

alert( C0 );

console.log(C0);

// 18-r daalgavar  2 хувьсагч зарлан 2 тоон утга өг. Тухайн 2 хувьсагчдаар Math-ийн 5н үйлдэлүүдийг (+-*/%) гүцэтгээд үр дүнг нь дараах байдлаар харуул: 



// 20-r daalgavar Доорх Baby Shark дууны үгийг хамгийн ихдээ 12 хувьсагч ашиглан орлуулан бичээд console дээр дарааллуулан хэвлэж харуулна уу.  


let message = "Baby Shark, doo-doo, doo-doo"
let baby = "Baby Shark"
console.log(message)
console.log(message)
console.log(message)
console.log(message)
console.log(message)
console.log(baby)
console.log(message)
console.log(message)
console.log(message)
console.log(message)
console.log(baby)