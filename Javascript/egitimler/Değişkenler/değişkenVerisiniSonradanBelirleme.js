//Standart Değişken Tanımlama
var isim = "Ahmet";
//Verisi Olmayan Değişken Tanımlama
var ad;
//Daha Önceden Tanımlanan Değişkene Veri Atama
//1.Yol
ad = "Abdullah";

document.write(ad);

//var sonradan veri değişikliğine izin verir
var ad, soyad, yas;
isim = "Ahmet";
soyad = "Demirel";
yas = "30";
document.write(isim + soyad + yas);

//let tıpkı var gibi blok kapsamlı bir ifadedir ve sonradan veri değişikliğine izin verir
let ad, soyad, yas;
isim = "Ahmet";
soyad = "Demirel";
yas = "30";
document.write(isim + soyad + yas);

//Const bir sabit ifade olduğu için sonradan veri değişikliğine izin vermez.
/*
const ad, soyad, yas;
isim = "Ahmet";
soyad = "Demirel";
yas = "30";
document.write(isim + soyad + yas);
*/
