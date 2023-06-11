//slice() Metodu = Kendisine verilecek olan parametreler ile tanımlanmış değişken içeriği aralığında bulunan değerleri kopyalayarak yeni bir içerik oluşturur
//Ve oluşturduğu değeri geriye döndürür.

//1.Parametre = Başlangıç
//2.Parametre = Bitiş

var icerik = "Bu bir içerik metnidir.";
document.write(icerik + "<br>");

//Herhangi bir parametre girilmediği için tüm içeriği kopyalar.
var sonuc1 = icerik.slice();
document.write("<br>" + sonuc1);

//Girilen parametreden sonraki tüm içeriği kopyalar.
var sonuc2 = icerik.slice(7);
document.write("<br>" + sonuc2);

//Çift parametre kullanımlarında ilk parametre başlangıcı son parametre bitişi ifade eder. 
//Başlangıç parametresinin bir sonrasından başlayarak bitiş parametresine kadar olan içeriği kopyalar.
var sonuc3 = icerik.slice(14, 23);
document.write("<br>" + sonuc3);