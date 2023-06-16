// encodeURIComponent() Metodu
// Değişken içerisindeki metnin özel karakterlerini UTF-8 kodlamasına dönüştürerek geriye döndürür.
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

var deger1 = "https://www.extraegitim.com?egitimsetiadi=Javascript&Egitmen=VolkanAlakent";
document.write(deger1 + "<br>");

document.write("<br>")

var sonuc1 = encodeURIComponent(deger1);
document.write(sonuc1 + "<br>");

// Bu metot apilerde, web servicelerde, link ve metinlerin UTF-8'e dönüştürülmesi gereken heryerde kullanılabilir.