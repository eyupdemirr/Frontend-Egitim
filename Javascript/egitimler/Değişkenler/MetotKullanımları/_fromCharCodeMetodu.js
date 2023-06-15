// fromCharCode() Metodu
// Unicode'ları bizim okuyabileceğimiz şekilde çeviriyor.
// Kendisine parametre olarak verilen Unicode(Evrensel Kod) değerini karakter olarak geriye döndürür
// Çoklu değer alabilir.

//1980 = 49 57 56 48
var deger1 = String.fromCharCode(49, 57, 56, 48);
document.write(deger1 + "<br>")

//Javascript =  74 97 118 97 115 99 114 105 112 116
var deger1 = String.fromCharCode(74, 97, 118, 97, 115, 99, 114, 105, 112, 116);
document.write(deger1 + "<br>")

//JS'de unicode değerleri normal karakterlere çeviren metod fromCharCode metodudur.