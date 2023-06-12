// startsWith Metodu;
// Kendisine parametre olarak verilen değerler doğrultusunda değişken içeriğini başlangıç değerini kontrol ederek Boolean(Mantıksal) veri türünde sonucu geriye döndürür.

var deger1 = "JavaScript Eğitim Seti";
document.write(deger1);
document.write("<br>");

//İçerik .. ile başlıyormu?
//Başlangıç değerini harf olarak aratabiliriz
var sonuc1 = deger1.startsWith('J');
document.write(sonuc1);
document.write("<br>");

//Başlangıç değerini kelime olarak aratabiliriz
var sonuc1 = deger1.startsWith('JavaScript');
document.write(sonuc1);
document.write("<br>");

//Büyük Küçük harfe duyarlıdır.
var sonuc1 = deger1.startsWith('javascript');
document.write(sonuc1);
document.write("<br>");
