<!-- .slide: id="lesson15" -->

# Basic Frontend - Fall 2022

Lesson 15, Tuesday, 2022-11-22

---

<!-- .slide: id="libraries" -->

# Libraries

---

What is a library?

* General definition: A collection of resources used for software development
* More specifically, libraries usually relate to one specific type of functionality that you require for your app to function that (usually) someone else has written.
* Examples: chart.js, d3.js, Plotly, Leaflet, ....

---

### Loading a library

Up until now, this was our standard pattern:

```html
<html>
  <body>
    Hello from HTML!
    <script>
        console.log("Hello from JavaScript!");
    </script>
  </body>
</html>
```

---

Javascript can also be loaded from a file inside the same directory as the HTML file:

```html
<html>
  <body>
    <script src="main.js"></script>
  </body>
</html>
```

You can now write all your JavaScript in `main.js`.

---

### Multiple scripts

We can add as many scripts as we want:

```html
<html>
  <body>
    <script src="utilities.js"></script>
    <script src="recipes.js"></script>
    <script src="main.js"></script>
  </body>
</html>
```

This allows us to split long scripts into pieces

---

### Multiple scripts

* If we have multiple script tags, we can use all global variables and global functions from all scripts that are added _before_ our script.
* Scripts are run in order!
* In the example on the last slide, `recipes.js` can use all globals from `utilities.js`, and `main.js` can use all globals from `recipes.js` and `utilities.js`

---

### Scripts in header vs. body

We put our _own_ scripts at the bottom of the `<body>` tag. This allows us to access all HTML elements via DOM API

We can put scripts also in the `<head>` tag. These are loaded _before_ the page is rendered:

```html
<html>
  <head>
    <script src="utilities.js"></script>
  </head>
  <body>
    <div id="myDiv">
      <!-- Elements go here -->
    </div>
    <script src="main.js"></script>
  </body>
</html>
```

---

### Remote scripts

So far, we loaded scripts only from our local file system.
However, scripts can also be remote addresses. In the example below, we load the `plotly.js` library:

```html
<html>
  <head>
      <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
  </head>
</html>
```

---

### Plotly

* Plotly is a graphing library
* It is Open Source (MIT license)
* When we load `plotly-latest-min.js`, we have access to a single global object called `Plotly`
* Documentation: https://plotly.com/javascript/getting-started/


---

### Plotly example

```html
<html>
  <head>
    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
  </head>
  <body>
    <div id="myGraph"></div>
    <script>
      let dataSet1 = {
        x: [1,  2, 3,  4],
        y: [0, 12, 8, 17],
        type: 'scatter'
      };

      Plotly.newPlot('myGraph', [dataSet1]);
    </script>
  </body>
</html>
```

---

### Task 1

Here is an array of the temperature data for Berlin from 1st of May, 2022. Can you plot them using Plotly?

```js
let temperatures = [
    13.260074,
    14.244656,
    13.832573,
    15.160488,
    16.392155,
    14.82882,
    17.242157,
    14.527569,
    13.71507,
    18.271322,
    21.44132,
    17.628407,
    15.882572,
    15.911738,
    15.734656,
];
```

---

### Task 2

Create a bar graph for the population of countries.

See https://plotly.com/javascript/bar-charts/ for an example.

You can use the data from restcountries.com, e.g.:

https://restcountries.com/v3.1/alpha?codes=de,fr,be

You can choose your own countries, see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 for codes.

---

### Bonus

Let the user choose a language, then plot the population of the countries that speak that language.

You can re-use last week's bonus task.
