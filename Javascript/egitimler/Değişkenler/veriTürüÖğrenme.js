//Değişkenlerin Veri Türlerini Öğrenme

//typeof = Değişkenin veri türünü geri döndürür.

var yas = 35; //number
var tanimsiz; //undefined
var bos = ""; //undefined
var isim = "Ahmet"; //string
var mantiksal = true; //boolean
var nesneler = new Object(); //object
var grup = ["Ahmet", "Abdullah", "Ali"]; //array

//Ekrana direk veri türünün çıktısını verebiliriz.
document.write(typeof(isim));
document.write("<br>");
document.write(typeof(yas));
document.write("<br>");
document.write(typeof(mantiksal));
document.write("<br>");
document.write(typeof(nesneler));
document.write("<br>");
document.write(typeof(grup));
document.write("<br>");
document.write(typeof(tanimsiz));
document.write("<br>");
document.write(typeof(bos));

//Değişkenin veri türünü başka bir değişkene depolama
var depo = typeof isim;
document.write("<br>");
document.write("<br>");
document.write(depo);
document.write("<br>");
document.write("<br>");

//Depolar
document.write("---------------------------------------<br>")
var depo1 = isim        + " : " + typeof(isim);
document.write(depo1    + "<br /><br />");

var depo2 = yas         + " : " + typeof(yas);
document.write(depo2    + "<br /><br />");

var depo3 = mantiksal   + " : " + typeof(mantiksal);
document.write(depo3    + "<br /><br />");

var depo4 = grup        + " : " + typeof(grup);
document.write(depo4    + "<br /><br />");

var depo5 = nesneler    + " : " + typeof(nesneler);
document.write(depo5    + "<br /><br />");

var depo6 = tanimsiz    + " : " + typeof(tanimsiz);
document.write(depo6    + "<br /><br />");

var depo7 = bos         + " : " + typeof(bos);
document.write(depo7    + "<br /><br />");