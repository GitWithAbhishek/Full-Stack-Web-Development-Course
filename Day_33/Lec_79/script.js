const a = prompt("Enter a number:");
const b = prompt("Enter another number:");

function divide(a, b) {
    try {
        // Try to perform division
        let result = a / b;
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        console.log("Result:", result);
    } catch (error) {
        // Handle the error
        console.log("Error:", error.message);
    } finally {
        // Always runs, whether error occurred or not , even after a return statement
        console.log("Division operation completed.");
    }
}

// Test the function
divide(a, b);   // User input division