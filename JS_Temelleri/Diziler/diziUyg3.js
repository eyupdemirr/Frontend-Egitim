// 5 Sayılı bir dizi oluşturup dizi elemanlarının ortalamasını hesapla

var dizi = new Array(5);
var ort = 0;
var toplam = 0;

// Dizi Elemanlarını Belirleme
for ( var i=0; i<5; i++){
    dizi[i] = Number(prompt("Sayi= "));
}
// Dizi Elemanlarını Toplama
for ( var i=0; i<5; i++){
    toplam=toplam+dizi[i];
}
// Dizinin Ortalamasını Hesaplama
ort = toplam / i;

// Sonucu Ekrana Yazdırma
document.write("Dizinin Ortalaması= " + ort);