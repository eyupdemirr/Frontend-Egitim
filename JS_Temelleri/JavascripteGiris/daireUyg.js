//Değişkenler
var alan, cevre, r, pi=3.14;

//Yarıçapı Kullanıcıdan Al
r = Number(prompt("Dairenin yarıçapını giriniz= "));

//Hesaplamalar
cevre = (2 * pi * r);
alan = (pi * r * r);

//Çıktılar
alert("Dairenin Çevresi= " + cevre);
alert("Dairenin Alanı= " + alan);