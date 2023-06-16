// fontcolor() Metodu
// Kendisine parametre olarak verilen değer doğrultusunda değişken içeriğini renklendirerek değeri geriye döndürür.

var deger1 = "başlangıçtan ileri seviyeye javascript eğitimi";
document.write(deger1 + "<br>")

//Varsayılan renk green(yeşildir).
var sonuc1 = deger1.fontcolor();
document.write(sonuc1 + "<br>")

var sonuc1 = deger1.fontcolor('red');
document.write(sonuc1 + "<br>")

var sonuc1 = deger1.fontcolor('orange');
document.write(sonuc1 + "<br>")

var sonuc1 = deger1.fontcolor('blue');
document.write(sonuc1 + "<br>")

var sonuc1 = deger1.fontcolor('#FF1453');
document.write(sonuc1 + "<br>")