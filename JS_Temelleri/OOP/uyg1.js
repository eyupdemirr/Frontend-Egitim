//Daire Sınıfı Uygulaması

//Daire Sınıfı
class Daire{
    //yaricap parametresi
    constructor(yaricap){
        this.yaricap=yaricap;
    }
    //alan fonksiyonu
    alan(){
        return 3.14*this.yaricap*this.yaricap;
    }
    //cevre fonksiyonu
    cevre(){
        return 2*3.14*this.yaricap;
    }
}
//Kullanıcıdan yaricapı alıp r değişkenine atıyor
var r1 = Number(prompt("Yaricap= "));

//d1 nesnesi tanımlanır
var d1 = new Daire(r1);

document.write("Alan= " + d1.alan() + "<br>");
document.write("Çevre= " + d1.cevre() + "<br>");

