function chunkArrayInGroups(array, size) {
    let result = [];

    for (let i = 0; i < array.length; i+= size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}

// Expected output: [["a", "b"], ["c", "d"]]
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

// Expected output: [[0, 1, 2], [3, 4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));

// Expected output: [[0, 1, 2, 3], [4, 5, 6]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 4));

// Expected output: [[0, 1, 2, 3, 4], [5, 6, 7, 8]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 5));
