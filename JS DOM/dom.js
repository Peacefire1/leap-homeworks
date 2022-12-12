// 1. минут : секунд : дойл гэж харагддаг дижитал цаг хийнэ үү.s
const D = new Date();
let hours = D.getHours()
let minutes=D.getMinutes()
let seconds1=D.getSeconds()
let milliseconds1=D.getMilliseconds()
console.log(minutes);
document.getElementById("demo").innerHTML = hours;
document.getElementById("demo1").innerHTML = minutes;
document.getElementById("demo2").innerHTML = seconds1;

document.getElementById("Clock").style= "font-size:42px ; display:flex"

document.getElementById("demo").style = "padding:20px; border:2px solid orange"
document.getElementById("demo1").style = "padding:20px; border:2px solid orange"
document.getElementById("demo2").style = "padding:20px; border:2px solid orange"