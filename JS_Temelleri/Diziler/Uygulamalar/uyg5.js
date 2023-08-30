// Bir string karakterleri ile dizi işlemleri

// - dizi tanımlayın
// - Kullanıcıdan kelime alın ve büyük harfe çevirin
// - Dizi/kelime elemanlarını ekrana alt alta yazdırın
// - Karakterleri tersten yazdırın

var kelime = "";
kelime = prompt("Kelime= ");
alert(kelime)

document.write(kelime.toUpperCase()+"<br>");

for (var i=0; i<kelime.length; i++) {
    document.write(kelime[i] + "<br>");
}

document.write("<br>");

for (var i=kelime.length-1; i>=0; i--) {
    document.write(kelime[i] + "<br>");
}
