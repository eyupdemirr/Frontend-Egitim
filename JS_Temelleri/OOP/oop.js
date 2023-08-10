//Nesne Yönelimli Programlama

/*

Her nesnenin Değişken ve Fonksiyonları bulunmaktadır

Özellik = Değişken
Metot = Fonksiyon

*/

//Sınıf Oluşturma
class Uye {
    constructor(uyeNo){
        this.uyeNo=uyeNo;
    }
}

var uye1 = new Uye(1);
var uye2 = new Uye(2);

document.write("Uye= " + uye1.uyeNo + "<br>");
document.write("Uye= " + uye2.uyeNo + "<br>");

/*Birden Çok Parametreli Sınıf*/

class Sinif {
    constructor(sayi, sube){
        this.sayi=sayi;
        this.sube=sube;
    }
}

var sinif1 = new Sinif(10,'A');
var sinif2 = new Sinif(12,'C');

document.write("Sinif= " + sinif1.sayi + sinif1.sube + "<br>");
document.write("Sinif= " + sinif2.sayi + sinif2.sube + "<br>");