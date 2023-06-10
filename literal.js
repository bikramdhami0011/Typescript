function literal(a, b) {
    if (typeof a === "number" && b === "number") {
        return a + b;
    }
    else {

        return a.toString() + b.toString();
    }
}
literal(10,20)

