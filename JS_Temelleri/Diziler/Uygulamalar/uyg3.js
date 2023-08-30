// N adet sayının ortalaması

var dizi = new Array();
var toplam=0; ortalama=0;

// Eleman Sayısını Belirle
var n = Number(prompt("Eleman Sayısı= "));

// Elemanları Belirle
for (i=0; i<n; i++) {
    dizi[i] = Number(prompt(i + " Eleman= "));
}

// Elemanların Toplamını Bul
for (i=0; i<n; i++) {
    toplam = toplam + dizi[i];
}

// Ortalama Hesabını Yaz
ortalama = toplam / n;

// Ortalamayı Yaz
document.write('Ortalama= ' + ortalama);