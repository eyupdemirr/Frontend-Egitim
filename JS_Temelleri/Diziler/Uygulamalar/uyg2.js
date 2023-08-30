// - Bir dizi tanımlayın
// - Dizi elemanlarını kullanıcıdan alın
// - Dizinin elemanlarını ekrana yazdırın

var dizi = new Array();

for (var i=0; i<5; i++) {
    dizi[i] = Number(prompt("Eleman= "));
}

for (i=0; i<5; i++) {
    document.write('Eleman ' + i + ' = ' + dizi[i] + "<br>");
}