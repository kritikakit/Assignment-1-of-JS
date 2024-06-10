// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak

const subjects = ["The dog", "A cat", "The bird", "A fish", "The elephant"];    // Arrays of words for generating sentences
const verbs = ["jumps", "runs", "flies", "swims", "walks"];
const adjectives = ["quickly", "slowly", "gracefully", "awkwardly", "happily"];
const secondNouns = ["over the fence", "through the yard", "across the sky", "in the water", "on the ground"];
const places = ["in the park", "at the beach", "in the zoo", "in the forest", "in the city"];

let textToSpeak = "";

/* Functions
-------------------------------------------------- */
function getRandomWord(array) {     // Function to get a random word from an array
    return array[Math.floor(Math.random() * array.length)];
}

function generateSubject() {     // Functions to generate different parts of a sentence
    textToSpeak = getRandomWord(subjects);
    alert(textToSpeak);
}

function generateVerb() {    // Function to generate a verb for the sentence
    textToSpeak += " " + getRandomWord(verbs);
    alert(textToSpeak);
}

function generateAdjective() {  // Function to generate an adjective for the sentence

    textToSpeak += " " + getRandomWord(adjectives);
    alert(textToSpeak);
}

function generateSecondNoun() {   // Function to generate a second noun for the sentence

    textToSpeak += " " + getRandomWord(secondNouns);
    alert(textToSpeak);
}

function generatePlace() {   // Function to generate a place for the sentence

    textToSpeak += " " + getRandomWord(places);
    alert(textToSpeak);
}

function speakNow(string) {   // Function to speak the generated sentence

    var utterThis = new SpeechSynthesisUtterance(string);
    synth.speak(utterThis);
}

// Event listeners for each button to generate and speak parts of the sentence
document.getElementById('subjectButton').onclick = function () {
    generateSubject();
}

document.getElementById('verbButton').onclick = function () {
    generateVerb();
}

document.getElementById('adjectiveButton').onclick = function () {
    generateAdjective();
}

document.getElementById('secondNounButton').onclick = function () {
    generateSecondNoun();
}

document.getElementById('placeButton').onclick = function () {
    generatePlace();
}

document.getElementById('speakButton').onclick = function () {
    speakNow(textToSpeak);
}
