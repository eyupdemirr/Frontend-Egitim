var x = 1; // x'ı 1 ile başlatıyoruz
var y;
var toplam = 0;

y = Number(prompt("Sayi= "));

while (x <= y) {
  toplam = toplam + x;
  x++;
}
document.write("Toplam= " + toplam);
