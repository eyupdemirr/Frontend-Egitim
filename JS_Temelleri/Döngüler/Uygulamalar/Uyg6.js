//İki Değer Arası Sayıların Toplamı
var x,y,toplam=0;
//1. Sayı
x=Number(prompt("X= "));
//2. Sayı
y=Number(prompt("Y= "));

//While Döngüsü
while (x<=y) {
    toplam=toplam+x;
    x++;
}
//Çıktı
document.write("While Toplam= " + toplam);

document.write("<br>");

//For Döngüsü
for (; x<=y; x++) {
    toplam=toplam+x;
}
document.write("For Toplam= " + toplam);