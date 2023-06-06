/* 
Değişkenlerin isimlendirme Kuralları:
1. Değişken isimleri her zaman anlamlı olarak kullanılmalıdır
2. Değişken isimleri harfler ile başlayacaktır. (Türkçe karakter kullanılmaz!)
3. Değişken İsimleri _(alt çizgi) ile başlayabilir.
4. Değişken isimleri $ işareti ile başlayabilir.
5. Değişken isimleri hiçbir zaman bir rakam ile başlayamaz. 
Fakat rakamlar değişken isimlerinde ilk karakterden sonra kullanılabilir.
6. Değişken isimleri BÜYÜK harf/küçük harf duyarlıdır.
7. Aynı Değişken isimleri kullanılacaksa değişkenin değeri her zaman son yazılan değişkenin depoladığı veri olacaktır.
8. Değişken isimleri JavaScript tarafından rezerve edilmiş kelimelerden olamaz!
9. Aynı Değişken adı değişken ifadelerinde kullanılamaz.

*/

//Kural-1 ve -2
var isim = "isim ";
var soyisim = "soyisim ";
var ders = "ders ";
var konu = "konu ";
document.writeln("<br><br>");
document.writeln(isim + soyisim + ders + konu);

//Kural-3 ve -4
var _degisken = "alt çizgi ile değişken tanımlama ";
var $degisken = "dolar işareti ile değişken tanımlama ";
document.writeln("<br><br>");
document.writeln(_degisken + " " + $degisken);

//Kural-5
/* var 4 = ("Değişken isimleri rakamlardan başlayamaz!"); */
var a4 = "Fakat rakamlar ilk karakterden sonra kullanılabilir.";
//eğer ilk karakter rakamdan başlarsa ve bu yazdırılmak isterse kod hata vereceği için çalışmayacak ve ekrana hiçbir çıktı gelmeyecektir.
//console kısmına gittiğiniz zaman ilgili hatayı görüntüleyebilirsiniz
document.writeln("<br><br>");
document.writeln(4 + a4);

//Kural-6
var BUYUK = "DEĞİŞKEN İSİMLERİ BÜYÜK/KÜÇÜK HARFE DUYARLIDIR ";
var buyuk = "Değişken isimleri büyük/küçük harfe duyarlıdır ";
document.writeln("<br><br>");
document.writeln(BUYUK + buyuk);

//Kural-7
var degisken = "ilk değer ";
var degisken = "ikinci değer ";
var degisken = "üçüncü değer ";
document.writeln(" <br> ");
document.writeln(degisken); //Çıktı son tanımlanan değer olacaktır.
//Değişkenlerin değerleri ekrana çağrıldığı zaman alttan yukarı doğru tanımlanan değerlere bakar ve
//Tanımalanan ilk değeri ekrana çıkartır.

//Kural-8
//Revize edilen kelimeler grafiği eğitim slaytlarında paylaşılmıştır.

/*
var if = ("revize kelimeler değişken ismi olarak kullanılamaz!");
var var = ("revize kelimeler değişken ismi olarak kullanılamaz!");
var break = ("revize kelimeler değişken ismi olarak kullanılamaz!");
*/

//Kural-9
/*
var deg = "Aynı değişken adı değişken ifadelerinde kullanılamaz.";
let deg = "Aynı değişken adı değişken ifadelerinde kullanılamaz.";
const deg = "Aynı değişken adı değişken ifadelerinde kullanılamaz.";
document.writeln(deg);
*/
