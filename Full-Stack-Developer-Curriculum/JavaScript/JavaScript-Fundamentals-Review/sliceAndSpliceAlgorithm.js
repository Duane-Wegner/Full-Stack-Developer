/**
 * The `frankenSplice` function merges two arrays while keeping the originals unchanged.
 *
 * How it works:
 * 1. It takes three inputs:
 *    - `arr1`: The array to be inserted.
 *    - `arr2`: The array where `arr1` will be inserted.
 *    - `index`: The position in `arr2` where `arr1` should go.
 *
 * 2. **Step 1: Copy `arr2`**
 *    We use `.slice()` to create `newArr`, a duplicate of `arr2`.
 *    This ensures `arr2` remains unchanged.
 *
 * 3. **Step 2: Insert `arr1` into `newArr`**
 *    `.splice(index, 0, ...arr1)` does three things:
 *    - Starts inserting at `index` in `newArr`.
 *    - Removes **0** elements (we don't want to delete anything).
 *    - Uses `...arr1` to spread and insert each item from `arr1`.
 *
 * 4. **Step 3: Return the merged array**
 *    Since `newArr` now has all elements correctly placed, we return it.
 */

function frankenSplice(arr1, arr2, index) {
    let newArr = arr2.slice();  // Copy arr2 to prevent modifications
    newArr.splice(index, 0, ...arr1);  // Insert arr1 starting at the given index
    return newArr;  // Return the updated array
}

// Testing the function with examples:

// Example 1: Insert [1, 2, 3] into [4, 5] at index 1
// Expected output: [4, 1, 2, 3, 5]
console.log(frankenSplice([1, 2, 3], [4, 5], 1));

// Example 2: Insert [1, 2] into ["a", "b"] at index 1
// Expected output: ["a", 1, 2, "b"]
console.log(frankenSplice([1, 2], ["a", "b"], 1));

// Example 3: Insert ["claw", "tentacle"] into ["head", "shoulders", "knees", "toes"] at index 2
// Expected output: ["head", "shoulders", "claw", "tentacle", "knees", "toes"]
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
