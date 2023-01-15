/* Гараас огноо, сар, өдөр гэсэн утгуудыг аван дараах форматын дагуу харуулна уу.
 Жишээ 2009, 12, 31 гэж орж ирвэл “2009-12-31”. Анхаарах зүйл хэрвээ өдөр, сар 
 нэг оронтой байвал 2 оронтой болгох буюу сар нь  1 гэж байвал “01” болгох,
  гараас оруулж байгаа утгыг шалгах */


  let a = Number(prompt("Жил"))
  let b = Number(prompt("Сар"))
  let c = Number(prompt("Өдөр"))

  if(a == a && b <= 9 && c <= 9){
    b = "0" + b
    c = "0" + c
    alert(`
    Жил: ${a}
    Сар: ${b}
    Өдөр: ${c}
    `)
  }else if (a == a && b <= 9 && c > 9){
    b = "0" + b
    alert(`
    Жил: ${a}
    Сар: ${b}
    Өдөр: ${c}
    `)

  }else if(a == a && b > 9 && c <= 9){

    c = "0" + c
    alert(`
    Жил: ${a}
    Сар: ${b}
    Өдөр: ${c}
    `)

  }else{
    alert(`
    Жил: ${a}
    Сар: ${b}
    Өдөр: ${c}
    `)
  }



  /** 2. Гараас утасны дугаар ( 99001234 ) аван шалгах, 
   * зөв дугаар бол харгалзах операторыг
   *  (Unitel, Mobicom, G-Mobile, Skytel) хэвлэх ,
   *  буруу дугаар бол буруу гэсэн мессежийг өгөх */


  let phoneNumber = Number(prompt("give me your phone number"))



if(phoneNumber == "99"){
  console.log("mobicom");
}else if(phoneNumber == "91"){
  console.log("Skytel");
}else if (phoneNumber == "88" ){
  console.log("Unitel");
}else if (phoneNumber == "93"){
  console.log("G-Mobile");
}
else{
  console.log("dont lie");
}