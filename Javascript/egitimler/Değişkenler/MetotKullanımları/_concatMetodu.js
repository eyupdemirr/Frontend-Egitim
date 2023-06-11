// concat() Metodu
// Üzerinde çalışılan değişkene parametrik olarak verilen değişken veya değişkenleri dahil ederek yeni bir içerik oluşturur.
//Oluşturduğu değeri geriye döndürür.

var icerik1 = "icerik1";
var icerik2 = "icerik2";
var icerik3 = "icerik3";
var icerik4 = "icerik4";
var icerik5 = "icerik5";
document.write(icerik1 + "<br>");
document.write(icerik2 + "<br>");

//icerik1 içerisine verilen parametre olan icerik2 ile birlekştirilerek yeni bir değişken oluşturuldu.
//Parantezin içerisine bir parametre verilebildiği gibi birden fazla parametrede verilebilir.
var icerik3 = icerik1.concat(icerik2);
document.write("<br>" + icerik3)

var icerik4 = icerik1.concat(icerik2,icerik3,icerik4,icerik5);
document.write("<br><br>" + icerik4)