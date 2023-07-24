//Toplama Fonksiyonu

//çift parametreli değer döndüren fonksiyon
function toplama(a,b) {
    return a+b;
}

//toplanacak sayilari kullanıcıdan alır
var sayi1 = Number(prompt("sayi1= "));
var sayi2 = Number(prompt("sayi2= "));

//ekran ciktisi
alert(toplama(sayi1,sayi2));