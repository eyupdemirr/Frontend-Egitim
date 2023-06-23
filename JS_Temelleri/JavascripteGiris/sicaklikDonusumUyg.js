//Değişkenler
var f, c;

//Sıcaklık Değerini Kullanıcıdan Alma
f = Number(prompt("Fahrenheit türünde sıcaklık değerini giriniz= "));

//Sıcaklık Dönüşümünü Hesaplama
c = ((f-32)/1.8);

//Çıktılar
alert("Santigrat cinsinde sıcaklık karşılığı= " + c);