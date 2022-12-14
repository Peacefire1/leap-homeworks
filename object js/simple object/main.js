// let Dog = {
//     Name: "Nohoi",
//     Uulder: "Samyod",
//     Age: 5,
//     Lovely: "",

// }
// console.log(Dog);
// console.log(Object.values(Dog));
// Dog.color = "White";


// console.table(Dog)

/**
 * Амьтадын дата үүсгэнэ үү. 
let animals = [{type: "dog", sound: "woof"}, {type: "cow",sound: "moo"},{type: "cat",sound: "meow"}] гэх мэт.
1. Амьтан яаж дугардаг function бичнэ үү. (What does the fox say? "Ring-ding-ding-ding-dingeringeding!" гэх мэт)

 */

// let animals = [
//     { type: "dog", sound: "woof" }, 
//     { type: "cow", sound: "moo" }, 
//     { type: "cat", sound: "meow" }];
//     function sounds(animals) {
//         console.log(`What doe the ${animals[0].type} say ? ${animals[0].sound}-${animals[0].sound}`);
//     }

// sounds(animals);

// Ангид хэдэн эрэгтэй , эмэгтэй сурагч байгааг олох object буцаадаг функц бичих 
//  Сурагчдын насны дунджийг олох 
// функц бичих 
//  Сурагчидад овог нэмж оруулах 
// Ижилхэн настай сурагчдыг олж шинэ array дотор хийх  
//         let students=[
//             {
//             name: 'Сэд-Эрдэнэ',
//             age: 19,
//             gender: "male"
//         },
//             {
//             name: 'Индра',
//             age: 19,
//             gender: "female"
//         },
//             {
//             name: 'Хатнаа ',
//             age: 21,
//             gender: "male"
//         },
//             {
//             name: 'Тэмүүлэн',
//             age: 23,
//             gender: "male"
//         },
//             {
//             name: 'Намуун',
//             age: 23,
//             gender: "female"
//         },
//     ]


// Дэлгүүрийн боруулалтын мэдэээл өгөгдсөн. 
// productName, unitPrice, amount, price, casherId(Ajiltanii dugaar), date гэсэн мэдээлэл агуулна. 
// Өгөгдлийг. өөрсдөө зохионо.  30 хүртэлх мөртэй.

let data = [];
let info ={};
let productName;
let unitPrice;
let amount;
let totalPrice;
let casherId;
let date;

// data1.push(info);
// info.productName="Bakery"
// console.log(data);
// {productName:"Bakery", unitPrice:5000, amount: 200, totalPrice: 500000  casherId:1, date: '2022-11-01'},
// Дараах даалгаварыг хийж гүйцэтгэнэ үү.
// 1. Нийт борлуулалтын дүнг тооцоолох.
// 2. Нийт борлуулагдсан барааны тоог тооцоолох.
// 3. Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.
// 4. Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгэр/ харуулах.
// 5. Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.
// 6. Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгээр/ харуулах.
// 7. Хамгийн их зарагдсан /боруулалтын үнийн дүнгээр/ 10 барааны боруулалтын үнийн дүнгийн нийт боруулалтанд эзлэх хувь харуулах.
// 8. Хамгийн их зарагдсан /боруулалтын тоо хэмжээгээр/ 5 барааны тоо хэмжээ нийт барааны тоо хэмжээнд эзлэх хувь харуулах.
// 9. Хамгийн бага зарагдсан /боруулалтын үнийн дүнгээр/ 5 барааны боруулалтын үнийн дүнгийн нийт боруулалтанд эзлэх хувь харуулах.
// 10. Хамгийн бага зарагдсан /боруулалтын тоо хэмжээгээр/ 5 барааны тоо хэмжээ нийт барааны тоо хэмжээнд эзлэх хувь харуулах.

data.push(info)
for (i=0; i<=30; i++){
    info.productName="Bakery"+String(i);
    info.unitPrice=Math.floor(Math.random()*(100000-500)+500);
    info.amount=Math.floor(Math.random()*(1000));
    info.totalPrice=unitPrice*amount;
    info.casherId=i;
    info.date=Date();
    console.table(info)
}
console.table(data)

