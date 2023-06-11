// eval() metodu = 
//Kendisine parametre olarak verilen değerleri JS kodlamasına çevirerek komut gibi çalıştırır.
//Ve oluşan değeri geriye döndürür.

var degisken1 = 10;
var degisken2 = 50;

//string türünde olduğu için çıktı tırnakların içiyle aynı olacaktır
var sonuc1 = "degisken1 + degisken2";
document.write(sonuc1 + "<br><br>");

//eval metodu sayesinde kodu math işlemi olarak çalıştıracak ve çıktı 60 olacak.
var sonuc2 = eval("degisken1 + degisken2");
document.write(sonuc2)

//Standart bir fonksiyon
function deneme1(){
    document.write("<br>" + "Merhaba Dünya");
}
deneme1();


//komut çıktısı yine tırnaklar içi ile aynı olacak 
function deneme2(){
    document.write("<br>" + "Merhaba Dünya");
}
var komut = "deneme2()";
document.write("<br>" + komut);

//eval metodu ile sıradan bir string ifade komut gibi çalıştırılmış gibi oldu.
function deneme2(){
    document.write("<br>" + "Merhaba Dünya");
}
var komut = eval("deneme2()");
