function calc_power() {
  // saving user inputs into variables.
  const number1 = Number(document.getElementById("user_num_1").value);
  const number2 = Number(document.getElementById("user_num_2").value);
  const paragraph = document.querySelector("p");
  if (number2 < 1)
  {
    paragraph.textContent = "Only positive integers are supported for n."
    return;
  }
  let result = number1;
  // A loop that multiplies the number with itself n times
  for (let counter = 0; counter < number2 - 1; counter++)
  {
      result *= number1;
  }
    paragraph.textContent = `${number1} to the power of ${number2} is ${result}.`;
}
