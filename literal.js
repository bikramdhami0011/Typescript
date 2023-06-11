"use strict";
function literal(a, b) {
    if (typeof a === "number" && b === "number") {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
//union
literal(10, 30);
