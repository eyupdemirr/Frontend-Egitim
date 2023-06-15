// split() Metodu
// Kendisine parametre olarak tanımlanmış değer doğrultusunda değişken içeriğini bölümleyerek yeni bir dizi oluşturur ve geriye döndürür.

var deger1 = "Başlangıçtan İleri Seviyeye Javascript Eğitim Seti";
document.write(typeof(deger1) + "<br>");
document.write(deger1 + "<br />");
document.write(deger1[2]);
document.write("<br><br>");

//Her karakterden ayırarak dizi oluştur demektir.
var sonuc1 = deger1.split('');
document.write(typeof(sonuc1) + "<br>");
document.write(sonuc1);
document.write("<br><br>");

//Her boşluktan ayırarak dizi oluştur demektir.
var sonuc1 = deger1.split(' ');
document.write(typeof(sonuc1) + "<br>");
document.write(sonuc1 + "<br>");
//Metot sayesinde her kelime birer elemana dönüştü 
//bu sayede dizinin 2. elemanı seviyeye kelimesine dönüşmüş oldu.
document.write(sonuc1[2]);
document.write("<br><br>");

//Baştan 3 tane boşluğu ayırarak dizi oluştur demektir.
var sonuc1 = deger1.split(' ',3);
document.write(typeof(sonuc1) + "<br>");
document.write(sonuc1);
document.write("<br><br>");

//a'lardan ayırarak bölümleme işlemi yapar yani dizi oluşturur.
var sonuc1 = deger1.split('a');
document.write(typeof(sonuc1) + "<br>");
document.write(sonuc1);
document.write("<br><br>");

