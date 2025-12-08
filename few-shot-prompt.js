/**
 * Converts a string to camelCase format.
 * Handles spaces, underscores, hyphens, and mixed case inputs.
 * 
 * @param {string} str - The string to convert
 * @returns {string} The camelCase version of the string
 * 
 * @example
 * toCamelCase('first name') // 'firstName'
 * toCamelCase('user_id') // 'userId'
 * toCamelCase('SCREEN_NAME') // 'screenName'
 * toCamelCase('mobile-number') // 'mobileNumber'
 */
function toCamelCase(str) {
    if (!str) return '';
    
    // Split by spaces, underscores, or hyphens
    const words = str.split(/[\s_-]+/);
    
    // Convert first word to lowercase, capitalize first letter of subsequent words
    return words
        .map((word, index) => {
            // Convert word to lowercase first
            word = word.toLowerCase();
            
            // If it's the first word, keep it lowercase
            if (index === 0) {
                return word;
            }
            
            // For subsequent words, capitalize the first letter
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

module.exports = toCamelCase;