/**
 * Inventory Management Program
 *
 * This program manages an inventory system, allowing users to:
 * - Add products to the inventory
 * - Update product quantities
 * - Find product locations in the inventory
 * - Remove products when stock runs out
 *
 * The inventory is represented as an array of objects. Each object contains:
 * - `name`: A lowercase string representing the product name.
 * - `quantity`: An integer representing the product's stock count.
 */

const inventory = []; // Empty array to store product objects

/**
 * Finds the index of a product in the inventory based on its name.
 *
 * @param {string} productName - The name of the product to find.
 * @returns {number} The index of the product in the inventory array, or -1 if not found.
 *
 * How it works:
 * - Converts `productName` to lowercase to ensure case-insensitive search.
 * - Uses `.findIndex()` to check if any product's `name` matches.
 * - Returns `-1` if the product is not found.
 */
function findProductIndex(productName) {
    return inventory.findIndex(product => product.name === productName.toLowerCase());
}

/**
 * Adds a product to the inventory or updates its quantity if it already exists.
 *
 * @param {object} product - An object containing the product name and quantity.
 *
 * How it works:
 * - Checks if the product already exists using `findProductIndex(product.name)`.
 * - If found:
 *   - Updates the quantity.
 *   - Logs `"<product-name> quantity updated"`.
 * - If **not found**:
 *   - Pushes the product to `inventory`.
 *   - Logs `"<product-name> added to inventory"`.
 */
function addProduct(product) {
    let index = findProductIndex(product.name);

    if (index !== -1) {
        inventory[index].quantity += product.quantity;
        console.log(product.name.toLowerCase() + " quantity updated");
    } else {
        inventory.push({ name: product.name.toLowerCase(), quantity: product.quantity });
        console.log(product.name.toLowerCase() + " added to inventory");
    }
}

/**
 * Removes a product from inventory or decreases its quantity.
 *
 * @param {string} productName - The name of the product to remove.
 * @param {number} quantity - The amount to subtract from inventory.
 *
 * How it works:
 * - Searches for the product using `findProductIndex(productName)`.
 * - If **not found**, logs `"<product-name> not found"` and exits.
 * - If found:
 *   - Checks if the inventory has enough quantity.
 *   - If enough:
 *     - Subtracts `quantity` from inventory.
 *     - Logs `"Remaining <product-name> pieces: <product-quantity>"`.
 *     - If quantity reaches **zero**, removes the product from inventory.
 *   - If **not enough stock**, logs `"Not enough <product-name> available, remaining pieces: <product-quantity>"`.
 */
function removeProduct(productName, quantity) {
    let index = findProductIndex(productName);

    if (index === -1) {
        console.log(productName.toLowerCase() + " not found");
        return;
    }

    if (inventory[index].quantity >= quantity) {
        inventory[index].quantity -= quantity;
        console.log("Remaining " + inventory[index].name + " pieces: " + inventory[index].quantity);

        if (inventory[index].quantity === 0) {
            inventory.splice(index, 1);
        }
    } else {
        console.log("Not enough " + inventory[index].name + " available, remaining pieces: " + inventory[index].quantity);
    }
}
