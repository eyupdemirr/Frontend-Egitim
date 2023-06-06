//Tanımlanmış bir veya birden fazla değişkeni başka bir değişken için tanımlı hale getirmek için aşağıdaki kullanımı kullanırız.

//Tek Değişken Aktarma
var degisken1 = "isim";
var degisken2 = degisken1;

//Çok Değişken Aktarma
var a = "soyisim";
var b = "soyisim";
var c = "soyisim";
var d = a + b + c;

//Birden çok string tipli rakam değerleri
var sayi1 = "5";
var sayi2 = "4";
var sayi3 = "2";
document.write(sayi1 + sayi2 + sayi3); //Değerler string olduğu için yan yana yazılacaktır.

//Birden çok numeric tipli rakam değerleri
var rakam1 = 5;
var rakam2 = 4;
var rakam3 = 2;
document.write(rakam1 + rakam2 + rakam3); //Değerler numeric olduğu için math işlemi yapılacaktır
