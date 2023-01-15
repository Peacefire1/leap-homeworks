let a = prompt("Pls give me your Id");

let IdSpell = a.substring(0, 1)
let idNumber = IdSpell.substring(2, 9) 

if (a.length == 10 ){
    console.log("Real ID");
}else{
    console.log("Fake ID");
}