//1'den N'ye Kadar Olan Sayıların Toplamı

function topla(i) {
    var toplam = 0;
    
    for (var x=1; x<=i; x++) {
        toplam=toplam+x;
    }
    return toplam;

}

var n = Number(prompt("n= "));
alert("Aradaki Sayıların Toplamı " + topla(n));