// localeCompare() Metodu
// Üzerinde çalışılan değişkene parametrik olarak verilen diğer bir değişken içeriğinin tarayıcı diline göre karşılaştırarak sonucu geriye döndürür.
//Unicode (Evrensel Kod) Olarak çalışır.

//Sonuç Değerleri
//-1 = 1. Değişken içeriği, 2. değişken içeriğinden önce geliyorsa 
// 0 = 1. Değişken içeriği, 2. değişken içeriğine eşitse
// 1 = 1. değişken içeriği, 2. değişken içeriğinden sonra geliyorsa 

var deger1 = "abc";
var deger2 = "abd";
document.write(deger1 + "<br><br>")
document.write(deger2 + "<br><br>")

//üzerinde çalışılan içerik karşılaştırılan içerikten önce geldiği için -1 döndürecektir.
var sonuc1 = deger1.localeCompare(deger2);
document.write(sonuc1 + "<br><br>")

//üzerinde çalışılan içerik karşılaştırılan içerikten sonra geldiği için 1 döndürecektir.
var sonuc1 = deger2.localeCompare(deger1);
document.write(sonuc1 + "<br><br>")

//üzerinde çalışılan içerik karşılaştırılan içerik ile eşit geldiği için 0 döndürecektir.
var sonuc1 = deger1.localeCompare(deger1);
document.write(sonuc1 + "<br><br>")
