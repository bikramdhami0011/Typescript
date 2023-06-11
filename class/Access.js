"use strict";
class Access {
    constructor() {
        this.name = "bikram";
    }
    add() {
        return this.dis();
    }
    dis() {
        return "hello bikram";
    }
}
const a = new Access();
console.log(a.add());
