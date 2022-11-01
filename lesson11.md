<!-- .slide: id="lesson11" -->

# Basic Frontend - Fall 2022

Lesson 11, Thursday, 2022-11-03

---

### Lesson overview

- Recap: loop concepts and `while` loop
- `for` loop
- Remainder operator

---

### Recap: Loops

What is a loop?

* a statement that executes a block of code as long as a certain condition is true
<!-- .element: class="fragment" -->

---

### Recap: Loops

What are the main parts of a loop?

- initialization
<!-- .element: class="fragment" -->
- condition
<!-- .element: class="fragment" -->
- update
<!-- .element: class="fragment" -->
- a block of code to execute repeatedly
<!-- .element: class="fragment" -->

---

### Recap: While loops

```js
let i = 1; // initialize i with 1
while (i < 6) { // *while* `i` is less than 6
  // repeat this loop body
  console.log(i);
  i++; // update i at the end of every loop
}
```

---

### Exercise solution

Output the sum of the first 10 numbers (e.g. 1 + 2 + 3 + ...)

Before solving it using a loop, let's try to analyze the problem

```js
let sum = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10;
console.log('Sum is:', sum); // 55
```

Correct result, but not a great a solution. We're doing all the work.

Imagine doing it for 100 or 1000 numbers.

---

### Exercise solution

```js
let sum = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10;
console.log('Sum is:', sum); // 55
```

Looking at the solution we can see that it's just a repeated addition.

The word `repeated` should immediately make us think about loops.

---

### Exercise solution

Let's break down that line of code into individual steps.

```js
let sum = 0;
sum += 1;
sum += 2;
sum += 3;
sum += 4;
sum += 5;
sum += 6;
sum += 7;
sum += 8;
sum += 9;
sum += 10;
console.log('Sum is:', sum); // 55
```

Still not a great solution, but now it should be more evident what's the instruction to repeat.

---

### Exercise solution

Solution with a loop:

```js
let sum = 0;
let i = 1;
while (i <= 10) {
    sum += i;
    i++;
}
console.log('Sum is:', sum); // 55
```

---

### Review

So far, our `while` loops have followed the same basic structure:
```js
let i = 1; // initialization
while (i <= 10) {  // condition
    // do something

    i++; // update
}
```
We can see that we are often initializing some integer variable before the loop as a counter, and updating the variable at the end of the loop.

But we're programmers... we like to simplify things! Is there a more concise way?

---

### For loops

A `for` loop works like a `while` loop, but it's more concise.

```js
for (initialization; condition; update) {
  // loop body
}
```

The 3 main parts of the loop are all in one line, separated by semicolons (`;`).

---

### For loop

Let's replace our `while` loop with a `for`:

```js
let i = 1;       // part 1 - *initialize* the counter
while (i < 6) {  // part 2 - *test* the exit *condition*
  console.log(i);// loop body
  i++;           // part 3 - *update* the counter
}

// same code with for loop:

for (let i = 1; i < 6; i++) {
  console.log(i);
}
```

---

### For loop - summary

* A `while` loop executes its body while the condition is `true`.
* A `for` loop *first* runs the **initialization** part, then tests the **condition** part
and, if it is `true`, executes the body. After every loop, it executes the **update** part.

---

### For vs. while

* We use a `for` loop if we know in advance how often it will be executed.

```js
for (let i = 0; i < 1000; i++) {
  console.log(i);
}
```

* We use a `while` loop if we don't know how many times the loop will be executed.

```js
while (passwordIsWrong) {
  askForPassword();
}
```

---

### Exercises

This time, with a `for` loop!

* Output the squares of the first 10 numbers starting with 1 (1, 4, 9, 16, ...)
* Output the sum of the first 10 numbers starting with 1
* Count down from 10 to 0 and output it on console.

---

### Remainder operator

* For the next exercise, we need the [Remainder Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder): `%`
* It shows you what integer remains when you divide one number by another
* Question: What is left when you divide 6 coins between 3 friends? Answer: 0 coins
* Question: What is left when you divide 8 coins between 3 friends? Answer: 2 coins

---

### Remainder Operator

```js
6 % 3  // 0
7 % 3  // 1
8 % 3  // 2
9 % 3  // 0
10 % 3 // 1
11 % 3 // 2
12 % 3 // 0
```

Common programming usage: How can you tell if a number is even or odd?

- even numbers: 2, 4, 6, 8, 10, 12...
- odd numbers: 1, 3, 5, 7, 9, 11...

---

### Exercise 1: For loop and Remainder operator

Print all even numbers between 0 and 100

---

### Bonus Exercise (Challenge!)

This is a real interview question for a Junior JavaScript developer:

* Print all the numbers from 1 to 100 to console
  * If the number is divisible by 3, print “Fizz” instead
  * If the number is divisible by 5 (and not by 3), print “Buzz” instead
  * If the number is divisible by both 3 and 5, print “FizzBuzz” instead

---

### Exercise 2 

Draw a pyramid to console:

```plaintext
*
**
***
****
*****
```

---

### Exercise 3

Find more exercises [here](https://github.com/ReDI-School/js-berlin-2021-fall/tree/main/exercises/2021-11-16).

Instructions for each exercise are inside each JavaScript file.
