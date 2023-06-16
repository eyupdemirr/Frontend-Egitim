// decodeURIComponent() Metodu
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

//Çözümlü kod
var deger1 = "https://www.extraegitim.com?egitimsetiadi=Javascript&Egitmen=VolkanAlakent";
//Dağınık kod
var deger2 = "https%3A%2F%2Fwww.extraegitim.com%3Fegitimsetiadi%3DJavascript%26Egitmen%3DVolkanAlakent";
document.write(deger1 + "<br>")
document.write(deger2 + "<br>")

document.write("<br>")

//Dağıtılmış Kod
var sonuc1 = encodeURIComponent(deger2);
document.write(sonuc1 + "<br>")

//Çözümlenmiş Kod
var sonuc2 = decodeURIComponent(deger2);
document.write(sonuc2 + "<br>")