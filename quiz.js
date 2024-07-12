function checkAnswer() {
    // Function body
    const correctAnswer = '4';

    document.querySelector([name="quiz"]);

    const selectedRadioButton =
    document.querySelector(`input[type="radio"][name = "quiz"]:checked`);
    const userAnswer = selectedRadioButton.value;
    if(userAnswer === correctAnswer) {
        const userAnswer = document.querySelector('#feedback');
        userAnswer.textContent = "Correct! Well done.";
    } else {
        const userAnswer = document.querySelector('#feedback');
        userAnswer.textContent = "That's incorrect. Try again!";
    }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);