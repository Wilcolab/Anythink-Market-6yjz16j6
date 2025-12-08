/**
 * String Case Conversion Utilities
 * 
 * This module provides utilities for converting strings between different case formats.
 * It handles various input formats including spaces, hyphens, underscores, and existing
 * camelCase strings, converting them to the desired case format.
 * 
 * @module refined_prompt
 * @description Provides string case conversion functions for camelCase and dot.case formats
 * 
 * @example
 * const toCamelCase = require('./refined_prompt');
 * const { toDotCase } = require('./refined_prompt');
 * 
 * // Convert to camelCase
 * toCamelCase('hello world'); // returns 'helloWorld'
 * toCamelCase('hello-world'); // returns 'helloWorld'
 * toCamelCase('hello_world'); // returns 'helloWorld'
 * toCamelCase('HelloWorld'); // returns 'helloWorld'
 * 
 * // Convert to dot.case
 * toDotCase('hello world'); // returns 'hello.world'
 * toDotCase('helloWorld'); // returns 'hello.world'
 * toDotCase('hello-world'); // returns 'hello.world'
 */

/**
 * Converts a string to camelCase format
 * 
 * This function takes an input string in various formats (space-separated, hyphen-separated,
 * underscore-separated, or existing camelCase) and converts it to camelCase format where the
 * first word is lowercase and subsequent words have their first letter capitalized.
 * 
 * The function handles:
 * - Space-separated words: "hello world" → "helloWorld"
 * - Hyphen-separated words: "hello-world" → "helloWorld"
 * - Underscore-separated words: "hello_world" → "helloWorld"
 * - Existing camelCase: "HelloWorld" → "helloWorld"
 * - Mixed separators: "hello-world_test" → "helloWorldTest"
 * - Acronyms: "XML-HTTP-REQUEST" → "xmlHttpRequest"
 * - Special characters: Removed while preserving letters
 * 
 * @function toCamelCase
 * @param {string} input - The string to convert to camelCase format
 * @returns {string} The camelCase formatted string. Returns empty string if input is empty
 *                   or contains no valid words after processing
 * @throws {Error} If input is not a string type
 * 
 * @example
 * // Basic conversions
 * toCamelCase('hello world');        // returns 'helloWorld'
 * toCamelCase('hello-world');        // returns 'helloWorld'
 * toCamelCase('hello_world');        // returns 'helloWorld'
 * 
 * @example
 * // Handling existing camelCase
 * toCamelCase('HelloWorld');         // returns 'helloWorld'
 * toCamelCase('helloWorld');         // returns 'helloWorld'
 * 
 * @example
 * // Handling acronyms
 * toCamelCase('XML HTTP REQUEST');   // returns 'xmlHttpRequest'
 * toCamelCase('HTML-to-XML');        // returns 'htmlToXml'
 * 
 * @example
 * // Edge cases
 * toCamelCase('');                   // returns ''
 * toCamelCase('   ');                // returns ''
 * toCamelCase('hello123world');      // returns 'helloworld'
 * 
 * @example
 * // Error handling
 * try {
 *   toCamelCase(123);                // throws Error: 'Input must be a string'
 * } catch (error) {
 *   console.error(error.message);
 * }
 */

/**
 * Converts a string to dot.case format
 * 
 * This function takes an input string in various formats (space-separated, hyphen-separated,
 * underscore-separated, or camelCase) and converts it to dot.case format where all words
 * are lowercase and separated by dots (periods).
 * 
 * The function handles:
 * - Space-separated words: "hello world" → "hello.world"
 * - Hyphen-separated words: "hello-world" → "hello.world"
 * - Underscore-separated words: "hello_world" → "hello.world"
 * - Existing camelCase: "helloWorld" → "hello.world"
 * - Mixed separators: "hello-world_test" → "hello.world.test"
 * - Existing dot notation: "hello.world" → "hello.world"
 * - Special characters: Removed while preserving letters
 * 
 * @function toDotCase
 * @param {string} input - The string to convert to dot.case format
 * @returns {string} The dot.case formatted string (all lowercase with dot separators).
 *                   Returns empty string if input is empty or contains no valid words
 *                   after processing
 * @throws {Error} If input is not a string type
 * 
 * @example
 * // Basic conversions
 * toDotCase('hello world');          // returns 'hello.world'
 * toDotCase('hello-world');          // returns 'hello.world'
 * toDotCase('hello_world');          // returns 'hello.world'
 * 
 * @example
 * // Handling camelCase
 * toDotCase('helloWorld');           // returns 'hello.world'
 * toDotCase('HelloWorld');           // returns 'hello.world'
 * toDotCase('XMLHttpRequest');       // returns 'x.m.l.http.request'
 * 
 * @example
 * // Handling existing dot notation
 * toDotCase('hello.world');          // returns 'hello.world'
 * toDotCase('hello.world.test');     // returns 'hello.world.test'
 * 
 * @example
 * // Edge cases
 * toDotCase('');                     // returns ''
 * toDotCase('   ');                  // returns ''
 * toDotCase('hello123world');        // returns 'helloworld'
 * 
 * @example
 * // Error handling
 * try {
 *   toDotCase(null);                 // throws Error: 'Input must be a string'
 * } catch (error) {
 *   console.error(error.message);
 * }
 */

    // Return empty string for empty input
    if (input.length === 0) {
        return '';
    }

    // Split by common word separators (spaces, hyphens, underscores)
    // Also split on transitions from lowercase to uppercase (for existing camelCase)
    const words = input
        .replace(/([a-z])([A-Z])/g, '$1 $2') // Split camelCase
        .split(/[\s\-_.]+/) // Split on space, hyphen, underscore, dot
        .filter(word => word.length > 0); // Remove empty strings

    if (words.length === 0) {
        return '';
    }

    // Process each word - all lowercase for dot.case
    const processedWords = words.map(word => {
        // Remove non-letter characters but preserve the letters
        const cleanWord = word.replace(/[^a-zA-Z]/g, '');
        return cleanWord.toLowerCase();
    }).filter(word => word.length > 0); // Remove empty results

    return processedWords.join('.');
}




module.exports = toCamelCase;
module.exports.toDotCase = toDotCase;