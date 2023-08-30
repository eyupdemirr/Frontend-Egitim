var Sayi2 = [1,5,2,6,3,5,4,5,2,1,3,9,8,7,0,0,0];

document.write(Sayi2.length);

// Sort() = Dizideki elemanları alfabetik olarak sıralamaya yarar
Sayi2.sort();
document.write("<br>" + Sayi2);

// Dizideki eleman sıralamasını tersine çevirir
Sayi2.reverse();
document.write("<br>" + Sayi2);

// push() = Dizinin sonuna yeni eleman eklenmesini sağlar
Sayi2.push(120);
document.write("<br>" + Sayi2);

//unshift() = Dizinin başına yeni eleman eklenmesini sağlar
Sayi2.unshift(144);
document.write("<br>" + Sayi2);

// shift() = Dizinin ilk elemanını döndürür ve diziden siler
document.write("<br>" + Sayi2.shift());
document.write("<br>" + Sayi2);

// pop() = Dizinin son elemanını döndürür ve diziden siler
document.write("<br>" + Sayi2.pop());
document.write("<br>" + Sayi2);
