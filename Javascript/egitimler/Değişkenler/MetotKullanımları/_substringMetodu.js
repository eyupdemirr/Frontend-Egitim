//substring() Metodu
//Kendisine verilecek olan parametrelerle tanımlanmış değişken içeriği aralığında bulunan değerleri kopyalayarak yeni bir içerik oluşturur ve geriye döndürür.

var icerik = "Javascript En çok kullanılan yazılım dilidir."
document.write(icerik + "<br><br>");

var sonuc = icerik.substring();
document.write(sonuc + "<br>");

var sonuc = icerik.substring(11, 29);
document.write(sonuc + "<br>");

//substring metodunun slice metodundan farkı;
//* Başlangıç parametresi hiçbir zaman bitiş parametresinden daha büyük olamaz!
//* Bu tip bir kullanım yapılırsa JS substring metodu kullanıldığı için yine küçük, büyük şeklinde kullanıma dönüştürerek düzeltecektir.

var sonuc = icerik.substring(29, 11);
document.write(sonuc + "<br>");
