// espace() Metodu
// Değişken içerisindeki metnin özel karakterlerini Unicode kodlamasına dönüştürerek geriye döndürür.
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

var deger1 = "Başlangıçtan ileri düzeye Javascript Eğitim Seti";
document.write(deger1 + "<br>");

var sonuc1 = escape(deger1);
document.write(sonuc1 + "<br>");

document.write("<br>");

var deger2 = "- ; : / ? @ & = + $ , # - _ . | ! ~ * ' ( )";
document.write(deger2 + "<br>");

var sonuc2 = escape(deger2);
document.write(sonuc2 + "<br>");

// Şifreleme işlemleri, link düzenleme, apiler ile veri alışverişlerindeki verilerin tanımsız olma durumlarında kullanılır.