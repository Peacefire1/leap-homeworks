let a = prompt("give me your phone number")

let b = a.substring(0, 4 )

let fullNum = a.substring(4,12)

if (b == "+976" && b.length == 4 && Number(fullNum) && a.length ==12){
    console.log("This is phone Number");
}else{
    console.log("Dont lie");
}