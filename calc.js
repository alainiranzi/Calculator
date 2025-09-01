
    function calculate() {
      let n1 = parseFloat(document.getElementById("num1").value);
      let n2 = parseFloat(document.getElementById("num2").value);
      let op = document.getElementById("operation").value;
      let res = "";

      if (isNaN(n1) || isNaN(n2)) {
        res = "Please enter valid numbers!";
      } else {
        if (op === "add") res = n1 + n2;
        else if (op === "sub") res = n1 - n2;
        else if (op === "mul") res = n1 * n2;
        else if (op === "div") {
          if (n2 === 0) res = "Cannot divide by zero!";
          else res = n1 / n2;
        }
      }

      document.getElementById("result").innerHTML = "Result: " + res;
    }
  