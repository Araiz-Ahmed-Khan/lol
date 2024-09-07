let counter = 0;

function count(num) {
    // Increment or decrement the counter
    counter += num;

    // Update the content of the <h1> element with the new counter value
    document.getElementById("counterDisplay").innerHTML = counter;
}
