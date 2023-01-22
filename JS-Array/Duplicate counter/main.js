const myArray = ["1", "2", "3", "4", "1", "1"];

let elementCounts = myArray.reduce(
  (count, item) => ((count[item] = count[item] + 1 || 1), count),
  {}
);

console.log(elementCounts);

uniqueCount = [
  "1",
  "2",
  "3",
  "4",
  "1",
  "e",
  "a",
  "b",
  "c",
  "f",
  "g",
  "h",
  "h",
  "h",
  "e",
  "a",
];
var count = {};
uniqueCount.forEach(function (i) {
  count[i] = (count[i] || 0) + 1;
});
console.log(count);
