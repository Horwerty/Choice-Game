const myChoice = document.querySelector('#myChoice');
const compChoice = document.querySelector('#computerChoice');
const buttons = document.querySelectorAll('.choice');
const result = document.getElementById('result');

buttons.forEach((choice) => choice.addEventListener("click", choiceHandler));

function choiceHandler() {
      myChoice.innerHTML = this.innerHTML;
      computerHandler();
      winnerHandler();
}

function computerHandler (){
      const computerTurn = Math.floor(Math.random() * buttons.length);

      if (computerTurn === 0) {
            compChoice.innerHTML = "MAN";
      } else if (computerTurn === 1) {
            compChoice.innerHTML = "WOMAN"
      } else {
            compChoice.innerHTML = "INSECT"
      }
};

function winnerHandler() {
      if (myChoice.innerHTML === "MAN" && compChoice.innerHTML === "MAN") {
            result.innerHTML = "You Draw";
      }

      if (myChoice.innerHTML === "WOMAN" && compChoice.innerHTML === "WOMAN"){
            result.innerHTML = "You Draw"
      }

      if (myChoice.innerHTML === "INSECT" && compChoice.innerHTML === "INSECT"){
            result.innerHTML = "You Draw"
      }

// Losing condition

      if (myChoice.innerHTML === "MAN" && compChoice.innerHTML === "WOMAN"){
            result.innerHTML = "You Lose"
      }

      if (myChoice.innerHTML === "WOMAN" && compChoice.innerHTML === "INSECT"){
            result.innerHTML = "You Lose"
      }

      if (myChoice.innerHTML === "INSECT" && compChoice.innerHTML === "MAN"){
            result.innerHTML = "You Lose"
      }

// win condition

      if (myChoice.innerHTML === "MAN" && compChoice.innerHTML === "INSECT"){
            result.innerHTML = "You WIN"
      }

      if (myChoice.innerHTML === "WOMAN" && compChoice.innerHTML === "MAN"){
            result.innerHTML = "You WIN"
      }

      if (myChoice.innerHTML === "INSECT" && compChoice.innerHTML === "WOMAN"){
            result.innerHTML = "You WIN"
      }
}
