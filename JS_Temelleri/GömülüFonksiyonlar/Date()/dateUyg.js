var zaman = new Date();
var gun = zaman.getDate();
var ay = zaman.getMonth();
var yil = zaman.getFullYear();
var saat = zaman.getHours();
var dakika = zaman.getMinutes();

document.write("Tarih= " + gun + '.' + ay + '.' + yil + "<br>");
document.write("Saat= " + saat + '.' + dakika);