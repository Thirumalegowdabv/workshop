document.getElementById("submitBtn").addEventListener("click", function () {
    let score = 0;

    for (let i = 1; i <= 4; i++) {
        let answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (answer && answer.value === "correct") {
            score++;
        }
    }

    document.getElementById("result").textContent = `Your score: ${score} / 4`;
});

document.getElementById("resetBtn").addEventListener("click", function () {
    document.querySelectorAll("input[type='radio']").forEach(r => r.checked = false);
    document.getElementById("result").textContent = "";
});
