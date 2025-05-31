let lunches = [];

function addLunchToEnd (lunches, lunchItem) {
    lunches.push(lunchItem);
    console.log(`${lunchItem} added to the end of the lunch menu.`);
    return lunches;
}

addLunchToEnd(lunches, "Tacos");

function addLunchToStart (lunches, lunchItem) {
    lunches.unshift(lunchItem);
    console.log(`${lunchItem} added to the start of the lunch menu.`);
    return lunches;
}

addLunchToStart(lunches, "Sushi")

function removeLastLunch (lunches) {
    if (lunches.length === 0) {
        console.log("No lunches to remove.");
        return lunches;
    }

    let removedLunch = lunches.pop();
    console.log(`${removedLunch} removed from the end of the lunch menu.`);
    return lunches;
}

removeLastLunch(["Stew", "Soup", "Toast"]);
removeLastLunch(["Sushi", "Pizza", "Noodles"]);

function removeFirstLunch (lunches) {
    if (lunches.length === 0) {
        console.log("No lunches to remove.");
        return lunches;
    }

    let removedLunch = lunches.shift();
    console.log(`${removedLunch} removed from the start of the lunch menu.`);
    return lunches;
}

removeFirstLunch(["Salad", "Eggs", "Cheese"]);
removeFirstLunch(["Sushi", "Pizza", "Burger"]);

function getRandomLunch (lunches) {
    if (lunches.length === 0) {
        console.log("No lunches available.");
        return null;
    }

    let randomIndex = Math.floor(Math.random() * lunches.length);
    let selectedLunch = lunches[randomIndex];
    console.log(`Randomly selected lunch: ${selectedLunch}`);
    return selectedLunch;
}

getRandomLunch(["Pizza", "Burger", "Tacos"]);

function showLunchMenu (lunches) {
    if (lunches.length === 0) {
        console.log("The menu is empty.");
        return lunches;
    }

    console.log(`Menu items: ${lunches.join(", ")}`);
    return lunches;
}

showLunchMenu(["Greens", "Corns", "Beans"]);
showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]);