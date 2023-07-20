//0'dan n'ye kadar olan sayıların toplamı
toplam = 0;
n = Number(prompt("Lütfen Bir Sayı Giriniz= "));
for (let x=0; x<n; x=x+2) {
    document.write(x + "<br>");
    toplam=toplam+x;
}

document.write("<br>");
document.write("Sayiların Toplamı=" + toplam);