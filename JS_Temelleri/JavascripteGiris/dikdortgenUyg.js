var genislik, yukseklik, alan, cevre;

genislik = Number(prompt("Genişlik Değeri= "));
yukseklik = Number(prompt("Yükseklik Değeri= "));

alan = genislik * yukseklik;
cevre = (genislik * 2) + (yukseklik * 2);

alert("Alan= " + alan);
alert("Çevre= " + cevre);