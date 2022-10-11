<!-- .slide: id="lesson6" -->

# Basic Frontend - Fall 2022

Lesson 6, Tuesday, 2022-10-11

---

### Task

Write a function that takes height in cm and weight in kg and calculate its BMI.

BMI is calculated by weight / (height * height). Depending on its result, show a message:

> If lower than 18.5: "Thinness"
>
> If between 18.5 and 24.9:	"Normal"
>
> If greater than or equal to 25: "Overweight"

---

### Task

Write a function that converts Fahrenheit to Celsius.

The calculation is (fahrenheit − 32) * 5/9 = celsius.

For example, if it is 32 Fahrenheit, then it is 0 Celsius.

---

### Task

Mary is a teacher that needs to calculate the final grade of its students. She would like to create a function to optimize that process.

Write a function `calculateFinalGrade()`, that takes 3 numbers (grades from 0 to 10). The final grade is calculated by adding the first grade with the second grade multiplied by 2 and the third grade multiplied by 3. The result should be divided by 6. 

There are some example output:

```js
console.log("Owen final grade: ", calculateFinalGrade(4, 5, 7)); //  Owen final grade: 5.83
console.log("Harald final grade: ", calculateFinalGrade(5, 10, 5)); //  Harald final grade: 6.66
console.log("Woytek final grade: ", calculateFinalGrade(6, 8, 7)); //  Woytek final grade: 7.16
```

---

### Task

In order to calculate the total price of cinema tickets in a movie theater, you need to write a function `calculateTicketPrice()`, that takes some parameters:

- Number of tickets
- If there is senior discount

The price of an individual ticket 10 euros and the senior discount is 20%.

```js
calculateTicketPrice(2, true) // total price: 16
calculateTicketPrice(1, false) // total price: 10
```

BONUS: add an aditioal parameter of number of popcorns. Each popcorn costs 5 euros and are not inclucded in the discount calculation.

```js
calculateTicketPrice(2, true, 1) // total price: 21
```

### Task

Sometimes we cannot decide what to do between two options. Write a function that decides that for you!

Write a function that takes two strings and prints one of them.

```js
chooseOption("eat chocolate", "run");
```

To generate a random number, use `Math.random() * 10`. It returns a random number from 0 to 9.
