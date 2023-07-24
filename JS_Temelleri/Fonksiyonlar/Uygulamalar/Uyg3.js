//Fonksiyonları döngü içinde kullanmak

function dongu(x) {
    document.write("Merhaba" + x + "<br>");
}

//Döngü tekrar sayısını kullanıcıdan al 
n = Number(prompt("n= "));
//Fonksiyon parametresini kullanıcıdan al
z = Number(prompt("z= "));

for (let x=0; x<n; x++) {
    dongu(z);
}