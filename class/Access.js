"use strict";
// class Access {
// private name="bikram";
//    add(){
//    return this.dis();
//    }
//    private dis(){
//     return "hello bikram"
//    }
// }
// const a=new Access();
// console.log(a.add())
class users {
    constructor() {
        this.name = "bikram";
    }
    add() {
        return this.name;
    }
}
console.log(new users().add());
