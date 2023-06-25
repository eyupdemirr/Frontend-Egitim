//Aritmetik Operatörler (+,-,*,/,%)
var Toplama;
var Cikarma; 
var Carpma;
var Bolme;
var Mod;
var x, y;

x = Number(prompt("Birinci Sayiyi Giriniz= "));
y = Number(prompt("İkinci Sayiyi Giriniz= "));

Toplama = x + y;
Cikarma = x - y;
Carpma = x * y;
Bolme = x / y;
Mod = x % y;

document.write("Toplama= " + Toplama + "<br>");
document.write("Cikarma= " + Cikarma + "<br>");
document.write("Carpma= " + Carpma + "<br>");
document.write("Bolme= " + Bolme + "<br>");
document.write("Mod= " + Mod + "<br>");