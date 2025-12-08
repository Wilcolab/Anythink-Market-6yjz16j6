/**
 * Adds two numbers and returns their sum.
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The sum of a and b
 * @throws {Error} If inputs are not valid numbers
 */
function addNumbers(a, b) {
    // Check for null or undefined
    if (a === null || a === undefined) {
        throw new Error('First argument is null or undefined. Both arguments must be numbers.');
    }
    
    if (b === null || b === undefined) {
        throw new Error('Second argument is null or undefined. Both arguments must be numbers.');
    }
    
    // Check if inputs are numbers (typeof check)
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error(`Invalid input types. Expected numbers but got ${typeof a} and ${typeof b}.`);
    }
    
    // Check for NaN
    if (isNaN(a) || isNaN(b)) {
        throw new Error('Invalid input: NaN is not a valid number.');
    }
    
    return a + b;
}

module.exports = addNumbers;