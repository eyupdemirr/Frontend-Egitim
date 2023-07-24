//Bir blok içinde tanımlanan değişkenler sadece o blok içinde kullanılabilir
function fonk1() {
    var a=1, b=2, toplam=0;
    toplam=a+b;
    document.write("toplam= " + toplam);
}
fonk1();

//ilk blok komutları çalıştıktan sonra blok içinde tanımlanan değişkenler bellekten silinir
//fonk2 bloğunda a ve b bulunamadığı için hata verecektir.

function fonk2() {
    var carpim=0;
    carpim=a*b;
    document.write("carpim= " + carpim);
}
fonk2;