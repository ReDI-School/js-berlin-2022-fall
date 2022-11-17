<!-- .slide: id="lesson14" -->

# Basic Frontend - Fall 2022

Lesson 14, Thursday, 2022-11-17

---

### Today's Contents

* New data type: `null`
* JavaScript Object Notation (JSON)
* `fetch` API

---

### Null

* There's one data type that we haven't learned yet: `null`
* `null` is like `undefined`. It indicates the absence of a value.
* `null` can be used to indicate an *intentional* absence of an object value.
* Example: `document.getElementById("NoExist");` returns `null`

---

### Object notation

In JavaScript, we can put all keys of objects in quotes. This is purely optional:

```js
let me = {
    "name": "John",
    lastName: "Doe",
    "hobbies": [ "Eat", "Sleep" ]
};

console.log(me.name); // "John"
```

---

### JSON

* JSON stands for **J**ava**S**cript **O**bject **N**otation
* It is a string representation of a JavaScript object
* All *keys* in our key value pairs must be in quotes
* Must contain only these types:
   * `string`, `number`, `boolean`, `array`
   * `null`
   * another JSON `object`
* These types are **forbidden**:
   * `function`, `undefined`

---

### Why JSON?

* When we exchange data between a browser and a server, we can only exchange string (not objects, arrays, numbers, booleans...)
* JSON is a string representation of JavaScript objects
* JSON can be easily transferred (and stored)
* The notation is very close to JavaScript objects, easy to handle from JavaScript. No complex transformation required.
* More info: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

---

### JSON example

```json
{
    "name": "Bob",
    "instructor": true,
    "hobbies": [ "bike", "jog" ],
    "age": 42,
    "workAddress": {
        "street": "Invalidenstraße",
        "number": 116,
        "city": "Berlin"
    }
}
```

---

### Web APIs

There are a lot of services on the internet that transfer data via JSON.

Want to know all countries that speak Spanish? Try:

https://restcountries.com/v3.1/lang/spa

Find more at https://www.programmableweb.com

---

OK great, but how can we access that from JavaScript?

---

### The dark past: XMLHttpRequest

```js
let url = 'https://something.com/';

function load(url, callback) {
 let xhr = new XMLHttpRequest();

 xhr.onreadystatechange = function() {
   if (xhr.readyState === 4) {
     callback(xhr.response);
   }
 }

 xhr.open('GET', url, true);
 xhr.send(null);
}
```

---

### fetch - Promises

```js
fetch("http://something.com").then(function(response) { return response.json(); }).then(function(json) { console.log("got json: " + json); });
```

---

### fetch - async/await

```js
async function fetchMyApi() {
  let response = await fetch("http://something.com");
  let result = await response.json();
  console.log(result);
}
```

---

### async/await

* Fetching data from the internet might take a lot of time
* We must not block our browser while waiting for the reply!
* `XMLHttpRequest` was working with callbacks. The API is ugly, error-prone and difficult to use
* `fetch` is a replacement. It returns a `Promise` object and doesn't require callbacks.
* Promises require a `then` method to be called to get the result. This leads to long lines with so called "Promise Chains".
* `fetch` with `await/async` "hides" the complexity of `Promise`.

<!-- .slide: style="font-size:80%" -->

---

### async/await

* JavaScript introduced two new keywords: `async` and `await`
* We can use the `await` keyword only in `async` functions!
* `await` executes the call, continues executing the code which comes after the `async` function
* once the result of the `await` is available, the code in the `async` function resumes
* This allows us to execute long-running functions without blocking the browser

---

### Full fetch example

```js
async function fetchMyApi() {
  // connects to something.com
  let response = await fetch("http://something.com");
  // downloads the resource, converts JSON to an object
  let result = await response.json();
  console.log(result);
}

fetchMyApi();
```

---

### Task 1

* Open the following URL in your browser:
* https://restcountries.com/v3.1/lang/deu
* Describe the output

---

### Task 2

Now fetch https://restcountries.com/v3.1/lang/deu from JavaScript.

Print the result to the console.

---

### Task 3

Fetch https://restcountries.com/v3.1/lang/deu from JavaScript.

Print the names of all the German speaking countries to the console.

---

### Task 4

Show the name, capital, population and the flag of every country returned by https://restcountries.com/v3.1/lang/deu on your web page.

BONUS: Add an `<input>` field where the user can enter a language, and a "search" button. When the user clicks "search", `fetch` and show the details about the countries in the input field.

Example: User enters `spa` and hits "search". Use fetch to get https://restcountries.com/v3.1/lang/spa and show the details of the countries on your page.

---

### Solution Task 3

```js
async function fetchCountries() {
  let response = await fetch("https://restcountries.com/v3.1/lang/deu");
  let result = await response.json();
  for (let i = 0; i < result.length; i++) {
    console.log(result[i].name);
  }
}
fetchCountries();
```
