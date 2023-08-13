//Math Sınıfı Uygulama
//Bir Çemberin Alanını ve Çevresini Hesapla

//Çevre = 2 * PI * r
//Alan = PI * r * r

var r = Number(prompt("r = "));
var cevre = 2 * (Math.PI) * r;
var alan = (Math.PI) * (Math.pow(r, 2));

document.write("Alan= " + alan + "<br>" + "Cevre= " + cevre);