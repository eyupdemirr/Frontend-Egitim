var saat = 2.5;

// Çok boyutlu Koşullu İfadeler
// Koşullu ifadelerin içinde başka koşullu ifadeleri kullanmaya denir.
if (saat>=0 && saat<=5) {
    
    if (saat==0) {
        document.write("Günaydın, Saat şuan da " + saat);
    } 
    else if (saat==1) {
        document.write("Günaydın, Saat şuan da " + saat);
    }
    else if (saat==2) {
        document.write("Günaydın, Saat şuan da " + saat);
    }
    else if (saat==3) {
        document.write("Günaydın, Saat şuan da " + saat);
    }
    else if (saat==4) {
        document.write("Günaydın, Saat şuan da " + saat);
    }
    else if (saat==5) {
        document.write("Günaydın, Saat şuan da " + saat);
    }
    else {
        document.write("Günaydın, İşleminiz Hatalı");
    }

} 
else if (saat>5 && saat<=10) {
    document.write("b");
}
else {
    document.write("c");
}