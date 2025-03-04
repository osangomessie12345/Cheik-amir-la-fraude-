        AOS.init();
        let scores = {
            quizForm1: 0, quizForm2: 0, quizForm3: 0, quizForm4: 0, quizForm5: 0,
            quizForm6: 0, quizForm7: 0, quizForm8: 0, quizForm9: 0, quizForm10: 0
        };

        function verifierReponse(formId, scoreId, correctAnswer) {
            let form = document.getElementById(formId);
            let reponse = form.querySelector('input[type="radio"]:checked');
            let scoreDisplay = document.getElementById(scoreId);

            if (reponse) {
                if (reponse.value === correctAnswer) {
                    scoreDisplay.innerHTML = "✅ Bonne réponse !";
                    scoreDisplay.style.color = "lime";
                    scores[formId] = 10;
                } else {
                    scoreDisplay.innerHTML = "❌ mauvaise réponse, réponds avec franchise mec !";
                    scoreDisplay.style.color = "red";
                    scores[formId] = 0;
                }
            } else {
                alert("Veuillez sélectionner une réponse !");
            }
            scoreDisplay.innerHTML += " (Score : " + scores[formId] + ")";
        }

        function verifierTotal() {
            let total = Object.values(scores).reduce((sum, score) => sum + score, 0);
            document.getElementById("total-score").innerHTML = "Score total : " + total;
        }
