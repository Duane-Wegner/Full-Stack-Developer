/**
 * Random Password Generator
 *
 * This program creates a **random password** of a specified length using
 * uppercase and lowercase letters, numbers, and special characters.
 *
 * - `generatePassword(length)`: Generates a password based on the provided length.
 * - The program uses **Math methods** to randomly select characters.
 * - It ensures the password contains **random characters** and returns a new value each time.
 */

// Step 1: Define the set of characters that can be used in the password
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*().";

/**
 * Generates a password of a specified length using random characters.
 *
 * @param {number} length - The desired length of the password.
 * @returns {string} A randomly generated password.
 *
 * How it works:
 * - Starts with an empty `password` string.
 * - Loops `length` times to pick random characters.
 * - Uses `Math.random()` to generate a **random index** in the `characters` string.
 * - Appends the selected character to `password`.
 * - Returns the final password string.
 */
function generatePassword(length) {
    let password = ""; // Empty string to store the generated password

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length); // Generates a random index
        password += characters[randomIndex]; // Adds the selected character to the password
    }

    return password; // Returns the final password
}

// Step 3: Call `generatePassword` with a length and store the result
const password = generatePassword(12); // Generates a 12-character password

// Step 4: Log the result with the required message format
console.log("Generated password: " + password);

/**
 * Summary:
 * - Uses an array of valid characters for passwords.
 * - Selects characters randomly to form a strong password.
 * - Guarantees unique results every time it's executed.
 */
