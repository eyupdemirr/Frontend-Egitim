// Sayıların Sıralanması
// - Bir Dizi Tanımlayın
// - Eleman sayısını ve elemanları kullanıcıdan alın
// - Dizi Metotlarını kullanarak elemanları alfabetik olarak sıralayarak ekrana yazdırın
// - Dizi sıralamasını tersine çevirerek tekrar ekrana yazdırın

//Diziyi Tanımla
var dizi = new Array();

//Eleman Sayısını Al
var n = Number(prompt("Eleman Sayısı= "));

//Elemanları al
for (var i=0; i<n; i++) {
    dizi[i] = Number(prompt((i+1) + " Elemanlar= "));
}

//Düz sıra ile yazdır
dizi.sort();
document.write(dizi + ' ' + "<br>");

//Ters sıra ile yazdır
dizi.reverse();
document.write(dizi + ' ' + "<br>");