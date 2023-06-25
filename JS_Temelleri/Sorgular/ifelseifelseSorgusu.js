// if - elseif - else Sorgusu

var ort = Number(prompt("ortalama= "));
if (ort<50) {
    document.write("orta");
} else if (ort<75) {
    document.write("iyi");
}
else {
    document.write("Çok İyi");
}