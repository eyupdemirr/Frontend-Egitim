var isim = "isim ";
if (true) {
  var isim = "ad ";
  document.write(isim);
}
document.write(isim);

//Local Değişkeni globalde tanımlama
//Eğer local alanda tanımlama yaparken değişkenin başına var let gibi bir ifade koymazsanız
//Bu global tanımlama olur ve global kapsamında çağrılınca çalışır.
if (true) {
  ad = "isiminiz";
}
document.write(ad);
