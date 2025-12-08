/**
 * Converts a string to camelCase format.
 * 
 * This function takes a string with words separated by spaces, hyphens, underscores,
 * or other delimiters and converts it to camelCase, where the first word is lowercase
 * and subsequent words are capitalized with no spaces.
 * 
 * @param {string} str - The input string to convert to camelCase
 * @returns {string} The camelCase formatted string
 * 
 * @example
 * // Convert a space-separated string
 * toCamelCase('hello world example');
 * // Returns: 'helloWorldExample'
 * 
 * @example
 * // Convert a hyphen-separated string
 * toCamelCase('my-awesome-function');
 * // Returns: 'myAwesomeFunction'
 * 
 * @example
 * // Convert an underscore-separated string
 * toCamelCase('user_profile_name');
 * // Returns: 'userProfileName'
 */
function toCamelCase(str) {
    return str
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
}

module.exports = toCamelCase;