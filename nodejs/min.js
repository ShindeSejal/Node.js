const numbers = [5, 3, 8, 2, 9, 1,0,12,45];
function min(numbers) {
    if (numbers.length === 0) {
        return undefined; // Return undefined if the array is empty
    }

    let minNum = numbers[0]; // Initialize minNum with the first element of the array

    // Loop through the array to find the minimum number
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < minNum) {
            minNum = numbers[i]; // Update minNum if a smaller number is found
        }
    }

    return minNum;
}

// Example usage:

console.log(min(numbers)); // Output: 1
