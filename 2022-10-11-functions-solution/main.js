// Write a function that takes height in m and weight in kg and calculate its BMI.
// BMI is calculated by weight / (height * height). Depending on its result, show a message:
// - If lower than 18.5: "Thinness"
// - If between 18.5 and 24.9:	"Normal"
// - If greater than or equal to 25: "Overweight"

function bmi(height, weight) {
  let bmi = weight / (height * height);

  if (bmi < 18.5) {
    return "Thinness";
  } else if (bmi < 24.9) {
    return "Normal";
  } else {
    return "Overweight";
  }
}

console.log("Normal BMI: ", bmi(1.60, 60));
console.log("Thiness BMI: ", bmi(1.76, 55));
console.log("Overweight BMI: ", bmi(1.55, 70));

// Write a function that converts Fahrenheit to Celsius.
// The calculation is (fahrenheit − 32) * 5/9 = celsius.
// For example, if it is 32 Fahrenheit, then it is 0 Celsius.

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

console.log("32 Fahrenheit in Celsius: ", fahrenheitToCelsius(32));
console.log("105 Fahrenheit in Celsius: ", fahrenheitToCelsius(105));
console.log("0 Fahrenheit in Celsius: ", fahrenheitToCelsius(0));

// Mary is a teacher that needs to calculate the final grade of its students. She would like to create a function to optimize that process.
// Write a function `calculateFinalGrade()`, that takes 3 numbers (grades from 0 to 10). The final grade is calculated by adding the first grade with the second grade multiplied by 2 and the third grade multiplied by 3. The result should be divided by 6.
// There are some example output:
// console.log("Owen final grade: ", calculateFinalGrade(4, 5, 7)); //  Owen final grade: 5.83
// console.log("Harald final grade: ", calculateFinalGrade(5, 10, 5)); //  Harald final grade: 6.66
// console.log("Woytek final grade: ", calculateFinalGrade(6, 8, 7)); //  Woytek final grade: 7.16

function calculateFinalGrade(firstGrade, secondGrade, thirdGrade) {
    return (firstGrade + secondGrade * 2 + thirdGrade * 3) / 6;
}

console.log("Owen final grade: ", calculateFinalGrade(4, 5, 7));
console.log("Harald final grade: ", calculateFinalGrade(5, 10, 5));
console.log("Woytek final grade: ", calculateFinalGrade(6, 8, 7));

// In order to calculate the total price of cinema tickets in a movie theater, you need to write a function `calculateTicketPrice()`, that takes some parameters:
// - Number of tickets
// - If there is senior discount
// The price of an individual ticket 10 euros and the senior discount is 20%.
// calculateTicketPrice(2, true) // total price: 16
// calculateTicketPrice(1, false) // total price: 10
// BONUS: add an additional parameter of number of popcorns. Each popcorn costs 5 euros and are not inclucded in the discount calculation.
// calculateTicketPrice(2, true, 1) // total price: 21

function calculateTicketPrice(numberOfTickets, isSenior, numberOfPopcorns) {
    let totalPrice = numberOfTickets * 10;
    if (isSenior) {
        totalPrice *= 0.8;
    }
    if (numberOfPopcorns) {
        totalPrice += numberOfPopcorns * 5;
    }

    return totalPrice;
}

console.log("Two tickets and two popcorns: ", calculateTicketPrice(2, false, 2));
console.log("Three senior tickets: ", calculateTicketPrice(3, true));
console.log("One senior ticket and four popcorns: ", calculateTicketPrice(1, true, 4));

// Sometimes we cannot decide what to do between two options. Write a function that decides that for you!
// Write a function that takes two strings and prints one of them.
// chooseOption("eat chocolate", "run");
// To generate a random number, use `Math.random() * 10`. It returns a random number from 0 to 9.

function chooseOption(optionOne, optionTwo) {
    let randomNumber = Math.random() * 10;
    if (randomNumber <= 4) {
        return optionOne;
    } else {
        return optionTwo
    }
}

console.log("You should: ", chooseOption("run", "go to brunch"));
console.log("You should: ", chooseOption("study Javascript", "go for a walk"));
console.log("You should: ", chooseOption("listen to music", "listen to podcast"));
