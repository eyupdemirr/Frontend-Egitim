// Dizi Tanımlama

//* Birinci Yöntem
var dizi1 = ['deger1', 'deger2', 'deger3'];

//* İkinci Yöntem
//Dizinin eleman sayısı önce belirtiliyor. Sonra tek tek elemanlar tanımlanıyor
var dizi2 = new Array(7); 
dizi2[0]='pazartesi';
dizi2[1]='salı';
dizi2[2]='carsamba';
dizi2[3]='persembe';
dizi2[4]='cuma';
dizi2[5]='cumartesi';
dizi2[6]='pazar';

//* Üçüncü Yöntem
//Dizinin doğrudan elemanları tanımlanıyor. Kaç tane tanımlanırsa okadar elemanı olmuş oluyor.
var dizi3 = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);

//* Tanımlanan Dizileri Ekrana Yazdırma
document.write(dizi2 + "<br>");
document.write(dizi2[0] + "<br>");
document.write(dizi2[6]);