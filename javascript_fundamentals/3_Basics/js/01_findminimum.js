function find_min() {
    // saving user inputs into variables.
    const number1 = Number(document.getElementById("user_num_1").value);
    const number2 = Number(document.getElementById("user_num_2").value);
    const paragraph = document.querySelector("p");
    let minimum = 0;
    if (number1 === number2)
    {
    paragraph.textContent = "The two numbers are equal!";
    }
    else
    {
    (number1 < number2) ? minimum = number1 : minimum = number2;
    paragraph.textContent = `The smallest number is: ${minimum}`;
    }

}
