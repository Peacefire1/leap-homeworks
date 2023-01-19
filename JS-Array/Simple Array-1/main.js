const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0]);
console.log(itCompanies[4]);
console.log(itCompanies[6]);
console.log("---------------");
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}
console.log("---------------");
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i].toUpperCase());
}

console.log(
  `${itCompanies[0]} ni delhiin shildeg ${itCompanies[1]} tei ursulddug`
);
