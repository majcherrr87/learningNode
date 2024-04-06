export function calc(operation, a, b) {
  switch (operation) {
    case "add":
    case "plus":
      return a + b;
    case "subtract":
    case "minus":
      return a - b;
    case "multiply":
    case "razy":
      return a * b;
    case "divide":
    case "podzielic":
      return a / b;
    default:
      return "wystąpił jakiś bład!";
  }
}
