"use strict";
class pra {
    addname(user) {
        return `${user} added here`;
    }
}
let par = new pra();
par.addname("bikram");
class ch extends pra {
    name(user) {
        return `${user} is again added from child class`;
    }
}
let us2 = new ch();
console.log(us2.addname("hello"));
console.log(us2.name( " bikram dhami"))
class ch2 extends pra {
    otherchname(user) {
        return `${user} is again added from child class`;
    }
}
let us3=new ch2();
console.log(us3.otherchname("other"));
console.log(us3.addname("other"))
