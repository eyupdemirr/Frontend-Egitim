// fontsize() Metodu
// Kendisine parametre olarak verilen değer doğrultusunda değişken içeriğinin font boyutunu değiştirerek değeri geriye döndürür.

var deger1 = "başlangıçtan ileri seviyeye javascript eğitimi";
document.write(deger1 + "<br>")

//Varsayılan boyut normal ekran boyutu ile aynıdır.
var sonuc1 = deger1.fontsize();
document.write(sonuc1 + "<br>")

var sonuc1 = deger1.fontsize(1);
document.write(sonuc1 + "<br>")

var sonuc1 = deger1.fontsize(2);
document.write(sonuc1 + "<br>")

var sonuc1 = deger1.fontsize(3);
document.write(sonuc1 + "<br>")

var sonuc1 = deger1.fontsize(4);
document.write(sonuc1 + "<br>")

var sonuc1 = deger1.fontsize(5);
document.write(sonuc1 + "<br>")

var sonuc1 = deger1.fontsize(6);
document.write(sonuc1 + "<br>")

var sonuc1 = deger1.fontsize(7);
document.write(sonuc1 + "<br>")

//Fontsize metodunda maksimum değer 7'dir. 7 üzeri değerler bu metotta 7 ile aynı yazılır.
var sonuc1 = deger1.fontsize(8);
document.write(sonuc1 + "<br>")