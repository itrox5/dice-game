class Dice {
  constructor() {
    this.button = document.querySelector("button");
    this.output = document.querySelector(".gamearea__output");
    this.player1 = document.querySelector("#player1");
    this.player2 = document.querySelector("#player2");
    this.dice = [[5], [1, 9], [1, 5, 9], [1, 3, 7, 9], [1, 3, 5, 7, 9], [1, 3, 4, 6, 7, 9]];
  }
  init() {
    this.button.addEventListener("click", () => this.roll());
  }
  roll() {
    let rolls = [this.randomNumber(6), this.randomNumber(6)];
    let gameOutcome;
    if (rolls[0] == rolls[1]) {
    gameOutcome = "Draw";
    }
    else if (rolls[0] > rolls[1]) {
      gameOutcome = "Player 1 wins";
    }
    else {
      gameOutcome = "Player 2 wins";
    }
    this.updateOutput(this.player1, rolls[0]);
    this.updateOutput(this.player2, rolls[1]);
    this.output.innerHTML = gameOutcome;
  }
  updateOutput(playerElement, num) {
    let holder = this.builder(num);
    if (playerElement.children[0]) {
      playerElement.children[0].remove();
    }
    playerElement.appendChild(holder);
  }
  builder(num) {
    let div = document.createElement("div");
    let dieArray = this.dice[num - 1];
    for (let x = 1; x < 10; x++) {
      let span = document.createElement("div");
      span.setAttribute("class", "dot");
      if (dieArray.includes(x)) {
        span.classList.add("black");
      }
      div.appendChild(span);
    }
    div.setAttribute("class", "dicer");
    return div;
  }
  randomNumber(num) {
    return Math.floor(Math.random() * num) + 1;
  }
}
const dice = new Dice();
dice.init();