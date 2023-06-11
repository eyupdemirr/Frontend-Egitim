//trim() Metodu Kullanımı
//Değişken içeriğindeki varsa başında ve sonundaki tüm boşlukları temizleyerek değeri geriye döndürür.

//İlk alert kutusunda Hatalı yazım çıktısı verilir. 
var ornek = "       Javascript      ";
var icerik = "Python to Piton";
var sonuc = ornek + " " + icerik;
document.write(ornek + " " + icerik + "<br>");
alert(sonuc)

//2. alert kutusunda ise trim() ile düzeltilmiş doğru yazımlı çıktı verilir.
var islem = ornek.trim();
var uyari = islem + " " + icerik;
document.write(islem + " " + icerik + "<br>")
alert(uyari);