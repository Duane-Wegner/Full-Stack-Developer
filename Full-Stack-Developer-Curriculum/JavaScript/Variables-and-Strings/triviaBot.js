let botName;
let botLocation;
let favoriteLanguage;
let nameAndLocationSentence;
let favoriteLanguageSentence;
let codingFact;

console.log("Hello! I'm your coding fun fact guide!");
botName = "CodingBot";
botLocation = "a location far away in the Land Beyond";
nameAndLocationSentence = "My name is " + botName + " and I live on " + botLocation + ".";
favoriteLanguage = "JavaScript";
favoriteLanguageSentence = "My favorite programming language is " + favoriteLanguage + ".";
console.log(nameAndLocationSentence);
console.log(favoriteLanguageSentence);
codingFact = favoriteLanguage + " was created in just 10 days!";
console.log(codingFact);
codingFact = favoriteLanguage + " was originally called Mocha during its development!";
console.log(codingFact);
codingFact = favoriteLanguage + " is not related to Java, despite the similar name!";
console.log(codingFact);
console.log("It was fun sharing these facts with you. Goodbye! - "+ botName + " from " + botLocation + ".");