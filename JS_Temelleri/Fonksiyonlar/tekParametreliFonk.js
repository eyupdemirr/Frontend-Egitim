function karsilama(ad) {
    document.write("İyi Günler " + ad + "<br>");
    document.write("Bugün Nasılsınız?");
    document.write("<br>");
    document.write("<br>");
}

karsilama("Kullanıcı1");
karsilama("Kullanıcı2");

//Parametre girilmediği zaman parametrenin yerine undefined yazar
//Bu bir hatadır.
karsilama();

//Parametreler daha önceden değişkenlere atanırsa değişkenler direk parametre olarak verilebilir.
Kullanici3 = ("Kullanici3.0");
karsilama(Kullanici3);

//Metin türünde Parametreler tırnak işaretleri arasında yazılmalıdır. 
//Doğru kullanım olmazsa hata oluşur ve ekranda gözükmez.
karsilama(Kullanici4);