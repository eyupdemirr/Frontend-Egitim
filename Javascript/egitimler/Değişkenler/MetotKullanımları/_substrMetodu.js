//* substr() Metodu;
//* Kendisine verilecek parametrelerle tanımlanmış değişken içeriği aralığında bulunan değerleri kopyalayarak yeni bir içerik oluşturur ve geriye döndürür.

var icerik = "Bu bir içerik metnidir.";
document.write(icerik + "<br><br>");

//1.Parametre = Başlangıç
//2.Parametre = Bitiş

var icerik1 = icerik.substr();
document.write(icerik1 + "<br>");

var icerik2 = icerik.substr(7);
document.write(icerik2 + "<br>");

//İlk parametre kopyalamaya başlayacağı karakter sayısını ifade ederken 
//ikinci parametre başlangıçtan sonra kaç tane karakterin kopyalanacağını belirtir.
//Bu örnekte 7. karakterden kopyalamaya başlayarak sonraki 6 karakteri kopyalamıştır. 
var icerik3 = icerik.substr(7, 6);
document.write(icerik3 + "<br><br>");

//substr negatif değerlerde alabilirler. Yani sondan sayamya başlayarak kopyalama yapılabilir.
//ilk parametre sondan saymaya başlayarak verilmelidir.
var icerik4 = icerik.substr(-10);
document.write(icerik4 + "<br>");

var icerik5 = icerik.substr(-10, 6);
document.write(icerik5 + "<br>");
