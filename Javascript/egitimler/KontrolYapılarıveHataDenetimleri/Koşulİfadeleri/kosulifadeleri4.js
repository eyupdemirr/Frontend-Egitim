var saat = 8;
var verituru = typeof(saat);

if (saat>=0 && saat<=5) {
    document.write("İyi Geceler")
} 
else if (saat>=5 && saat<=9) {
    document.write("Günaydın")
}
else if (saat>=9 && saat<=16) {
    document.write("İyi Günler")
}
else if (saat>=16 && saat<=23) {
    document.write("İyi Akşamlar")
}
else if (saat>=23) {
    document.write("Değer Çok Büyük")
}
else if (verituru=="string") {
    document.write("Değer Rakamsal Olmalıdır")
}
else {
    document.write("Hata")
}