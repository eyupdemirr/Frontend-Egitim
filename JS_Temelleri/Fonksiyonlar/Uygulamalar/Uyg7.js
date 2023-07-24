//X ile Y Arasındaki Sayıların Yazılması 

function araSayi(a,b) {
    while (a<=b) {
        document.write(a + "<br>");
        a++;
    }
}

x = Number(prompt("Sayi1= "));
y = Number(prompt("Sayi2= "));

araSayi(x,y);