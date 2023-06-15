// decodeURI() Metodu
// Değişken içerisindeki metnin özel karakterlerinin UTF-8 kodlamasına dönüştürülmüş karakterlerini çözerek değeri geriye döndürür.
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

//UTF-8 kodlamasına maruz kalmış bir link
var deger1 = "https://www.extraegitim.com?e%C4%9Fitimsetiad%C4%B1=JavascriptE%C4%9Fitmen=Volkan%20Alakent";
document.write(deger1);
document.write("<br><br>");

//Çözümlenmiş hali
var sonuc1 = decodeURI(deger1);
document.write(sonuc1);
document.write("<br>");

//UTF-8'e maruz kalan bir linki çözümleyebilmek için bu metodu kullanırız.