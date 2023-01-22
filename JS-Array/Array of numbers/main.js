let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
let ArraySum = 0;

// Array доторх тоонуудын нийлбэрийг ол.

for (let i = 0; i < arrayOfNumbers.length; i++) {
  ArraySum += arrayOfNumbers[i];
}
console.log(ArraySum);

// Хамгийн их тоог ол.

console.log(Math.max(...arrayOfNumbers));

// Хамгийн бага тоог ол.

console.log(Math.min(...arrayOfNumbers));

// Array - ийн эхэнд дурын 1 тоог нэм.

arrayOfNumbers.unshift("23");

console.log(arrayOfNumbers);

//Array - ийн төгсгөлд дурын 1 тоог нэм.

arrayOfNumbers.push("45");

console.log(arrayOfNumbers);
