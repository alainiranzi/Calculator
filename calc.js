function factorial(n) {
  if (n < 0) return "Cannot take factorial of negative number!";
  if (n === 0 || n === 1) return 1;
  let fact = 1;
  for (let i = 2; i <= n; i++) fact *= i;
  return fact;
}

function calculate() {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  let op = document.getElementById("operation").value;
  let res = "";

  if (isNaN(n1)) {
    res = "Please enter a valid number!";
  } else {
    switch(op) {
      case "add":
        if (isNaN(n2)) { res = "Please enter the second number!"; break; }
        res = n1 + n2;
        break;
      case "sub":
        if (isNaN(n2)) { res = "Please enter the second number!"; break; }
        res = n1 - n2;
        break;
      case "mul":
        if (isNaN(n2)) { res = "Please enter the second number!"; break; }
        res = n1 * n2;
        break;
      case "div":
        if (isNaN(n2)) { res = "Please enter the second number!"; break; }
        res = n2 === 0 ? "Cannot divide by zero!" : n1 / n2;
        break;
      case "sin":
        res = Math.sin(n1 * Math.PI / 180); // degrees to radians
        break;
      case "cos":
        res = Math.cos(n1 * Math.PI / 180);
        break;
      case "tan":
        res = Math.tan(n1 * Math.PI / 180);
        break;
      case "sqrt":
        res = n1 < 0 ? "Cannot take square root of negative number!" : Math.sqrt(n1);
        break;
      case "pow":
        if (isNaN(n2)) { res = "Please enter the second number!"; break; }
        res = Math.pow(n1, n2);
        break;
      case "log":
        res = n1 <= 0 ? "Cannot take log of non-positive number!" : Math.log10(n1);
        break;
      case "ln":
        res = n1 <= 0 ? "Cannot take ln of non-positive number!" : Math.log(n1);
        break;
      case "fact":
        res = factorial(n1);
        break;
      default:
        res = "Unknown operation!";
    }
  }

  document.getElementById("result").innerHTML = "Result: " + res;
}
