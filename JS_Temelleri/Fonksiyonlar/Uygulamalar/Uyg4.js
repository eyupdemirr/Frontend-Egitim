//Kare Fonksiyonu

function karesi(sayi) {
    var kare = sayi*sayi;
    return kare;
}

var sayi = Number(prompt("sayi= "));
var sonuc = karesi(sayi);

alert(sonuc);