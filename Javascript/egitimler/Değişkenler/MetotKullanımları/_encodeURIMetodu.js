// encodeURL() Metodu
// Değişken içerisindeki metnin özel karakterleri UTF-8 kodlamasına dönüştürerek oluşturduğu değeri geriye döndürür.
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

//Doğru Formatlı bir link
var deger1 = "https://www.extraegitim.com?egitimsetiadi=Javascript&Egitmen=VolkanAlakent";
//Yanlış Formatlı bir link
var deger2 = "https://www.extraegitim.com?egitimsetiadi=Javascript Eğitmen=Volkan Alakent";
document.write(deger1);
document.write("<br><br>");


var sonuc1 = encodeURI(deger1);
document.write(sonuc1);

document.write("<br><br>");

//özel karakterleri UTF-8 kodlamasına dönüştürerek uygun bir link oluşturacaktır.
var sonuc2 = encodeURI(deger2);
document.write(sonuc2);