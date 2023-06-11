"use strict";
class User {
    constructor() {
        this.name = "";
        this.age = "";
    }
    addname(a, b) {
        console.log(a + b);
        return a + b;
    }
    removename(a, b) {
        this.name = a;
        this.age = b;
    }
}
let user = new User();
user.addname("abikra", 12);
user.removename("hello", "heooo");
