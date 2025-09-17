function fizzBuzz() {
      let result = [];
      //Makes empty array
      let amount = parseInt(document.getElementById("number").value);
      //makes variabke amount = the number the user enters
      for (let i = 1; i <= amount; i++) {
    //makes a loop function that limits at the usrs amount entered
        if (i % 3 === 0 && i % 5 === 0) {
          result.push("FizzBuzz");
        } else if (i % 3 === 0) {
          result.push("Fizz");
        } else if (i % 5 === 0) {
          result.push("Buzz");
        } else {
          result.push(i);
        }
      }
      //determines if number is fizz or buzz or fizzbuzz, then pushes that into the result array
      document.getElementById("output").innerHTML = result.join("<br>");
      //joins elemnts inside the array together, with the lines breaking, then pastes it into the div i made with the id output
}