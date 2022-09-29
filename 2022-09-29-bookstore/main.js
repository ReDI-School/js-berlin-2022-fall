/* 
    You work as a developer at an online bookstore.
    The sales team sent you some data regarding the sales of the last 4 months and you have to prepare a report for the web.
    Instructions:
    - all the variables provided are set to 0, so in order to check that your code works you have to change them to different values
    - if you think you need additional variables, feel free to create them
    - some variables must be used in more than one exercise
    - every exercise mentions if...else statement, but in some cases you might need to use also the "else if"
*/

let sales = 0;

/*
    Exercise 1:
    You want to check that the total sales are within a certain range.
    - complete the if...else statement so that the result is true if sales are greater than or equal to 70 and less than or equal to 99
*/

if () {
  console.log("Sales are: " + sales + ". Are they between 70 and 99?", true);
} else {
  console.log("Sales are: " + sales + ". Are they between 70 and 99?", false);
}

/*
    Exercise 2:
    You receive a report with the sales from the Sci-fi department and the Crime department.
    You want to check that the sales of at least one of the two departments are within a certain range, otherwise it's bad news for the store
    - write an if...else statement that outputs true if at least one of the 2 sales amount is in the range between 200 and 500, false otherwise
    - test with different values
    */

let sciFiDepartmentSales = 0;
let crimeDepartmentSales = 0;

if () {
  console.log(true);
} else {
  console.log(false);
}

/*
    Exercise 3:
    You also receive the report from the Comic Book department.
    Using also the variables from Exercise 2, check that at least one of the three departments sold enough.
    - write an if...else statement that outputs true if at least one of the 3 sales amount is in the range between 200 and 500, false otherwise
    - test with different values
*/

let comicBookDepartmentSales = 0;

/*
    Exercise 4:
    This year, two departments have gone pretty well in your store: cooking books and drawing books.
    You want to check if both of them managed to sell more than 300 units each.
    - write an if...else statement that outputs true if the 2 sales amounts are both greater than 300, false otherwise
    - test with different values
*/

let cookingDepartmentSales = 0;
let drawingDepartmentSales = 0;

/*
    Exercise 5:
    You also want to know which one between the cooking books and drawing books sold more.
    - write an if...else statement that outputs the value of the largest number and the name of that department
    example: cookingDepartmentSales = 400, drawingDepartmentSales = 500 - output: "Drawing Department", 500
    - test with different values
*/



/*
    Exercise 6:
    You also want to know which one between the sci-fi, crime and comic books sold more.
    - write an if...else statement that outputs the value of the largest number and the name of that department
    - test with different values
*/





/*
    Exercise 7:
    You want to check if the sales of sci-fi, crime and comic books all together surpassed the sales of the same period last year and if they reached the set goal for this year.
    - calculate the sum of the 3 department sales
    - write an if...else statement that outputs:
        - a sad face, if sales are less than the ones from last year
        - "good, but we can do better", if sales are greater than the sales from last year, but less than the goal
        - "YEEEEEEESSSS!", if sales are greater than the goal
*/

let totalSalesLastYear = 0;
let totalSalesGoal = 0;

/*
    Exercise 8:
    You have to add a new feature to the website that shows a custom greeting message if a user is logged in.
    - create a variable to store the name of a user
    - write an if...else statement to output the message "Hello, [username]!" if a user is logged in, simply "Hello" otherwise.
    - create a variable for the name of the user and a variable to specify if the user is logged in or not
*/

/*
    Exercise 9:
    The marketing is running a promotion on weekends.
    - write an if...else statement to apply a 50% discount to the price of books if the day is Saturday or Sunday
*/

let bookPrice = 16;
