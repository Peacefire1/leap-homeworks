// 1. Өөрийн нэрийн урт, овог нэрийнхээ уртыг харьцуулж үз.
let firstName = "Enkhtsogt"
console.log(firstName.length);
let lastName = "Ganzorig"
console.log(lastName.length);


// 2. Бүх тэмдэгтүүдийг жижиг үсгээр бичнэ үү.

console.log(firstName.toLowerCase());

// 3. Бүх тэмдэгтүүдийг том үсгээр бичнэ үү.

console.log(lastName.toUpperCase());

// 4. 'Pinecone academy- н' болон ' leap хөтөлбөрт тавтай морилго уу? ' - г нэг мөр болгон нэгтгэнэ үү. “concat()”

let pineCone = "Pinecone acdemy"

let leap = " leap хөтөлбөрт тавтай морилго уу?"

let pineConeLeap = pineCone.concat(leap)

console.log(pineConeLeap);

// 5. firstName, LastName, country, city, age, job хувьсагч зарлан эдгээр хувьсагч орсон өгүүлбэр зохионо уу. Жишээ нь:  Намайг Болд гэдэг. Би Сүхбаатар дүүрэгт амьдардаг.  гэх мэт

// Даалгавараа сайн ойлгосонгүйэ

let country = "Mongolia"
let city = "Ulaanbaatar"
let age = "25"
let job = "Student"

console.log(`Намайг ${lastName} -ийн ${firstName} гэдэг. I live in ${country}.`);


// 6. Дараах загварыг хэвлэхийн тулд console.log() болон escape тэмдэгтүүдийг ашиглана уу.

console.log("1 2 3 4 5 \n2 3 4 5 1 \n3 4 5 2 1 \n4 5 1 2 3 \n5 1 2 3 4");

