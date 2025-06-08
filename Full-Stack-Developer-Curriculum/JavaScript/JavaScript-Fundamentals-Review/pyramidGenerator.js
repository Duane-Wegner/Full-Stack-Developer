/**
 * This part of the code builds a pyramid using spaces for centering and characters for shape.
 *
 * 1. The `for` loop creates each row of the pyramid.
 * 2. It starts small and grows **if the pyramid points upward** (`bool = false`).
 * 3. If `bool = true`, it starts wide and shrinks **to point downward**.
 *
 * Here's the math behind it:
 * - Each row contains a certain number of characters (`stg.repeat(i)`).
 * - The top row has **1 character**, and each row adds **2 more**.
 * - The widest row contains `int * 2 - 1` characters.
 *
 * To center the pyramid:
 * - Each row starts with spaces before the characters.
 * - The number of spaces ensures the rows are aligned correctly.
 * - The formula for spaces is: `(int * 2 - 1 - row_width) / 2`
 *
 * In short:
 * - The loop calculates spaces and adds them.
 * - Then it adds the correct number of characters for each row.
 * - Finally, it moves to the next line (`\n`).
 *
 * Example: If `int = 4` and `bool = false`, the output looks like this:
 *
 *    o
 *   ooo
 *  ooooo
 * ooooooo
 *
 * And if `bool = true`, the pyramid flips downward:
 *
 * ooooooo
 *  ooooo
 *   ooo
 *    o
 */


function pyramid(stg, int, bool) {
    let result = "\n"

    if (!bool) { // Upward pyramid
        for (let i = 1; i <= int * 2 - 1; i += 2) {
            result += " ".repeat((int * 2 - 1 - i) / 2) + stg.repeat(i) + "\n";
        }
    } else { // Downward pyramid
        for (let i = int * 2 - 1; i >= 1; i -= 2) {
            result += " ".repeat((int * 2 - 1 - i) / 2) + stg.repeat(i) + "\n";
        }
    }
    return result;
}

// Expected output:
// \n o
//  ooo
// ooooo
// ooooooo\n
console.log(pyramid("o", 4, false));

// Expected output:
// \n ppppppppp
//  ppppppp
//   ppppp
//    ppp
//     p\n
console.log(pyramid("p", 5, true));

