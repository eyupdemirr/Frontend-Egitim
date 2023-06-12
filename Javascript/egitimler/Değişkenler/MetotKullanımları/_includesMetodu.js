// includes() Metodu
// Kendisine parametre olarak verilen değer doğrultusunda değişke içeriğini kontrol ederek Boolean (Mantıksal) veri türünde sonucu geriye döndürür.

var deger1 = "JavaScript eğitim seti";
document.write(deger1);
document.write("<br>");

// Mantıksal değer arama sonucunda iki ifade döndürebilir. 
// Mantıksal ifade var ise = true
// Mantıksal ifade yok ise = false
var sonuc1 = deger1.includes('seti');
document.write(sonuc1);
document.write("<br>");

// Mantıksal ifade yok! false
var sonuc1 = deger1.includes('merhaba');
document.write(sonuc1);
document.write("<br>");

// includes() Metodu Büyük Küçük harf duyarlıdır.
var sonuc1 = deger1.includes('Seti');
document.write(sonuc1);
document.write("<br>");


