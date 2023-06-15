// charCodeAt() Metodu
// Kendisine parametre olarak verilen değer doğrultusunda değişken içeriğindeki karşılığı olan karakteri bularak karakterin unicode değerini geriye döndürür.

var deger1 = "Javascript Eğitim Seti";
document.write(deger1 + "<br>")


//UTF tamamen standart değerlerdir ve tüm bilgisayarlarda aynı şekilde kullanılır.
//İlgili karakterin unicode değerini bulmamız gerekiyorsa bu metodu kullanırız.
var sonuc1 = deger1.charCodeAt(0);
var sonuc2 = deger1.charCodeAt(1);
var sonuc3 = deger1.charCodeAt(2);
var sonuc4 = deger1.charCodeAt(3);
var sonuc5 = deger1.charCodeAt(4);
document.write(sonuc1 + "<br>" + sonuc2 + "<br>" + sonuc3 + "<br>" + sonuc4 + "<br>" + sonuc5 + "<br>")