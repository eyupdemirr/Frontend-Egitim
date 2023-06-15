// replace() Metodu
// Kendisine verilecek olan parametreler doğrultusunda değişken içeriğini kontrol eder ve eşleşen değerlerin değişimini kontrol ederek yeni bir içerik oluşturur ve geriye döndürür.
//Düzenli ifade alabilir

var deger1 = "Dünyada en çok kullanılan script dillerinden biri PHP'dir. php, PHP bir database yönetim dili olarak kullanılabilir.";
document.write(deger1);
document.write("<br>");

//İki parametre almalıdır. 
//1. parametre değişecek olan içeriğe aittir.
//2. parametre güncellenecek olan içeriğe aittir.
var sonuc1 = deger1.replace('PHP','Javascript');
document.write(sonuc1);
document.write("<br>");

//Büyük ve küçük harfe duyarlıdır.
//birden fazla aynı içerikten varsa soldan sağa ilk gelen içeriği güncelleyecektir.
var sonuc1 = deger1.replace('php','Javascript');
document.write(sonuc1);
document.write("<br>");

//Düzenli ifade elemanları
//g = İçeriğin tamamı üzerinde çalışılmasını sağlar.
var sonuc1 = deger1.replace(/PHP/g,'Javascript');
document.write(sonuc1);
document.write("<br>");

//i = İçeriğin büyük küçük harf duyarlılığını devre dışı bırakır.
var sonuc1 = deger1.replace(/PhP/i,'Javascript');
document.write(sonuc1);
document.write("<br>");

//Aynı içerikten birden fazla var ise ilk eşleştiği içeriği değiştirecektir. 
//İçeriğin tamamını işlemek istiyorsanız iki elemanı birlikte kullanmalısınız.
var sonuc1 = deger1.replace(/PhP/gi,'Javascript');
document.write(sonuc1);
document.write("<br>");
