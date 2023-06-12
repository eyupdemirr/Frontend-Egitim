// search() Metodu;
// Kendisine parametre olarak verilen değer doğrultusunda değişken içeriğini arayarak ilk eşleşmeyi sağlayan değişken içeriğinin index değerini geriye döndürür.
// Düzenli ifade alabilir
// Büyük Küçük Harf duyarlıdır.

var deger1 = "Javascript dünya üzerinde en yaygın olarak kullanılan bir script dilidir.";
document.write(deger1);
document.write("<br>");

// bir kelimesinin başlangıç sırasayısı 54
var sonuc1 = deger1.search('bir');
document.write(sonuc1);
document.write("<br>");

// aranılan içerik değişken içeriğinde yoksa -1 döndürür
var sonuc2 = deger1.search('Bir');
document.write(sonuc2);
document.write("<br>");

// Düzenli kullanılması gereken ifade i harfidir. Eğer bu harf kullanılırsa içeriğin büyük veya küçük harf olmasına bakmaz.
// Düzenli ifade kullanım şekli /Bir/i şeklindedir
var sonuc3 = deger1.search(/Bir/i);
document.write(sonuc3);
document.write("<br>");