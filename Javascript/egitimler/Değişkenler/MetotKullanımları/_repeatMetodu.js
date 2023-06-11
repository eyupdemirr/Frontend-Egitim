// repeat() Metodu;
// Kendisine parametre olarak verilen değer doğrultusunda değişken içeriği tekrar edip kopyalayarak yeni bir içerik oluşturur.
// Oluşturduğu içeriği geriye döndürür.

var icerik1 = "JavaScript ";
document.write(icerik1 + "<br>");

// JS'de bir değişkene aktarılmış içeriği yinelemek istiyorsak repeat metodu ile tekrarlayabiliyoruz.
// Metodda belirlenen parametre kadar içeriği tekrar ediyor.
var islem = icerik1.repeat(2) ;
document.write("<br>" + islem)

var islem = icerik1.repeat(20) ;
document.write("<br><br>" + islem)

var islem = icerik1.repeat(50) ;
document.write("<br><br>" + islem)