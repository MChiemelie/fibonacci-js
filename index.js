function handleFormSubmit(event) {
   // Prevent the default form submission behavior
   event.preventDefault();

   // Get the values of the input elements when the form is submitted
   const firstNumber = parseFloat(document.getElementById("firstnumber").value);
   const secondNumber = parseFloat(document.getElementById("secondnumber").value);
   const length = parseInt(document.getElementById("lenght").value);
   const index = parseInt(document.getElementById("index").value);

   // Call the fibonacci function with the input values
   const numbers = fibonacci(firstNumber, secondNumber, length);

   // Set the value of the "numbersArray" element to the array of Fibonacci numbers
   document.getElementById("numbersArray").innerText = isNaN(firstNumber && secondNumber) ? `You have to provide the first and second number of the sequence to generate the rest of the sequence` : `The Fibonacci sequence generated is ${numbers.join(', ')}`
   document.getElementById("indexValue").innerText = index > length ? `The nth number cannot be greater than the number of numbers in the sequence` : index < 1 ? `Hey 😏😒, you can't find the nth when it less than one` : `${length ? `The ${ index }th number in the sequence is ${ numbers[index - 1] }` : `The lenght of the sequence is not enough to provide the index` }`;
   // documnet.getElementById("lengthInfo").innerText =  `True` : "As you didn't provide the lenght, the sequence would have just the first and second number you provided."
}

function fibonacci(firstNumber, secondNumber, length) {
   let numbers = [firstNumber, secondNumber];

   for (let i = 2; i < length; i++) {
      let sum = numbers[i - 1] + numbers[i - 2];
      numbers.push(sum);
   }

   return numbers;
}