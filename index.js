// fibonacci function takes three parameters. These three parameters represent the first number, second number, lenght - thenumber of numbers to be on the list and the index of the number to be oughted for respectively.
function fibonacci(firstNumber, secondNumber, lenght, index) {
   // intialize a variable called numbers and set it to an array. This array holds the value of the numbers in the Fibonacci
   let numbers = [firstNumber, secondNumber];

   // a for loop to to add up the last two numbers in the array if the sum of the numbers is less than 10
   for (let i = 0; i < lenght; i++) {

      // initailize a variable to that would hold the last numbers in the array ** This variable is actually an array as the slice method actually stores the last set of values, depending on the argument passed, in an array
      let lastTwoNumbers = numbers.slice(-2);

      // initailze a function that would calculate the sum of the last two numbers
      function sumOfLastNumbers() {
         let sum = 0; // intailizes a variable that would hold the sum of the last two number and set it orginally to zero
         let summingArray = lastTwoNumbers.map(eachNumber => sum += eachNumber); // gets the last two numbers from the lastTwoNumbers, loops through them and add each one to the sum variable, create an new array of these last two numbers plus the sum
         return summingArray[summingArray.length - 1]; // makes this function to return the value of the last number
      }

      numbers.push(sumOfLastNumbers()); // adds the last number to the end of the array
   }

   console.log(numbers[index]);
   console.log(numbers);
}

// calling the fibonacci function with the required arguments
fibonacci(1, 4, 12, 2);