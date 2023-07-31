function show() {
    var numFrom = parseInt(document.getElementById("input1").value);
    var numTo = parseInt(document.getElementById("input2").value);
    var resultFizz = "";
    var resultFizzBuzz = "";

    for (var i = numFrom; i <= numTo; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            resultFizzBuzz += i + " ";
        } else if (i % 3 == 0) {
            resultFizz += i + " ";
        }
    }

    document.getElementById("fizz").innerHTML = resultFizz;
    document.getElementById("fizzbuzz").innerHTML = resultFizzBuzz;
}