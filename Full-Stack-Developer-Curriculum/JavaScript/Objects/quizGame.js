const questions = [];

const question1 = {
    category: "JavaScript Objects",
    question: "What is the correct syntax for creating a new object in JavaScript?",
    choices: [
        "let obj = new Object();",
        "let obj = Object.create();",
        "let obj = Object();"
    ],
    answer: "let obj = new Object();"
};

const question2 = {
    category: "JavaScript Objects",
    question: "How do you add a new property to an existing object?",
    choices: [
        "object.addProperty('name', 'value');",
        "object.name = 'value';",
        "object->name = 'value';"
    ],
    answer: "object.name = 'value';"
};

const question3 = {
    category: "JavaScript Objects",
    question: "Which method returns an array of a given object's own enumerable property names?",
    choices: [
        "Object.values(obj)",
        "Object.keys(obj)",
        "Object.entries(obj)"
    ],
    answer: "Object.keys(obj)"
};

const question4 = {
    category: "JavaScript Objects",
    question: "What will `typeof null` return in JavaScript?",
    choices: [
        "'null'",
        "'object'",
        "'undefined'"
    ],
    answer: "'object'"
};

const question5 = {
    category: "JavaScript Objects",
    question: "Which method would you use to merge multiple objects into one?",
    choices: [
        "Object.assign()",
        "Object.merge()",
        "Object.combine()"
    ],
    answer: "Object.assign()"
};

questions.push(question1, question2, question3, question4, question5);

function getRandomQuestion(questions) {
    let randomQuestion = Math.floor(Math.random() * questions.length);
    let selectedQuestion = questions[randomQuestion];
    return selectedQuestion;
}

function getRandomComputerChoice(choices) {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function getResults(question, computerChoice) {
    if (computerChoice === question.answer) {
        return "The computer's choice is correct!"
    } else {
        return `The computer's choice is wrong. The correct answer is: ${question.answer}`
    }
}

questions.forEach((q) => {
    const computerChoice = getRandomComputerChoice(q.choices);
    const result = getResults(q, computerChoice);

    console.log("Category:", q.category);
    console.log("Question:", q.question);
    q.choices.forEach((c, i) => console.log(`${i + 1}. ${c}`));
    console.log("Computer chose:", computerChoice);
    console.log(result);
    console.log("-----------------------------");
});