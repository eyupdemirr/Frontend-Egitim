//0'dan N'ye kadar olan çift yazıların yazdırılması

function cift(x) {
    for (var a=0; a<=x; a=a+2) {
        document.write(a + "<br>");
    }
}

var n = Number(prompt("n= "));
cift(n);