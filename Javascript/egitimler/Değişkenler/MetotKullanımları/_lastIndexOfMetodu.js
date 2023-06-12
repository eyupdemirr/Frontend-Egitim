// lastIndexOf() Metodu;
// Değişken içerisinde parametrik olarak verilen değeri arar ve son eşleşmeyi sağlayan değişken içeriğinin index değerini geriye döndürür.

var deger1 = "Bu bir string tipinde metin içeriğidir.";
document.write(deger1 + "<br>");
var deger2 = "Bu bir string tipinde metin içeriğidir. Ve veri türü string tir.";

document.write("<br>");

// Aranılan harf veya kelimenin başlangıç sırasayısını döndürür.
var sonuc1 = deger1.lastIndexOf("string");
document.write(sonuc1);
document.write("<br>");

//Eğer içerik içerisinde aranılan harf veya kelime birden fazla ise son olanın sırasayısını döndürecektir.
var sonuc2 = deger2.lastIndexOf("string");
document.write(sonuc2);
document.write("<br>");

//İki Parametreli Kullanım
//2. parametre arama yapılacak son sırasayısını belirtir. Başlangıçtan verilen değere kadar arama yapar.
var sonuc3 = deger2.lastIndexOf("string", 39);
document.write(sonuc3);