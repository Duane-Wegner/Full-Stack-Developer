function mutation(words) {
    const firstWord = words[0].toLowerCase();
    const secondWord = words[1].toLowerCase();

    for (let i = 0; i < secondWord.length; i++) {
        if (!firstWord.includes(secondWord[i])) {
            return false;
        }
    }
    return true;
}

// true
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["Mary", "Army"]));
console.log(mutation(["Noel", "Ole"]));

// false
console.log(mutation(["ate", "date"]));
console.log(mutation(["voodoo", "no"]));
console.log(mutation(["hello", "neo"]));
console.log(mutation(["hello", "hey"]));