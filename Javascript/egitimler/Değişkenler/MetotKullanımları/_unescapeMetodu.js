// unescape() Metodu
// Değişken içerisindeki metnin özel karakterlerin Unicode kodlamasına dönüştürülmüş karakterlerini çözerek değeri geriye döndürür.
/*
Kodlamaya dahil edilmeyen karakterler;
- rakamsal değerler 
    - (0 1 2 3 4 5 6 7 8 9)
- alfabetik değerler 
    - (abcdefghijklmnoprstuvwxyz)
    - (ABCDEFGHIJKLMNOPRSTUVWXYZ)
- özel karakterler
    - ; : / ? @ & = + $ , # - _ . | ! ~ * ' ( )
*/

//Özel karakterlerin Unicode Kodlamasına dönüştürme
var deger1 = "Başlangıçtan ileri düzeye Javascript eğitimi";
document.write(deger1 + "<br>")

var sonuc1 = escape(deger1);
document.write(sonuc1 + "<br>")

document.write("<br>")

//Unicode Kodlamasını Metine dönüştürme
var deger2 = "Ba%u015Flang%u0131%E7tan%20ileri%20d%FCzeye%20Javascript%20e%u011Fitimi";
document.write(deger2 + "<br>")

var sonuc2 = unescape(deger2);
document.write(sonuc2 + "<br>")

//Şifreleme işlemlerinde rahatlıkla kullanılabilir
//URL işlemlerinde, bot yazılımlarında kullanılabilir.