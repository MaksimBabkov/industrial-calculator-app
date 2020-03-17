


function dda() {
   localStorage.setItem('t1', document.getElementById("b1").innerText);
   localStorage.setItem('t2', document.getElementById("b2").innerText);
   localStorage.setItem('t3', document.getElementById("b3").innerText);
   localStorage.setItem('t4', document.getElementById("b4").innerText);
   localStorage.setItem('t5', document.getElementById("b5").innerText);
   localStorage.setItem('t6', document.getElementById("b6").innerText);
   localStorage.setItem('t7', document.getElementById("b7").innerText);
   localStorage.setItem('t8', document.getElementById("b8").innerText);
   localStorage.setItem('t9', document.getElementById("b9").innerText);
   localStorage.setItem('t10', document.getElementById("b10").innerText);
   localStorage.setItem('t11', document.getElementById("b11").innerText);

   localStorage.setItem('v1', document.getElementById("q1").innerText);
   localStorage.setItem('v2', document.getElementById("q2").innerText);
   localStorage.setItem('v3', document.getElementById("q3").innerText);
   localStorage.setItem('v4', document.getElementById("q4").innerText);
   localStorage.setItem('v5', document.getElementById("q5").innerText);
   localStorage.setItem('v6', document.getElementById("q6").innerText);
   localStorage.setItem('v7', document.getElementById("q7").innerText);
   localStorage.setItem('v8', document.getElementById("q8").innerText);
   localStorage.setItem('v9', document.getElementById("q9").innerText);
   localStorage.setItem('v10', document.getElementById("q10").innerText);
   localStorage.setItem('v11', document.getElementById("q11").innerText);
}

function dde() {
   document.getElementById("b1").innerHTML = localStorage.getItem('t1');
   document.getElementById("b2").innerHTML = localStorage.getItem('t2');
   document.getElementById("b3").innerHTML = localStorage.getItem('t3');
   document.getElementById("b4").innerHTML = localStorage.getItem('t4');
   document.getElementById("b5").innerHTML = localStorage.getItem('t5');
   document.getElementById("b6").innerHTML = localStorage.getItem('t6');
   document.getElementById("b7").innerHTML = localStorage.getItem('t7');
   document.getElementById("b8").innerHTML = localStorage.getItem('t8');
   document.getElementById("b9").innerHTML = localStorage.getItem('t9');
   document.getElementById("b10").innerHTML = localStorage.getItem('t10');
   document.getElementById("b11").innerHTML = localStorage.getItem('t11');

   document.getElementById("q1").innerHTML = localStorage.getItem('v1');
   document.getElementById("q2").innerHTML = localStorage.getItem('v2');
   document.getElementById("q3").innerHTML = localStorage.getItem('v3');
   document.getElementById("q4").innerHTML = localStorage.getItem('v4');
   document.getElementById("q5").innerHTML = localStorage.getItem('v5');
   document.getElementById("q6").innerHTML = localStorage.getItem('v6');
   document.getElementById("q7").innerHTML = localStorage.getItem('v7');
   document.getElementById("q8").innerHTML = localStorage.getItem('v8');
   document.getElementById("q9").innerHTML = localStorage.getItem('v9');
   document.getElementById("q10").innerHTML = localStorage.getItem('v10');
   document.getElementById("q11").innerHTML = localStorage.getItem('v11');
}


//Cookie

function myFunction() {




var
zatarca,
zapasPrSmeny,
zagruzca,
prihodPallet,
zapasPallet,
brackpPallet,
brackPmechkov,
zapas,
zapasPusPallet,
zapasPustMeschckov,
streych,
prichodPm,
ostatokMmm,
zapassPpm,
rawnoPme,
zapasMechokPustoy,
ostatokMmm,
ostatokPmwnalichii,
vanzatarca,
pereborca,
derty;

ostatokPmwnalichii = document.getElementById("a3").value;
var butt = ostatokPmwnalichii;
pereborca = document.getElementById("a11").value;

ostatokPmwnalichii = parseInt(ostatokPmwnalichii);
vanzatarca = document.getElementById("a4").value;
vanzatarca = parseInt(vanzatarca);

var bob = vanzatarca / 30;
bob = parseInt(bob);

bob = bob * 30;
bob = parseInt(bob);

var rachet = vanzatarca - bob;
rachet = parseInt(rachet);

var zatarcaRawna = vanzatarca / 30;
zatarcaRawna = parseInt(zatarcaRawna);

zatarca = ostatokPmwnalichii + vanzatarca - pereborca;

zapasPustMeschckov = document.getElementById("a5").value;
zapasPustMeschckov = parseInt(zapasPustMeschckov);

prichodPm = document.getElementById("a6").value;
prichodPm = parseInt(prichodPm);

brackPmechkov = document.getElementById("a7").value;
brackPmechkov = parseInt(brackPmechkov);

ostatokMmm = zatarca;
ostatokMmm = parseInt(ostatokMmm);

zapasMechokPustoy = zapasPustMeschckov + prichodPm - vanzatarca - brackPmechkov;

zatarca = zatarca / 30;
zatarca = parseInt(zatarca);

zapassPpm = zatarca * 30;
zapassPpm = parseInt(zapassPpm);
rawnoPme = ostatokMmm - zapassPpm;
rawnoPme = parseInt(rawnoPme);

zapasPrSmeny = document.getElementById("a2").value;
zapasPrSmeny = parseInt(zapasPrSmeny);

zagruzca = document.getElementById("a1").value;
zagruzca = parseInt(zagruzca);

var tonnie = zagruzca;
var tonnie = tonnie * 1.5;


prihodPallet = document.getElementById("a9").value;
prihodPallet = parseInt(prihodPallet);

zapasPallet = document.getElementById("a8").value;
zapasPallet = parseInt(zapasPallet);

brackpPallet = document.getElementById("a10").value;
brackpPallet = parseInt(brackpPallet);



zapasPusPallet = prihodPallet + zapasPallet - zatarcaRawna - brackpPallet - palWet; 
zapas = zatarca + zapasPrSmeny - zagruzca;

document.getElementById("b1").innerHTML = zatarcaRawna;
document.getElementById("b2").innerHTML = rachet;
document.getElementById("b3").innerHTML = zagruzca;
document.getElementById("b4").innerHTML = tonnie.toPrecision(4);
document.getElementById("b5").innerHTML = zapas;
document.getElementById("b6").innerHTML = rawnoPme;
document.getElementById("b7").innerHTML = zapasPusPallet;
document.getElementById("b8").innerHTML = brackpPallet;
document.getElementById("b9").innerHTML = brackPmechkov;
document.getElementById("b10").innerHTML = zapasMechokPustoy;
document.getElementById("b11").innerHTML = pereborca;

}


//document.write("Затарка" + " " + zatarcaRawna(b1) + "п" + " " + "+" + " " + rachet(b2) + "м" + "</br>");
//document.write("Загрузка" + " " + zagruzca(b3) + "п" + " " + tonnie.toPrecision(4)(b4)  + "т" + "</br>");
//document.write("Запаc" + " " + zapas(b5) + "п" + " " + "+" + " " + rawnoPme(b6) + "м" + "</br>");
//document.write("Запас п/п" + " " + zapasPusPallet(b7)  + "</br>");
//document.write("Брак п/п" + " " + brackpPallet(b8)  + "</br>");
//document.write("Брак п/м" + " " + brackPmechkov(b9) + "</br>");
//document.write("Запас п/м" + " " + zapasMechokPustoy(b10)  + "</br>");
//document.write("Переборка" + " " + pereborca(b11) + "м" + "</br>")
//function ddr() {
   //localStorage.setItem('v1', document.getElementById("q1").innerText);
   //localStorage.setItem('v2', document.getElementById("q2").innerText);
   //localStorage.setItem('v3', document.getElementById("q3").innerText);
   //localStorage.setItem('v4', document.getElementById("q4").innerText);
   //localStorage.setItem('v5', document.getElementById("q5").innerText);
   //localStorage.setItem('v6', document.getElementById("q6").innerText);
   //localStorage.setItem('v7', document.getElementById("q7").innerText);
   //localStorage.setItem('v8', document.getElementById("q8").innerText);
   //localStorage.setItem('v9', document.getElementById("q9").innerText);
   //localStorage.setItem('v10', document.getElementById("q10").innerText);
   //localStorage.setItem('v11', document.getElementById("q11").innerText);
//}

//function ddv() {
  // document.getElementById("q1").innerHTML = localStorage.getItem('v1');
  // document.getElementById("q2").innerHTML = localStorage.getItem('v2');
  // document.getElementById("q3").innerHTML = localStorage.getItem('v3');
  // document.getElementById("q4").innerHTML = localStorage.getItem('v4');
  // document.getElementById("q5").innerHTML = localStorage.getItem('v5');
  // document.getElementById("q6").innerHTML = localStorage.getItem('v6');
  // document.getElementById("q7").innerHTML = localStorage.getItem('v7');
  // document.getElementById("q8").innerHTML = localStorage.getItem('v8');
  // document.getElementById("q9").innerHTML = localStorage.getItem('v9');
  // document.getElementById("q10").innerHTML = localStorage.getItem('v10');
  // document.getElementById("q11").innerHTML = localStorage.getItem('v11');
//}

function malMechki() {
var
   zatarca,
   zapasPrSmeny,
   zagruzca,
   prihodPallet,
   zapasPallet,
   brackpPallet,
   brackPmechkov,
   zapas,
   zapasPusPallet,
   zapasPustMeschckov,
   streych,
   prichodPm,
   ostatokMmm,
   zapassPpm,
   rawnoPme,
   zapasMechokPustoy,
   ostatokMmm,
   ostatokPmwnalichii,
   vanzatarca,
   pereborca,
   derty;
   
   ostatokPmwnalichii = document.getElementById("w3").value;
   var butt = ostatokPmwnalichii;
   pereborca = document.getElementById("w11").value;
   
   ostatokPmwnalichii = parseInt(ostatokPmwnalichii);
   vanzatarca = document.getElementById("w4").value;
   vanzatarca = parseInt(vanzatarca);
   
   var bob = vanzatarca / 56;
   bob = parseInt(bob);
   
   bob = bob * 56;
   bob = parseInt(bob);
   
   var rachet = vanzatarca - bob;
   rachet = parseInt(rachet);
   
   var zatarcaRawna = vanzatarca / 56;
   zatarcaRawna = parseInt(zatarcaRawna);
   
   zatarca = ostatokPmwnalichii + vanzatarca - pereborca;
   
   zapasPustMeschckov = document.getElementById("w5").value;
   zapasPustMeschckov = parseInt(zapasPustMeschckov);
   
   prichodPm = document.getElementById("w6").value;
   prichodPm = parseInt(prichodPm);
   
   brackPmechkov = document.getElementById("w7").value;
   brackPmechkov = parseInt(brackPmechkov);
   
   ostatokMmm = zatarca;
   ostatokMmm = parseInt(ostatokMmm);
   
   zapasMechokPustoy = zapasPustMeschckov + prichodPm - vanzatarca - brackPmechkov;
   
   zatarca = zatarca / 56;
   zatarca = parseInt(zatarca);
   
   zapassPpm = zatarca * 56;
   zapassPpm = parseInt(zapassPpm);
   rawnoPme = ostatokMmm - zapassPpm;
   rawnoPme = parseInt(rawnoPme);
   
   zapasPrSmeny = document.getElementById("w2").value;
   zapasPrSmeny = parseInt(zapasPrSmeny);
   
   zagruzca = document.getElementById("w1").value;
   zagruzca = parseInt(zagruzca);
   
   var tonnie = zagruzca;
   var tonnie = tonnie * 1.4;
   
   
   prihodPallet = document.getElementById("w9").value;
   prihodPallet = parseInt(prihodPallet);
   
   zapasPallet = document.getElementById("w8").value;
   zapasPallet = parseInt(zapasPallet);
   
   brackpPallet = document.getElementById("w10").value;
   brackpPallet = parseInt(brackpPallet);
   
   
   
   zapasPusPallet = prihodPallet + zapasPallet - zatarcaRawna - brackpPallet; 
   zapas = zatarca + zapasPrSmeny - zagruzca;
   
   palWet = zatarcaRawna;

   document.getElementById("q1").innerHTML = zatarcaRawna;
   document.getElementById("q2").innerHTML = rachet;
   document.getElementById("q3").innerHTML = zagruzca;
   document.getElementById("q4").innerHTML = tonnie.toPrecision(4);
   document.getElementById("q5").innerHTML = zapas;
   document.getElementById("q6").innerHTML = rawnoPme;
   document.getElementById("q7").innerHTML = zapasPusPallet;
   document.getElementById("q8").innerHTML = brackpPallet;
   document.getElementById("q9").innerHTML = brackPmechkov;
   document.getElementById("q10").innerHTML = zapasMechokPustoy;
   document.getElementById("q11").innerHTML = pereborca;
   
   
   }

   function printDiv(divName) {
      var printContents = document.getElementById(divName).innerHTML;
      var originalContents = document.body.innerHTML;

      document.body.innerHTML = printContents;

      window.print();

      document.body.innerHTML = originalContents;
   }