var saat = 8;

// && = ve 
// bir koşul içinde birden fazla ifade var ise ve ve kullanıldıysa ikisininde true dönmesi gerekir. 
// biri true iken diğeri false olursa else(Değilse) kısmı çalışır

if (saat>=0 && saat<=4) {
    document.write("İyi Akşamlar")
} 
else {
    document.write("Hata")
}

document.write("<br>")

// || = veya
// bir koşul içinde birden fazla ifade varsa ve veya kullanılıyorsa ifadelerden birinin true dönmesi koşulun çalışması için yeterlidir.
if (saat>=0 || saat<=4) {
    document.write("İyi Akşamlar")
} 
else {
    document.write("Hata")
}