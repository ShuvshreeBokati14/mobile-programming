function calc(operation) {

    let Num1 = Number(document.getElementById("Num1").value);

    let Num2 = Number(document.getElementById("Num2").value);

    let calulate;

    if (operation === "Add") {
        calulate = Num1 + Num2;
    }

    if (operation === "Subtract") {
        calulate = Num1 - Num2;
    }

    if (operation === "Multiply") {
        calulate = Num1 * Num2;
    }

    if (operation === "Divide") {
        calulate = Num1 / Num2;
    }

    document.getElementById("calculate").innerHTML = calulate;
}