//Tek Parametre Değer Döndüren Fonksiyon
function kup(x) {
    return x*x*x;
}

document.write(kup(3) + "<br>");
document.write(kup(5) + "<br>");
document.write(kup(10) + "<br>");

document.write("<br>");

//Küpü alınacak sayıyı kullanıcıdanda alabiliriz.
var sayi = Number(prompt("Sayi= "));
document.write(kup(sayi));