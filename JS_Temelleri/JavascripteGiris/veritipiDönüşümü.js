//1. Sayiyi kullanıcıdan al
var sayi1 = prompt("1. Sayıyı Giriniz= ");
//2. Sayiyi kullanıcıdan al
var sayi2 = prompt("2. Sayıyı Giriniz= ");

//*Kullanıcılardan alınan veriler her zaman stringdir. 
//*String ile string tipinde verinin toplamıda string olur
//*Matematiksel işlem yapabilmek için verileri number tipine dönüştürmek gerekir.

//İlk Yöntem
var sayi1 = Number(prompt("1. Sayıyı Giriniz= "));
//İkinci Yöntem
var sayi2 = Number(sayi2);

//Sayilari Topla
var toplam = sayi1 + sayi2;

//Toplamı Ekrana Yazdır
alert("Toplam= " + toplam)