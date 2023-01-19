// 1. 10 хүртэлх натурал тоог хэвлэх программ бич

let i = 1;

while (i <= 10) {
  console.log(i);
  i += 1;
}

// 2. 10 хүртэлх натурал тооны сондгой тоонуудыг хэвлэх программ бич

let a = Number(prompt("give me number 1 to 10"));
while (a <= 10) {
  if (a % 2 == 1) {
    console.log(a + "-This sondgoi");
  } else {
    console.log(a + "-Tegsh");
  }
  a += 1;
}

// 3. 10 хүртэлх натурал тооны тэгш тоонуудыг хэвлэх программ бич

// Дээр хамт хийсэн

// 4. 100 хүртэлх натурал тооны нийлбэрийг олох программ бич

let naturalNumber = 0;
let sum = 0;

while (naturalNumber < 100) {
  naturalNumber += 1;
  sum = sum + naturalNumber;

  console.log(sum);
}

// 5. N хүртэлх натурал тооны хэвлэх болон тэдгээр тооны нийлбэрийг олох программ бич

let N = 5;
let n = 0;
let Sum = 0;
while (n < N) {
  n += 1;
  Sum += n;
  console.log(n);
}
console.log(Sum);

// 6. Өгөгдсөн тоог анхны мөн эсэхийг олох программ бич
