/**
 * This program processes student scores to determine their grade, the class average,
 * and whether they passed or failed the course.
 *
 * It consists of four functions:
 * 1. `getAverage(scores)`: Calculates the average score of all students.
 * 2. `getGrade(score)`: Converts a numerical score into a letter grade.
 * 3. `hasPassingGrade(score)`: Checks if the student passed or failed.
 * 4. `studentMsg(totalScores, studentScore)`: Generates a final message for the student.
 */

function getAverage(scores) {
    /**
     * This function calculates the average of an array of scores.
     *
     * How it works:
     * - Starts with `sum = 0` to store the total scores.
     * - Loops through each `score` in the `scores` array, adding it to `sum`.
     * - Divides the total `sum` by the number of scores (`scores.length`) to get the average.
     * - Returns the calculated average.
     */
    let sum = 0;

    for (const score of scores) {
        sum += score; // Accumulates all scores.
    }

    return sum / scores.length; // Returns the average score.
}

function getGrade(score) {
    /**
     * This function assigns a letter grade based on the student's numerical score.
     *
     * Grading System:
     * - 100 → "A+"
     * - 90 to 99 → "A"
     * - 80 to 89 → "B"
     * - 70 to 79 → "C"
     * - 60 to 69 → "D"
     * - Below 60 → "F" (Fail)
     *
     * How it works:
     * - Compares the `score` with predefined ranges.
     * - Returns the corresponding letter grade.
     */

    if (score === 100) {
        return "A+";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F"; // If score is below 60, return "F".
    }
}

function hasPassingGrade(score) {
    /**
     * This function checks if a student's grade is passing.
     *
     * How it works:
     * - Calls `getGrade(score)` to get the student's letter grade.
     * - If the grade is anything **except** "F", the function returns `true` (passing).
     * - If the grade is "F", the function returns `false` (failing).
     */

    return getGrade(score) !== "F"; // Returns true if grade is not "F".
}

function studentMsg(totalScores, studentScore) {
    /**
     * This function generates a message summarizing the student's performance.
     *
     * Steps:
     * 1. Calculates the class average using `getAverage(totalScores)`.
     * 2. Determines the student's grade using `getGrade(studentScore)`.
     * 3. Checks if the student passed using `hasPassingGrade(studentScore)`.
     * 4. Constructs and returns a final message.
     *    - If the student passed, message includes "You passed the course."
     *    - If they failed, message includes "You failed the course."
     *
     * Example output:
     * "Class average: 71.7. Your grade: A+. You passed the course."
     */

    let classAverage = getAverage(totalScores); // Get the class average.
    let studentGrade = getGrade(studentScore); // Get the student's grade.
    let result = hasPassingGrade(studentScore) ? "You passed the course." : "You failed the course.";

    return "Class average: " + classAverage + ". Your grade: " + studentGrade + ". " + result;
}

// Example test case:
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 100));

// Expected output: "Class average: 71.7. Your grade: A+. You passed the course."
