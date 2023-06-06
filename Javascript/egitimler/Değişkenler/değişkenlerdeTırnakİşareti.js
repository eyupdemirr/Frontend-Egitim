//Değişken Tırnak İşaretleri ya '' (Tek Tırnak) yada "" (Çift Tırnak) ile başlar ve başladığı şekilde biter.
var isim1 = "ad";
document.write(isim1);

var isim2 = "ad";
document.write(isim2);

/*Başladığı gibi bitirilmez ise kodda hata oluşturur ve kod çalışmaz.
var isim3 = "ad';
document.write(isim3);

//Başladığı gibi bitirilmez ise kodda hata oluşturur ve kod çalışmaz.
var isim4 = 'ad";
document.write(isim4);
*/

//Tırnaklar içerisinde aynı ifadede tekrar tırnak kullanımı gerekirse \ karakteri kullanılmalıdır.
var deger =
  " Türkiye'de kullanılan kodlama dilleri arasındaki en meşhuru Javascript'tir. ";

// var deger = ' Türkiye'de kullanılan kodlama dilleri arasındaki en meşhuru Javascript'tir. ';
// var deger = " Türkiye"de kullanılan kodlama dilleri arasındaki en meşhuru Javascript"tir. ";

var deger =
  " Türkiye'de kullanılan kodlama dilleri arasındaki en meşhuru Javascript'tir. ";

//Değişken tanımlamalarında rakamsal bir tanımalama yapacaksak tırnak içinde olsada olmasada ekrana çıktısını verebiliriz
//Fakat yapısal olarak verilen iki çıktı farklı olacaktır

//Tırnak içinde tanımlanan rakam string veri türünde tanımlanacak ve ekrana bu şekilde yazdırılacaktır.
var rakam = "5";
document.write(rakam);

//Tırnak olmadan tanımlanan rakam number veri türünde tanımlanacak ve ekrana bu şekilde yazdırılacaktır.
var rakam2 = 5;
document.write(rakam2);
