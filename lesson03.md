<!-- .slide: id="lesson3" -->

# Basic Frontend - Fall 2022

Lesson 3, Tuesday, 2022-09-27

---

### Recap

Name the operators:

```js
&&
<
===
||
+
**
>=
```

---

### Recap

Name the operators:

```js
&&    // logical AND
<     // less than
===   // strict equality
||    // logical OR
+     // addition
**    // exponentiation
>=    // greater than or equal
```

---

# Recap

| Group | Operators | Example |
| ----- | --------- | ------- |
| Numerical Operators | `+` `-` `*` `/` `**` | `5 + 4 * 3`<br/>`7 / 2 - 2`<br/>`"Hello" + " World"` |
| Comparison Operators | `===` `!==` `<` `>` `<=` `>=` | `30 !== 25`<br/>`20 >= 18` |
| Logical Operators | <code>&#124;&#124;</code> `&&` `!` | `true && !false` |

---

### Course overview

* Operator associativity
* Operator precedence
* VSCode
* Conditional statements

---

### Operator associativity

What happens when there's more than one of the **same** operator in one line?

```js
1 / 2 / 2
```

Answer: 0.25 <!-- .element: class="fragment" -->

Most operators are left-to-right associative. If in doubt,
consult [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
<!-- .element: class="fragment" -->

---

### Quiz

What's the result?

```js
2 ** 3 ** 2
```

Answer: 512 (exponentiation is right-to-left associative!) <!-- .element: class="fragment" -->

---

### Hint: Use Parentheses

Note: Round parentheses (or "grouping operator") `()` can be used to group expressions:

```js
(2 ** 3) ** 2  // 64
2 ** (3 ** 2)  // 512
```

---

### Operator precedence

What happens if we mix **different** operators in one line? What could the result be?

```js
2 + 2 * 2
```

Result: `6` <!-- .element: class="fragment" -->

---

* JavaScript supports precedence (priority) for operators
* Operators with higher precedence are evaluated before operators with lower precedence
* Full List: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
* Multiplication (15) has higher precedence than addition (14) - multiplication wins

---

Parentheses have the highest precedence (21) and always win:

```js
(2 + 2) * 2   // 8
2 + (2 * 2)   // 6
```

When in doubt, use parentheses!

---

### Quiz

What is `x` ?

```js
let x = 4 + 6 < 3 + 8;
```

Result: `true` <!-- .element: class="fragment" -->

---

### Best practice: Use extra variables

Which of the two is more readable?

```js
let x = 4 + 6 < 3 + 8;
```

```js
let sum1 = 4 + 6;
let sum2 = 3 + 6;
let x = sum1 < sum2;
```

---

### Quiz

What is `x`?

```js
let x = 5 < 6 < 7
```

* Answer: It's pointless  <!-- .element: class="fragment" -->

---

Let's break it down:

```js
5 < 6 < 7
(5 < 6) < 7   // 5 < 6 is true
true < 7      // pointless comparison!
```

Comparing a boolean to a number makes no sense. Do not chain comparison operators.

---

### Quiz

What does the following return?

```js
5 === 5 === 5
```

```js
(5 === 5) === 5
true === 5         // Pointless. Returns false
```

---

# VSCode

So far, we've used the JavaScript console to enter JavaScript code. This is great for trying small snippets of code (REPL: Read-Eval-Print-Loop).

But what if we want to write something more complex, e.g. more than one line?

---

Create a new HTML page and open it in the browser, for example:

1. Open VSCode
1. Click on *File* -> *New File*
1. Click on *File* -> *Save File*, save it as e.g. `index.html`
1. Enter `!` and confirm with the *Enter* key to create a skeleton HTML file
1. Right click on the tab with the name `index.html`, choose *Copy Path*
1. Paste the path to the browser

---

Your HTML body now looks something like this:

```html
<body>
    Test Test Test
</body>
```

How do we get JavaScript into the page?

---

We can use the `<script>` tag to include JavaScript code:

```html
<body>
    Test Test Test
    <script>
        1 + 1
    </script>
</body>
```

---

### How to modify HTML from JavaScript?

The browser defines a global variable `document.body.textContent` for us. We can assign a string to this variable to change the text of the body:

```html
<body>
    Test Test Test
    <script>
        document.body.textContent = "Hello from JavaScript";
    </script>
</body>
```

What do you observe?

---

### Practice

```js
let pricePerTicket = 8;
let friends = 3;
let totalPrice = friends * pricePerTicket;
let popcornPrice = 7;
totalPrice = totalPrice + popcornPrice;
```

Copy the code above to your HTML. Output the `totalPrice` variable to the body of the page.
Try changing some variables above, reload the browser and see what happens.

---

<!-- .slide: id="if" -->
# Conditional Statements

---

### Conditional Statements

Up until now, we wrote code line by line.

But what if I want to run some code only if a certain condition is true or false? For example, only run code when the user is logged in?

![if](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals/cookie-choice-small.png)<!-- .element height="200px" style="position: fixed; left: 30%" -->

---

### If statement

```js
if (condition) {
  // block of code that
  // will run ONLY if
  // condition is true
}
```

---

### If statements

```js
if (condition) {
  // your code here
}
```

* `condition` must be a boolean
* The code in the block is executed only if the boolean is `true`
* If the boolean is `false`, the code block is _not_ executed

---

### if Statements - Examples

```js
if (food === 'pizza') {
  document.body.textContent = "My favorite food is pizza!";
}
```

```js
if (temperature > 20) {
  document.body.textContent = "Yay, it's warm again!";
}
```

```js
if (canSpeakFrench) { // same as: canSpeakFrench === true
  document.body.textContent = "Bonjour!";
}
```

---

### if statements - quiz

What does the code below show on the HTML page?

```js
let language = "German";

if (language === "German") {
  document.body.textContent = "Guten Tag";
}
if (language === "French") {
  document.body.textContent = "Bonjour";
}
```

`"Guten Tag"`
<!-- .element: class="fragment" -->

---

### if statements - quiz

What does the code below show on the HTML page?

```js
let language = "Spanish";

if (language === "German") {
  document.body.textContent = "Guten Tag";
}
if (language === "French") {
  document.body.textContent = "Bonjour";
}
if (language !== "German" && language !== "French") {
  document.body.textContent = "Good day";
}
```

`"Good day"`
<!-- .element: class="fragment" -->

---

### Code Blocks: {}

Code blocks contain the code between `{` and `}`, and should be indented for better readability:

```js
if (language === "German") {
  // In VSCode, you can indent code by pressing the "Tab" key,
  // or right-click and choose "Format Document"
  document.body.textContent = "Guten Tag";
}
```

---

### Code Blocks: {}

All variables defined in code blocks only exist inside the block (technical term: “block scope”)

```js
let name = "John Doe";

if (name === "John Doe") {
  let greeting = "Hi dude";
}
if (name === "Mary Doyle") {
  let greeting = "Hello my dear";
}

document.body.textContent = greeting; // ERROR!
```

---

### Code Blocks: {}

Correct solution:

```js
let name = "John Doe";

let greeting;
if (name === "John Doe") {
  greeting = "Hi dude";
}
if (name === "Mary Doyle") {
  greeting = "Hello my dear";
}

document.body.textContent = greeting; // "Hi dude"
```

---

### Quiz

What does the code below show on the HTML page?

```js
let food = "broccoli";

if (food === "pizza") {
    document.body.textContent = "yum yum";
}
```

Solution: Nothing, since the condition in the `if` is `false`
<!-- .element: class="fragment" -->

---

### Quiz

What does it output?

```js
let age = 42;

if (age >= 18) {
    document.body.textContent = "you are allowed to drive a car";
}
if (age < 18) {
    document.body.textContent = "you are not allowed to drive a car";
}
```

Solution: First condition is `true`, so it outputs "you are allowed to drive a car"
<!-- .element: class="fragment" -->

---

# Task

Define a variable `hour` and set it to `17`. Make an `if` statement that outputs `good day` if `hour` is less than 18. Now change `hour` to `19` and run the code again. What changed?

Create two variables for your and your neighbor's age. Output "I am younger" if your age is smaller than your neighbor's age.

---

# Task

Abdullah invented a game where the player with the highest score wins. The score is the player's height (in cm) plus five times the player's age.

1. Create variables for the heights and ages for you and a person next to you
1. Calculate the scores for you and your neighbor
1. Decide who wins, output the winner and their score to the `body` of your HTML. Remember: there can be a draw (both players with the same score).
