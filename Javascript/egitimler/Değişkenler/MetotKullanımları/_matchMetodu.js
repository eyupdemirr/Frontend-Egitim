// match() Metodu;
// Kendisine parametre olarak verilen değer doğrultusunda değişken içeriğini kontrol eder ve eşleşen değer varsa içeriğin eşleşen kısmından yeni bir içerik oluşturur ve geriye döndürür.
//Düzenli ifade alabilir.

var deger1 = "Javascript Eğitim Seti Başlangıçtan İleri Düzeye Javascript";
document.write(deger1);
document.write("<br>");

var sonuc1 = deger1.match('Javascript');
document.write(sonuc1);
document.write("<br>");

//Büyük küçük harfe duyarlıdır.
var sonuc1 = deger1.match('egitim');
document.write(sonuc1);
document.write("<br>");

//İçerik içerisinde olmayan değerler durumunda NULL döndürecektir.
var sonuc1 = deger1.match('PHP');
document.write(sonuc1);
document.write("<br><br>");

// Düzenli ifade elemanları
// g = içeriğin tamamı üzerinde çalışmasını sağlar
var sonuc1 = deger1.match(/Javascript/g);
document.write(sonuc1);
document.write("<br>");

// i = içeriğin büyük küçük harf duyarlılığı olmamasını sağlar.
var sonuc1 = deger1.match(/javascript/i);
document.write(sonuc1);
document.write("<br>");

// İfadeleri Birlikte kullanma
var sonuc1 = deger1.match(/javascript/gi);
document.write(sonuc1);
document.write("<br>");