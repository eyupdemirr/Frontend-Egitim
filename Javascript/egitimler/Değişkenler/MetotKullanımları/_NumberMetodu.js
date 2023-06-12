// Number() Metodu;
// Değişken içeriğini mutlak olarak sayısal veri türüne dönüştürür
// Oluşturduğu değeri geriye döndürür.

var deger1 = true;
var deger2 = false;
var deger3 = "12";
var deger4 = "12.45";
var deger5 = new Date();

document.write(typeof(deger1) + " : " + deger1 + "<br>"); //Boolean
document.write(typeof(deger2) + " : " + deger2 + "<br>"); //Boolean
document.write(typeof(deger3) + " : " + deger3 + "<br>"); //String
document.write(typeof(deger4) + " : " + deger4 + "<br>"); //String
document.write(typeof(deger5) + " : " + deger5 + "<br>"); //Object

document.write("<br>");
document.write("-----------------------------------------");
document.write("<br><br>");

//Veri türü Number'a dönüştüğü zaman içeriğin tamamı rakamsal içeriğe dönüşecektir herhangi bir harf göstermez.
var deg1 = Number(deger1);
var deg2 = Number(deger2);
var deg3 = Number(deger3);
var deg4 = Number(deger4);
var deg5 = Number(deger5);

document.write(typeof(deg1) + " : " + deg1 + "<br>"); //Number
document.write(typeof(deg2) + " : " + deg2 + "<br>"); //Number
document.write(typeof(deg3) + " : " + deg3 + "<br>"); //Number
document.write(typeof(deg4) + " : " + deg4 + "<br>"); //Number
document.write(typeof(deg5) + " : " + deg5 + "<br>"); //Number

