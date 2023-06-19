//if        = Eğer
//else if   = Değilse Eğer
//else      = Değilse

var degisken1 = 5;
// degisken1 degisken2 ile aynı olursa hata mesajını döndürür. Çünkü koşulların hiçbirisine uygun düşmüyor.
// var degisken1 = 10;
var degisken2 = 10;

/*
if (koşul veya koşullar) {
    ifade veya ifadeler
}
else if (koşul veya koşullar) {
    ifade veya ifadeler
}
else {
    ifade veya ifadeler
}
*/

if (degisken1 > degisken2) {
    document.write(degisken1 + " Büyüktür " + degisken2 + "'den");
}
else if (degisken1 < degisken2) {
    document.write(degisken1 + " Küçüktür " + degisken2 + "'den");
}
else {
    alert("Hata");
}
// if birkez kullanılır
// else if birden fazla kez kullanılabilir
// else birkez kullanılır