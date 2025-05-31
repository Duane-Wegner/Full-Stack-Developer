function maskEmail(email) {
    let [username, domain] = email.split("@");
    let maskedUsername = username.charAt(0) + "*".repeat(username.length - 2) + username.charAt(username.length - 1);
    return maskedUsername + "@" + domain;
}

let email = "apple.pie@example.com";
console.log(maskEmail(email));

email = "freecodecamp@example.com";
console.log(maskEmail(email));