// Example employee names array
const employeeNames = ["Joy", "Meena", "Anne", "Xi", "Veena", "Vanitha"];

function nameLength(employeeNames) {
    // Filter employee names with more than 4 characters
    const filteredNames = employeeNames.filter(name => name.length > 4);
    // Join the filtered names into a single string separated by space
    const result = filteredNames.join(' ');
    // Display the result
    console.log(result);
}

// Call the function with the example array
nameLength(employeeNames);
