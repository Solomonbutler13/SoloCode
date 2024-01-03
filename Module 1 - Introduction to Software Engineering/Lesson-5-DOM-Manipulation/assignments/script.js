// COUNTER EXERCISE

// Select the body element from index.html

// Set an attribute of 'style' to the body tag and add a background color of anything other than white

/* -------------------------------------------------------------------------- */

// Create an h1 element

// Append a new h1 element to the body element as a child

// Add text to the h1 element 

// Assign the background color of this element to something unique

// Set a new style attribute to the h1 element

// Add font size to the h1Element

// Set the default text to the number zero

/* -------------------------------------------------------------------------- */

// Create a button element to increment the h1 text

// Append the button element to the body element

// Add text to the boxButton

// Add a class attribute to boxButton

/* -------------------------------------------------------------------------- */

// Create another button element to decrement the h1 text

// Add the button element to the body element

// Add text to the button element

// Add a class attribute of style to the button element

/* -------------------------------------------------------------------------- */
// ADD BUTTON FUNcTION
// Create functionality that, when you click this button it increases the h1 value

// Create functionality that, when you click this button it decreases the h1 value


/* -------------------------------------------------------------------------- */
// DELETE BUTTON FUNCTION 

// Get the h1 element
const counterElement = document.getElementById("counter");

// Get the increment and decrement buttons
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

// Set initial count
let count = 0;

// Update the text content of the h1 element
function updateCounter() {
    counterElement.textContent = count;
}

// Increment the count and update the counter
incrementButton.addEventListener("click", function() {
    count++;
    updateCounter();
});

// Decrement the count (if greater than zero) and update the counter
decrementButton.addEventListener("click", function() {
    if (count > 0) {
        count--;
        updateCounter();
    }
});