// length metodu = değişken içeriğinin karakter sayısını döndürür
var cumle = "merhaba dünya";
document.write(cumle);

//length kullanımı -1
var islem = cumle.length;
document.write("<br>" + islem);

//length kullanımı -2
document.write("<br>" + cumle.length);

//57 Karakter Fakat 55 çıktısı verecektir. 
//JS gelişmiş bir dil olduğundan özel karakterleri ayırt edebilmektedir.
var metin2 = 'Dünya\'da en çok kullanılan kodlama dili Javascript\'tir.' 
document.write("<br>" + metin2.length);