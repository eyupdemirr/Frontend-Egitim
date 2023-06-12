// endsWith() Metodu;
// Kendisine verilen parametre doğrultusunda değişken içeriğinin bitiş değerini kontrol ederek Boolean(Mantıksal) veri türünde sonucu geriye döndürür.

var deger1 = "Javascript Eğitim Seti";
document.write(deger1);
document.write("<br>");

var sonuc1 = deger1.endsWith('Seti');
document.write(sonuc1);
document.write("<br>");

//Büyük Küçük harfe duyarlıdır.
var sonuc1 = deger1.endsWith('seti');
document.write(sonuc1);
document.write("<br>");

//Değişken içeriğinin bitiş değerini kontrol eder. Ona göre true veya false döndürür.
var sonuc1 = deger1.endsWith('Javascript');
document.write(sonuc1);
document.write("<br>");