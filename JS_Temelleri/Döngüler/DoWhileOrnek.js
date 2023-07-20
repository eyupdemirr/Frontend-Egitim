var s=0, toplam=0;
do {
    document.write("Döngü İçindeki Sayaç= " + s + "<br>");
    toplam=toplam+s;
    document.write("Döngü İçindeki Toplam= " + toplam + "<br>");
    s++;
} while (s<=5);

document.write("toplam= " + toplam);