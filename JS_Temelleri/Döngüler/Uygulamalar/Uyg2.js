var x, y;
y = Number(prompt("Lütfen Bir Sayı Giriniz= "));

//For Döngüsü
document.write("For Döngüsü" + "<br>");
for (let x=1; x<=y; x++) {
    document.write("Sayı= " + x + "<br>");
}

document.write("<br>");

//While Döngüsü
document.write("While Döngüsü" + "<br>");
x=1;
while (x<=y) {
    document.write("Sayı= " + x + "<br>");
    x++;
}

document.write("<br>");

//Do While Döngüsü
document.write("Do While Döngüsü" + "<br>");
x=1;
do {
    document.write("Sayı= " + x + "<br>");
    x++;
} while (x<=y);