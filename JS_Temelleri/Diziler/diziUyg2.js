//5 Elemanlı bir dizinin ekrandan okunması ve ekrana yazdırılması

var dizi = new Array(5);

for (let i=0; i<=4; i++) {
    dizi[i] = prompt(String("Eleman= "));
    
}

for (let i=0; i<=4; i++) {
    document.write(dizi[i] + "<br>");
}
