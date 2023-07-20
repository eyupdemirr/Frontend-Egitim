//Kullanıcının belirlediği tekrarda dönen döngü
n = Number(prompt("Lütfen bir rakam giriniz= "));
for (let x=0; x<n; x++) {
    document.write("Merhaba " + x + "<br>");
}

document.write("<br>");

//Çift sayılar
for (let y=0; y<n; y=y+2) {
    document.write("Merhaba " + y + "<br>");;
    
}

document.write("<br>");

//Tek sayılar
for (let z=1; z<n; z=z+2) {
    document.write("Merhaba " + z + "<br>");;
    
}