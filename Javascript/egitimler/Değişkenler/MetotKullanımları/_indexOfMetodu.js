// indexOf Metodu;
// Değişken içerisinde parametrik olarak verilen değeri arar ve ilk eşleşmeyi sağlayan değişken içeriğinden index değerini geriye döndürür.

//Bu içerikte bir değer belirterek bir arama yapacağız. 
//Bu sayede ilk eşleşmeyi yapan içerik karakter sıra numarasını öğreneceğiz.
var metin = "JavaScript Eğitim Seti";
document.write(metin);
document.write("<br><br>");

var sonuc = metin.indexOf('E');
document.write(sonuc);

document.write("<br>");
var sonuc2 = metin.indexOf('Seti');
document.write(sonuc2);

document.write("<br>");
//Eğer arama yapılan harf yada kelime içeriğin içinde yoksa -1 değerini döndürür.
var sonuc3 = metin.indexOf('f');
document.write(sonuc3);

//iki parametreli kullanım
//* Sıra sayma işlemini içeriğin en başından itibaren yapıyor. 
//* İkinci parametre nereden başlayacağını belirtiyor
//* İlk parametre aranılan içeriği belirtiyor
document.write("<br>");
var sonuc4 = metin.indexOf('ğ', 9);


// Değişkenler üzerinde çalışıken Herhangi bir karakteri veya kelimeyi aramak istiyorsak ve sonucunun karakter sıra sayısının döndürülmesini istiyorsak indexOf Metodunu Kullanıyoruz.