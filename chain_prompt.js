/**
 * Converts a string to kebab-case format.
 * 
 * @param {string} input - The string to convert to kebab-case
 * @returns {string} The input string converted to kebab-case
 * @throws {TypeError} If input is not a string
 * @throws {Error} If input is an empty string
 * 
 * @example
 * toKebabCase('HelloWorld'); // returns 'hello-world'
 * toKebabCase('camelCaseString'); // returns 'camel-case-string'
 * toKebabCase('PascalCaseString'); // returns 'pascal-case-string'
 * toKebabCase('snake_case_string'); // returns 'snake-case-string'
 * toKebabCase('String with spaces'); // returns 'string-with-spaces'
 */
function toKebabCase(input) {
    // Input validation: Check if input is a string
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }
    
    // Input validation: Check if input is empty
    if (input.trim().length === 0) {
        throw new Error('Input cannot be an empty string');
    }
    
    // Basic functionality: Convert to kebab-case
    return input
        .trim()
        // Replace spaces and underscores with hyphens
        .replace(/[\s_]+/g, '-')
        // Insert hyphen before uppercase letters (for camelCase/PascalCase)
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        // Convert to lowercase
        .toLowerCase()
        // Remove any duplicate hyphens
        .replace(/-+/g, '-')
        // Remove leading/trailing hyphens
        .replace(/^-+|-+$/g, '');
}

// Export the function for use in other modules
module.exports = toKebabCase;