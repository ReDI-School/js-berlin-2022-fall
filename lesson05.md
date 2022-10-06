<!-- .slide: id="lesson5" -->

# Basic Frontend - Fall 2022

Lesson 5, Thursday, 2022-10-06

---

### Recap: if statements

```js
if (temperature >= 20) {
  // block of code that will run
  // ONLY if temperature >= 20
  console.log('Go to the park!');
}
```

---

### Recap: if else

```js
if (temperature >= 20) {
  console.log('Go to the park!');
} else {
  // when will this execute??
  console.log('Study javascript!');
}
```

If `temperature` is less than 20, only the `else` block will execute.
<!-- .element: class="fragment" -->

---

### Recap: if / else if

```js
if (temperature >= 20) {
   console.log('Go to the park!');
} else if (temperature < 0) {
   // when will this execute??
   console.log('Go skiing!');
} else {
   console.log('Study javascript!');
}
```

The `else if` block will execute only if temperature is less than 20 **and** all `if` conditions above it are `false`.
<!-- .element: class="fragment" -->

---

### rules of if, else if, else

```js
if (condition1) {
  // some code ...
} else if (condition2) {
  // some other code ...
} else if (condition3) {
  // code, code, code ...
} else {
  // even more code ...
}
// JavaScript will continue from here.
```

---

### rules of if else if else

- JavaScript will go through the if/else-if/else statements from top to bottom.
- In our example, it will check condition1, then condition2, then condition3…
- If one of the conditions evaluates to true, JavaScript will execute it’s code block AND IGNORE EVERYTHING ELSE


---

## Series of separate if statements

If we put a series of `if` statements one after the other, they will be evaluated independently of one another.

```js
if (condition1) {
    // do this
}

if (condition2) {
    // do also this
}

if (condition3) {
    // and do also this
}
```

---

# Functions

<!-- .slide: id="functions" -->

---

### functions

A function is a reusable block of code.

A very simple function would be:

```js
function sayHello() {
  console.log("Hello There!");
}
```

You can call the function like this, using a pair of open and closed parentheses:

```js
sayHello();
```

---

you can write any amount of code you want in the function:

```js
function sayHello() {
  console.log("Hello There!");

  console.log("...");

  console.log("General Kenobi!");
}

sayHello();
```

---

A function can contain any kind of code:

```js
function checkTemperature() {
    let temperature = 10;
    if (temperature < 10) {
        console.log("it's cold outside");
    } else {
        console.log("it's not that cold");
    }
}

checkTemperature();
```

---

### Quiz

What does the following code output to console?

```js
function output42() {
  console.log("42");
}
```

Answer: Nothing, because we never _call_ the function
<!-- .element: class="fragment" -->

```js
output42();
```
<!-- .element: class="fragment" -->


---

### Quiz

What does the following code output to console?

```js
function output42() {
  console.log("42");
}

output42();
output42();
```

Answer: "42" and "42"
<!-- .element: class="fragment" -->

---

### Function definition and execution

It's important to distinguish between 2 parts when working with functions:

1. function definition (also called function declaration)
1. function execution (calling the function)

---

### Function definition and execution

```js
// this is the function definition
function sayHello() {
    console.log('Hello');
}

// this is the function call
sayHello();
```

We always need to define a function in order for us to call it.

---

### Function definition

There are 3 mandatory parts in a function definition:

1. the `function` keyword
1. the `name` of the function we are defining, followed by parentheses `()`
1. the function `body`, surrounded by curly braces

---

### Function execution

To call (execute) a function we need to write its `name` followed by parenthesis.

---

### Practice


1. create a function called `hello` that outputs "Hello, \[your name\]" using console.log
1. create a function called `sum`.
    - declare 2 variables `a` and `b` inside of it
    - assign the 2 variables any numerical value you want
    - output the sum of `a` and `b`
1. create a function called `square`
    - declare a variable `n` inside of it
    - assign a numerical value to it
    - output the square of `n`

Call the 3 functions and check the result in the console.

<!-- .slide: style="font-size:70%;" -->
---

### Following the flow or a program with functions

```js
console.log('I go first');

function sayHey() {
    console.log('Hey!'); // <- when do we see this in the console?
}

console.log('I go second');
sayHey(); // <- what do we see here in the console?
console.log('I go last');
```


---

## Function parameters and arguments

Let's say we want a few variations of the function `sayHi`. We might want another function that says "Hi Owen", another one that says "Hi Mellina" and a last one that says "Hi Harald".

How can we do it without repeating ourselves?

---

### Function parameters and arguments

```js
function sayHiToOwen() {
  console.log('Hi Owen');
}
function sayHiToMellina() {
  console.log('Hi Mellina');
}
function sayHiToHarald() {
  console.log('Hi Harald');
}

sayHiToOwen();
sayHiToMellina();
sayHiToHarald();
```

---

### Function parameters and arguments

The code works, but we are basically writing the same function 3 times and just changing a string inside.

We want to avoid rewriting nearly identical code.

Luckily, functions have the option to accept **parameters** that let us do just that.

---

### Function parameters and arguments

```js
function sayHi(name) {
    console.log("Hi " + name);
}

sayHi('Owen');
sayHi('Mellina');
sayHi('Harald');
```

- `name` is a function **parameter**
- "Owen", "Mellina", "Harald" are **arguments**. In each function call they will be assigned to the `name` parameter

---

### Multiple parameters

A function can have any number of parameters

```js
function multipleParameters(parameter1, parameter2, parameter3) {
    console.log(parameter1, parameter2, parameter3);
}

multipleParameters("argument1", "argument2", "argument3");
```

Each argument will be assigned to the corresponding parameter in order, from left to right

---

### Multiple parameters

```js
function greetFriends(name1, name2, name3) {
    console.log("Hello " + name1 + ", " + name2 + ", and " + name3);
}

greetFriends("Owen", "Mellina", "Harald");
```

This will output "Hello Owen, Mellina, and Harald"
<!-- .element: class="fragment" -->


---

## Returning values

So far we've written functions only to output values to the console.

Typically, we use functions to make a calculation. Then, we want to use the result of that calculation outside of the function.

We can use the `return` keyword for that.

---

### Return: example

```js
function giveMe5() {
  return 5;
}

let number = giveMe5();
console.log(number); // 5
```

---

### Return: example

```js
function add(a, b) {
  return a + b;
}

let result = add(3, 5);
console.log(result); // 8
```

---

### Returning values

Once a function returns, no other code within the function will be executed:

```js
function giveMe5() {
  return 5;
  console.log("I returned 5"); // CODE WILL NEVER EXECUTE!!!
}
```

---

### Common mistakes

What will this return?

```js
function giveMe5() {
  console.log("5");
}

let number = giveMe5();
console.log(number);
```

`undefined`! This function does not have a return value!
<!-- .element: class="fragment" -->

---

### Returning values

A function can have multiple `return` statements. The first `return` statement exits the function:

```js
function isCold(temperature) {
  if (temperature < 15) {
    return true;
  } else {
    return false;
  }
}
let isItCold = isCold(25);
console.log(isItCold);
```

---

### Quiz

What is the value of `result`?

```js
function giveMe5() {
  return 5;
}

let result = giveMe5() * giveMe5();
```

Answer: 25
<!-- .element: class="fragment" -->

---

### Exercise 1

Write a `min` function that returns the smaller of the two numbers. If the 2 values are the same, it will return the first value.

```js
min(1, 2);    // should return 1
min(100, 99); // should return 99
min(-10, 0);  // should return -10
```

---

### Exercise 2

Write a function that takes name of a person, their age, and the language they speak, and returns a string that introduces this person.

Example:

Owen, 30, English &#8594; **"Hello! my name is Owen, I am 30 years old and I speak English."**

---

### Extra exercises

[Here are some incomplete examples](https://github.com/ReDI-School/js-berlin-2021-fall/tree/main/exercises/2021-10-07)
of using functions. Copy the contents of the file into a script tag, and try
to fix the examples so that they run correctly.
