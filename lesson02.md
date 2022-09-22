<!-- .slide: id="lesson2" -->

# Basic Frontend - Fall 2022

Lesson 2, Thursday, 2022-09-22

---


### Recap

What did we talk about last lesson?

---

### Recap: data types

Number:
```js
42
-3.1415
```

String:
```js
"John"
'Berlin'
```

Boolean:
```js
true
false
```

---

### Recap operators

| Group | Operators | Example |
| ----- | --------- | ------- |
| Numerical Operators | `+` `-` `*` `/` `**` | `5 + 4 * 3`<br/>`7 / 2 - 2`<br/>`"Hello" + " World"` |
| Comparison Operators | `===` `!==` `<` `>` `<=` `>=` | `30 !== 25`<br/>`20 >= 18` |

---

### Try it out

Now, try to enter some data to the JavaScript console, but think of the data type first:

* Your name
* Your shoe size
* Wether you think it's ok to put pineapple on pizza

---

### Try it out: Solution

```js
"Carlo"
45
false
```

---

### Comparison operators

Use JavaScript to check if:

* you are older than me (I'm 44)
* your first name is the same as mine

---

### Solution

```js
26 > 44                // false - I am older
"Harald" === "Owen"    // false - not the same first name
```

---

### Summary

So far, we learned how to enter data and how to use operators to derive new data.

But when reading the code we wrote, we won't quite understand it later:

```js
4 * 8
32 / 2
```

What's that? How can we make it clearer what that means?

---

<!-- .slide: id="variables" -->

# Variables

---

### Variable

A pointer to value.

```js
let price = 5;
let name = "John";
```

![Variable](images/variables.jpg)
<!-- .element: style="text-align:center" -->

---

### Examples:

```js
let priceCoffee = 2;
let priceCappuccino = 3;
let customer = "John";
let greeting = "Hello";
let likesCarlo = true;
let hasKids = false;
```

Can you guess how we can define a variable?

---

### How do we define a variable?

We write:
* `let`
* the variable name
* `=`
* the value we want
* `;`

---

### Variables are variable

You can change the value of a variable using the assignment operator (`=`):

```js
let temperature = 24;   // define a variable, initialize it to 24
temperature = 25;       // assign a new value (25) to the variable
temperature = 23;       // now temperature is 23
```

We define a variable once, then we can change it as often as needed.

---

### Variables

Variables can be used wherever we can use values:

```js
let pricePerTicket = 8;
let friends = 3;
let totalPrice = friends * pricePerTicket;
```

---

### Why do we use variables?

We use variables

* to give names (meaning) to values. `42` could mean a person’s age or shoe size.
* to avoid repetitions. We define the variable once with a value, and use it often.

---

### Variable names

You can name your variables in a lot of ways:

* You can use letters, numbers, and underscore _ (spaces are *not* allowed!)
* Variable name cannot start with a number.

Valid variable names:
```js
let element = 3;
let element3 = 5;
```

Invalid variable names:
```js
let 2squared = 4;
let element-1 = 0;
let full name = 'Anakin Skywalker';
```

---

Giving good and descriptive names to your variables is very important!

Good variable names make the code easier to understand by other developers, and even by yourself!

Valid but not very descriptive variable names:

```js
let a = 0;
let _12 = 0;
let asldjf = 0;
let thisisareallylongvariablename = 0;
```

---

In this course, and JavaScript in general, we use 'camelCase':

- `isStudent`
- `favoriteBook`
- `likesGermanFood`

---

Variable names are case sensitive:

```js
let name = 'John';
let Name = 'John';
let NAME = 'John';
```

These are 3 different variables.

---

### naming Boolean variables

When naming variables that point to a boolean, we can use a name that describes a yes/no question:

- `isMarried`
- `hasKids`
- `canFly`

---

### try it!

Create some variables:

* one for your full name
* one for your age
* one for your favorite city
* one for whether you can speak German or not
* and anything else you can think of :)

In the JavaScript console, enter the name of the variable. Do you see its value?

Bonus: Change the value of one of the variables that you defined.

---

# Logical Operators

---

### Logical Operators

These operators work on `boolean` values:

* `&&` AND
* `||` OR
* `! ` NOT

---

### Logical NOT !

Logical NOT negates a boolean:

```javascript
!true  // false
!false // true
```

---

Example:

```js
let hatesPineapple = false;
let canEatPizzaHawaii = !hatesPineapple;
```

---

### Quiz - Do we go biking or swimming?

```js
let temperature = 28;
let isWarm = temperature > 25;
let goSwimming = isWarm;
let goBiking = !isWarm;
```

Answer: we go swimming <!-- .element: class="fragment" -->

---

### Try to prevent double negations

```js
let isNotWarm = temperature <= 25;
let goSwimming = !isNotWarm; // No. Just no. Please Don't.
```

Better:

```js
let isWarm = temperature > 25;
let goSwimming = isWarm;
```

---

### Logical AND &&

AND takes two booleans and returns `true` if **both** booleans are `true`

```js
true  && true   // true
true  && false  // false
false && true   // false
false && false  // false
```

---

### Example - AND &&

I need bread **and** cheese to make a cheese toast

```js
let hasCheese = true;
let hasBread = true;

let canMakeCheeseToast = hasCheese && hasBread;
// what's the value of canMakeCheeseToast ?
```

`true` <!-- .element: class="fragment" -->

---

### Logical OR ||

OR takes two booleans and returns `true` if **at least one** is `true`

```js
true  || true   // true
true  || false  // true
false || true   // true
false || false  // false
```

---

### Example - OR ||

To apply to a job, I need to know German **or** English

```js
let knowsGerman = false;
let knowsEnglish = false;

let canApply = knowsGerman || knowsEnglish;
// what's the value of canApply?
```

`false` <!-- .element: class="fragment" -->

---

### Task

A job add requires JavaScript or Python knowledge. Can you finish the code below?

```js
let canProgramJavaScript = true;
let canProgramPython = true;

let canApply = // ???
```

---

### Task

```js
let pricePerTicket = 8;
let friends = 3;
let totalPrice = friends * pricePerTicket;
```

* Copy/paste this code and look at the `totalPrice` variable in the console.
* Add a new variable that points to the price of popcorn (7 EUR).
* Can you add the price for one popcorn to the `totalPrice` variable?
* Create a new variable containing your total budget (30 EUR).
* Create a new variable that is `true` if the budget is high enough for cinema, `false` otherwise.
* BONUS: Create a new variable `isCheap` that is `true` if the price of popcorn is less than 5 EUR and the price for a ticket is less than 7 EUR.

<!-- .slide: style="font-size:80%" -->

---

### Solution

A job add requires JavaScript or Python knowledge. Can you finish the code below?

```js
let canProgramJavaScript = true;
let canProgramPython = true;

let canApply = canProgramJavaScript || canProgramPython;
```

---

```js
let pricePerTicket = 8;
let friends = 3;
let totalPrice = friends * pricePerTicket;
let popcornPrice = 7;
totalPrice = totalPrice + popcornPrice;
let budget = 30;
let enoughMoney = budget >= totalPrice;
let isPopcornCheap = popcornPrice < 5;
let isTicketCheap = pricePerTicket < 7;
let isCheap = isPopcornCheap && isTicketCheap;
```
