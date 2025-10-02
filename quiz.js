// Function to check the answer
function checkAnswer() {
    // Step 1: Define the correct answer
    let correctAnswer = "4";

    // Step 2: Get the user's selected answer
    let selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Step 3: Handle case where no option is selected
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer!";
        return;
    }

    let userAnswer = selectedOption.value;

    // Step 4: Compare user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Step 5: Add event listener to button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
