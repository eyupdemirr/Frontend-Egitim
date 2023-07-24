//N Faktöriyel

//Tek parametreli değer döndüren fonksiyon
function factorial(x) {
    var f = 1;
    for (var i=1; i<=x; i++) {
        f=f*i;
    }
    return f;
}

var n = Number(prompt("n= "));
alert("n= " + n + " | n!= " + factorial(n));