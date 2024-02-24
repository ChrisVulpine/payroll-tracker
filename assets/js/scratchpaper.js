
function calculateAverage(numbers) {
    let sum = 0;

    // Calculate the sum of all numbers in the array
    for (let number of numbers) {
        sum += number;
    }

    // Calculate the average
    let average = sum / numbers.length;

    return average;
}

// Example array of numbers
let numbers = [10, 20, 30, 40, 50];

// Calculate the average of the numbers array
let avg = calculateAverage(numbers);

console.log("Average: " + avg);