//Değişkenler
var x, y, sayi, ortalama=0, toplam=0;

//Döngünün kaç kere döneceğini belirlemek için
y = Number(prompt("y= "));

for (let x=1; x<=y; x++) {
    //x y'ye eşitlenene kadar sayı girmemizi ister
    sayi = Number(prompt("Sayi= "));
    toplam=toplam+sayi;
}
ortalama=toplam/y;
document.write("Ortalama= " + ortalama);