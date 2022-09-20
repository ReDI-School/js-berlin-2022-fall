<!-- .slide: id="lesson1" -->

# Basic Frontend - Fall 2022

Lesson 1, Tuesday, 2022-09-20

---

### Lesson overview

- Introduction to JavaScript
- Basic JavaScript data types
- Basic JavaScript operators

---

# Welcome to JavaScript!

---

> It does not matter what we cover, but what you discover
>
> \- ~Noam Chomsky~ Victor Weisskopf

(recently learned that the quote is by Victor Weisskopf, a famous physicist, but it's often attributed to Chomsky because he mentioned in some interviews. Still a good quote.)
<!-- .element: class="fragment" data-fragment-index="2" -->

---

### Questions

- don't be shy (or scared), ask questions!
  - as many as possible
- interrupt us
- there are no bad questions
- ask us to repeat
- if something is not clear to you, it's likely that it's not clear for others

---

### Pillars of Web Development

| HTML | CSS | JavaScript |
| ---- | --- | ---------- |
| ![HTML5](images/HTML5_Logo.svg) <!-- .element height="64px" width="64px" --> | ![CSS3](images/css3.svg) <!-- .element height="64px" width="64px" --> | ![JS](images/javascript-logo.svg) <!-- .element height="64px" width="64px" --> |
| *Content* |  *Presentation* | *Dynamic Effects* |
| Nouns | Adjectives | Verbs |

```html
<p>Hey</p>  <!-- HTML: Adds a paragraph -->
```

```css
p { color: red; }  /* CSS: Makes the paragraph red */
```

```js
p.remove(); // JavaScript: removes the paragraph
```

---

### JavaScript (JS) - What is it?

* JS is a *programming language* (*scripting language*)
* JS allows you to implement dynamic content and effects

---

### JavaScript - "Full Stack"

* For servers, back-end: [Node.js](https://nodejs.org/en/), [Deno](https://deno.land/), ...
* For mobile apps: [React Native](https://facebook.github.io/react-native/), [Cordova](https://cordova.apache.org/), ...
* For desktop apps: [PWAs](https://developers.google.com/web/progressive-web-apps), [Electron](https://www.electronjs.org/)

---

### Tools

We'll be using these tools during our course:

* [Chrome Browser](https://www.google.com/chrome/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [MDN Web Documentation](https://developer.mozilla.org/en-US/)

Please install [Visual Studio Code](https://code.visualstudio.com/) for the next lesson

---

### Additional Material

* [javascript.info](https://javascript.info/) - tutorials with nice (often visual) explanations
* [freecodecamp.org](https://www.freecodecamp.org/) - full free courses on many topics
* [udemy.com](https://www.udemy.com): Introduction to JS (course)
* [codeacademy.com](https://www.codecademy.com): Introduction to JS (another course)
* [edabit.com](https://edabit.com): Learn JavaScript with interactive challenges and external resources
* [learnjavascript.online](https://learnjavascript.online): very good online course, but costs 40€

---

### The standard

* [http://www.ecma-international.org/ecma-262/10.0/index.html](http://www.ecma-international.org/ecma-262/10.0/index.html)
* Standardized Specification of JavaScript
* Very technical, not good for learning

---

### Names of Special Characters

|||
| --- | --- |
| `(` Parentheses `)` | `<` Angle brackets `>` |
| `{` Braces, or curly braces `}` | `&` Ampersand `&` |
| `[` Brackets, or square brackets `]` | <code>&#124;</code> Vertical bar, or pipe <code>&#124;</code> |
| `;` Semicolon `;` | `:` Colon `:`  |
| `'` Single quote `'`| `#` Hash or number sign `#` |
| `"` Double quote `"` | `` ` `` Back tick `` ` `` |
| `_` Underscore `_` | `*` Asterisk `*` |
| `/` Slash, or Forward slash `/` | `~` Tilde `~` |
| `\` Backslash `\` | `^` Caret or circumflex `^` |

---

<!-- .slide: id="basic-data-types" -->

# Basic Data Types

---

### Let's start with JavaScript!

* Open Google Chrome
* Hit `F12` key
* Click on **Console**
* Try entering something

What did you try? What did you see?
<!-- .element: class="fragment" data-fragment-index="2" -->

---

### Data Types

* JavaScript seems to be picky about the data we enter
* In order to understand how to enter data, we need to know about **Data Types**

---

### Data Types: Number

* One basic data type is called **Number**
* A Number can be a positive *integer*: `1`, `2`, `42`
* or a negative *integer*: `-1`, `-2`, `-42`)
* or a positive or negative *floating point*: `0.25`, `-4.5`

---

### Try it out

Open the console, and type in the following numbers:

* Your age
* Your height (in meter)

---

### Numerical Operators

Basic mathematical operators:

* `+` addition
* `-` subtraction
* `*` multiplication
* `/` division
* `**` exponentiation

---

### Practice

Let's say we want to go to the cinema with some friends (choose any number).

How many people are going to the cinema in total? Enter it to JavaScript Console.
<!-- .element: class="fragment" -->

A ticket to watch the movie costs 8€, let JavaScript compute how much we have to pay in total.
<!-- .element: class="fragment" -->

Harald and Woytek volunteered to pay for the tickets. Use JavaScript to compute how much each has to pay.
<!-- .element: class="fragment" -->

---

### Data Types

A data type is defined by two things:

1. A set of values
1. A set of operators

The operators are used on the values.

`2` and `3` are example *values* for the `Number` data type. `+` is an *operator* that we can use to perform an addition on `2` and `3`.

When we say "Number data type", we mean all the possible number values plus all the operations we can perform with those values.

---

### Data Type: String

* A **String** is a sequence of characters
* It starts and ends with a `"` double quote
* **Or** it starts and ends with a `'` single quote
* Examples: `"Hello"`, `'Mellina'`

---

### Try it out

Open the console, and type in the following strings:

* Your first name
* Your favorite food
* Name of your favorite book / tv series / anime

---

### Strings and Quotes

Strings start and end with  (`'`) or (`"`). But what if we want to add a quote within our string?

```js
"He said: "Hello""
```

We must escape the quote with a backslash (`\`).

A backslash in a string means that the character right after the backslash is special:

```js
"He said: \"Hello\""
```

---

### Special Characters

If you want a backslash in a string, you need to escape it: `"\\"`

There are some special characters in strings, for example:

* `"\n"` - new line
* `"\t"` - tab

---


### Quiz: Which strings are correct?

```plaintext
"Hello"
'World'
"He said "hello" to me"
'Let's go!'
""
'This is a\nnew line'
'This is a backslash: \'
```

---

### Solution

```js
"Hello"                        // CORRECT
'World'                        // CORRECT
"He said "hello" to me"        // WRONG - unescaped quotes
'Let's go!'                    // WRONG - unescaped '
""                             // CORRECT
'This is a\nnew line'          // CORRECT
'This is a backslash: \'       // WRONG - escaped '
```

---

### String operators

The addition operator (`+`) can be used to add (concatenate) two strings:

```js
"a" + "b"    // results: "ab"
```

---

### String operators

The addition operator can be used on Strings and Numbers:

```js
1 + 1                // is 2
"hello" + " world"   // is "hello world"
```

---

### Importance of data types

```js
1 + 1        // is 2
"1" + "1"    // is "11"
```

Make sure to always choose the correct data type for your data,
since the operators in JavaScript behave differently depending on the data type.

---


### Data Type: Boolean

* **Boolean** describes a yes/no situation
* in JavaScript, we use `true` or `false`

---

### Practice

Open the console, and type in the following:

* `true`
* `false`

Why would we dedicate an entire data type for just two values?
<!-- .element: class="fragment" -->

---

### Comparison operators

* `===` strict equality
* `!==` strict inequality
* `>` greater than
* `<` less than
* `>=` greater or equal
* `<=` less or equal

All of these can only return `true` or `false`
