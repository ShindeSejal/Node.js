function printTriangle(rows) {
    // Outer loop for rows
    for (let i = 1; i <= rows; i++) {
        let row = '';
        // Inner loop for columns in each row
        for (let j = 1; j <= i; j++) {
            // Add asterisks to form the triangle
            row += ' ';
        }
        // Print each row
        console.log(row);
    }
}

// Number of rows in the triangle
const rows = 9;
printTriangle(rows);
