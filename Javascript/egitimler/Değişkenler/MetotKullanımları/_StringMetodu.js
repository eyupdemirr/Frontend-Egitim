// string() Metodu;
// Değişken içeriğini mutlak olarak string veri türünde düz bir metine dönüştürerek oluşturduğu değeri geriye döndürür.

var degisken1 = Boolean(true); //true = 1
var degisken2 = Boolean(false); //false = 0
var degisken3 = Boolean(1); //false = 0
var degisken4 = Boolean(0); //false = 0
var degisken5 = 8;
var degisken6 = 8.55;
var degisken7 = ["bu", "bir", "dizi"];
var degisken8 = "";
var degisken9 = new Date();

document.write(typeof(degisken1) + " : " + degisken1 + "<br>");
document.write(typeof(degisken2) + " : " + degisken2 + "<br><br>");
document.write(typeof(degisken3) + " : " + degisken3 + "<br>");
document.write(typeof(degisken4) + " : " + degisken4 + "<br><br>");
document.write(typeof(degisken5) + " : " + degisken5 + "<br>");
document.write(typeof(degisken6) + " : " + degisken6 + "<br>");
document.write(typeof(degisken7) + " : " + degisken7 + "<br>");
document.write(typeof(degisken8) + " : " + degisken8 + "<br>");
document.write(typeof(degisken9) + " : " + degisken9 + "<br>");

document.write("<br><br>");
document.write("-----------------------------------------------------");
document.write("<br><br>");

//Mutlak bir şekilde tüm veri türlerini string'e dönüştürme
var deg1 = String(degisken1);
var deg2 = String(degisken2);
var deg3 = String(degisken3);
var deg4 = String(degisken4);
var deg5 = String(degisken5);
var deg6 = String(degisken6);
var deg7 = String(degisken7);
var deg8 = String(degisken8);
var deg9 = String(degisken9);

document.write(typeof(deg1) + " : " + deg1 + "<br>");
document.write(typeof(deg2) + " : " + deg2 + "<br><br>");
document.write(typeof(deg3) + " : " + deg3 + "<br>");
document.write(typeof(deg4) + " : " + deg4 + "<br><br>");
document.write(typeof(deg5) + " : " + deg5 + "<br>");
document.write(typeof(deg6) + " : " + deg6 + "<br>");
document.write(typeof(deg7) + " : " + deg7 + "<br>");
document.write(typeof(deg8) + " : " + deg8 + "<br>");
document.write(typeof(deg9) + " : " + deg9 + "<br>");