
var friends1 = ['Ali',' Ayşe',' Can',' Oya'];
document.write(friends1);

var friends2 = new Array(4);
friends2[0] = prompt(String('Friend 1= '));
friends2[1] = prompt(String('Friend 2= '));
friends2[2] = prompt(String('Friend 3= '));
friends2[3] = prompt(String('Friend 4= '));
alert(friends2);

var friends3 = new Array(4);
for (let i=0; i<4; i++) {
    friends3[i] = prompt(String(i + " Name's Your Friend? "));
    document.write("<br>" + friends3[i]);
}

