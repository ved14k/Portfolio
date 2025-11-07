const textElement = document.getElementById("sp1");
const phrases = ["Ved", "A Web  Developer", "A Web Designer", "A Programmer"];

let phraseIndex = 0;
let letterIndex = 0;
const typingSpeed = 150; // Speed to type each letter
const erasingSpeed = 150; // Speed to erase each letter
const newPhraseDelay = 2000; // Delay before starting a new phrase (2 seconds)

// Function to handle typing effect
function type() {
  if (letterIndex < phrases[phraseIndex].length) {
    // Add the next character
    textElement.textContent += phrases[phraseIndex].charAt(letterIndex);
    letterIndex++;
    setTimeout(type, typingSpeed);
  } else {
    // After typing is complete, wait and then start erasing
    setTimeout(erase, newPhraseDelay);
  }
}

// Function to handle erasing effect
function erase() {
  if (letterIndex > 0) {
    // Remove the last character
    textElement.textContent = phrases[phraseIndex].substring(
      0,
      letterIndex - 1
    );
    letterIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    // After erasing is complete, move to the next phrase
    phraseIndex++;
    // If we're at the end of the phrases array, loop back to the beginning
    if (phraseIndex >= phrases.length) {
      phraseIndex = 0;
    }
    // Start typing the next phrase immediately
    setTimeout(type, typingSpeed);
  }
}

// Start the sequence when the script loads
document.addEventListener("DOMContentLoaded", () => {

  type();
});
