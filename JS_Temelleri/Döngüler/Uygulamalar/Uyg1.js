var x, y=0;
x = Number(prompt("Lütfen Bir Sayı Giriniz= "));

document.write("For" + "<br>");

// For Döngüsü
for (let y=0; y<=x; y++) {
    document.write(y + " Merhaba" + "<br>");
}

//y Değeri sıfırlanır
y=0;

document.write("<br>");
document.write("While" + "<br>");

// While Döngüsü
while (y<=x) {
    document.write(y + " Merhaba" + "<br>");
    y++;
}

//y Değeri sıfırlanır
y=0;

document.write("<br>");
document.write("Do While" + "<br>");

// Do While Döngüsü
do {
    document.write(y + " Merhaba" + "<br>");
    y++;
} while (y<=x);


