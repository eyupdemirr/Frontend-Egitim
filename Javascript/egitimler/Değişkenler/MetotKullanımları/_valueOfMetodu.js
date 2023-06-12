// valueOf() Metodu;
// Üzerinde çalışılan değişken değerinin tam anlamıyla aktarımını sağlayarak yeni bir içerik oluşturur.
// Oluşturduğu içeriği geriye döndürür.

var deger1 = "5"; //String
var deger2 = 5; //Number

document.write(typeof(deger1) + " : " + deger1 + "<br>");
document.write(typeof(deger2) + " : " + deger2 + "<br><br>");

//Hem veri değeri, hem veri türü, hemde ilgili tüm değişiklikler aktarılır.
var deg1 = deger1.valueOf();
document.write(typeof(deg1) + " : " + deg1 + "<br>");
var deg2 = deger2.valueOf();
document.write(typeof(deg2) + " : " + deg2 + "<br>");

//Bir değişkenin içeriğini başka bir değişkene tam anlamıyla aktarmak için valurOf() metodunu kullanırız