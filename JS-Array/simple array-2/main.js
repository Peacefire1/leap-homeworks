const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// Array - аас эхний 3 компанийг хайчилж ав
console.log(itCompanies.slice(0, 3));

// Array - аас сүүлийн 3 компанийг хайчилж ав
console.log(itCompanies.slice(4, 7));

// Мэдээллийн технологийн дунд компани эсвэл компаниудыг arrey - аас хайчилж ав
console.log(itCompanies[3]);

// Эхний мэдээллийн технологийн компанийг array - аас хас
console.log(itCompanies.shift());

// Сүүлийн мэдээллийн технологийн компанийг array - аас хас
console.log(itCompanies.pop());
