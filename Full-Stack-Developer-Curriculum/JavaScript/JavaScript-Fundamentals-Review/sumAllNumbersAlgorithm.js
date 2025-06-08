/**
 * Sum All Numbers Algorithm
 *
 * This function calculates the sum of all numbers between two given numbers,
 * including the numbers themselves. The order of numbers is not guaranteed,
 * so the function must correctly determine the range before performing the sum.
 *
 * User Story Requirements:
 * - Accept an array with two numbers.
 * - Calculate the sum of all numbers between the two values, inclusive.
 * - Handle cases where the smaller number may appear second in the array.
 */

function sumAll(arr) {
    /**
     * Step 1: Find the smaller and larger numbers
     *
     * Since the two numbers can appear in any order in the input array,
     * we use `Math.min(...arr)` to get the smallest value and
     * `Math.max(...arr)` to get the largest value.
     */
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    /**
     * Step 2: Initialize the sum variable
     *
     * This variable will store the total sum of numbers from `min` to `max`.
     */
    let sum = 0;

    /**
     * Step 3: Loop from `min` to `max`
     *
     * We use a for-loop starting at `min` and ending at `max`, ensuring
     * all numbers in the range are added to `sum`.
     */
    for (let i = min; i <= max; i++) {
        sum += i; // Accumulate the sum
    }

    /**
     * Step 4: Return the final sum
     *
     * Once all numbers are added, we return the total sum.
     */
    return sum;
}

// Test Cases:

// Expected output: 10 (1 + 2 + 3 + 4)
console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));

// Expected output: 45 (5 + 6 + 7 + 8 + 9 + 10)
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));

/**
 * Summary:
 * - The function ensures proper ordering of numbers before summing.
 * - Uses `Math.min` and `Math.max` to handle any order of input values.
 * - Uses a loop to efficiently accumulate the total sum.
 * - Returns the correct value for all tested cases.
 */
