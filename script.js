const boardDisplay = document.querySelector(".game-area");
const scoreDispaly = document.getElementById("score");
const resultDispaly = document.getElementById("result");
const width = 4;

let squares = [];
let score = 0;

function createBoard() {
  for (let i = 0; i < width * width; i++) {
    square = document.createElement("div");
    square.innerHTML = 0;
    boardDisplay.appendChild(square);
    squares.push(square);
  }
  generate();
  generate();
}
createBoard();

function generate() {
  let randomNumber = Math.floor(Math.random() * squares.length);
  if (squares[randomNumber].innerHTML == 0) {
    squares[randomNumber].innerHTML = 2;
    gameOver();
  } else generate();
}

function moveUp() {
  for (let i = 0; i < 4; i++) {
    let totalOne = squares[i].innerHTML;
    let totalTwo = squares[i + width].innerHTML;
    let totalThree = squares[i + width * 2].innerHTML;
    let totalFour = squares[i + width * 3].innerHTML;
    let column = [
      parseInt(totalOne),
      parseInt(totalTwo),
      parseInt(totalThree),
      parseInt(totalFour),
    ];

    let filteredColumn = column.filter((num) => num);
    let missing = 4 - filteredColumn.length;
    let zero = Array(missing).fill(0);
    console.log(zero);
    let newColumn = filteredColumn.concat(zero);

    squares[i].innerHTML = newColumn[0];
    squares[i + width].innerHTML = newColumn[1];
    squares[i + width * 2].innerHTML = newColumn[2];
    squares[i + width * 3].innerHTML = newColumn[3];
  }
}

function moveDown() {
  for (let i = 0; i < 4; i++) {
    let totalOne = squares[i].innerHTML;
    let totalTwo = squares[i + width].innerHTML;
    let totalThree = squares[i + width * 2].innerHTML;
    let totalFour = squares[i + width * 3].innerHTML;
    let column = [
      parseInt(totalOne),
      parseInt(totalTwo),
      parseInt(totalThree),
      parseInt(totalFour),
    ];

    let filteredColumn = column.filter((num) => num);
    let missing = 4 - filteredColumn.length;
    let zero = Array(missing).fill(0);
    console.log(zero);
    let newColumn = zero.concat(filteredColumn);
    squares[i].innerHTML = newColumn[0];
    squares[i + width].innerHTML = newColumn[1];
    squares[i + width * 2].innerHTML = newColumn[2];
    squares[i + width * 3].innerHTML = newColumn[3];
  }
}

function addColumns() {
  for (let i = 0; i < 12; i++) {
    if (squares[i].innerHTML === squares[i + width].innerHTML) {
      let total =
        parseInt(squares[i].innerHTML) + parseInt(squares[i + width].innerHTML);
      squares[i].innerHTML = total;
      squares[i + width].innerHTML = 0;

      score += total;
      scoreDispaly.innerHTML = score;
    }
  }
}

function moveLeft() {
  for (let i = 0; i < 16; i++) {
    if (i % 4 === 0) {
      let totalOne = squares[i].innerHTML;
      let totalTwo = squares[i + 1].innerHTML;
      let totalThree = squares[i + 2].innerHTML;
      let totalFour = squares[i + 3].innerHTML;
      let row = [
        parseInt(totalOne),
        parseInt(totalTwo),
        parseInt(totalThree),
        parseInt(totalFour),
      ];
      console.log(row);

      let filteredRow = row.filter((num) => num);
      console.log(filteredRow);
      let missing = 4 - filteredRow.length;
      let zero = Array(missing).fill(0);
      console.log(zero);
      let newRow = filteredRow.concat(zero);
      console.log(newRow);

      squares[i].innerHTML = newRow[0];
      squares[i + 1].innerHTML = newRow[1];
      squares[i + 2].innerHTML = newRow[2];
      squares[i + 3].innerHTML = newRow[3];
    }
  }
}

function moveRight() {
  for (let i = 0; i < 16; i++) {
    if (i % 4 === 0) {
      let totalOne = squares[i].innerHTML;
      let totalTwo = squares[i + 1].innerHTML;
      let totalThree = squares[i + 2].innerHTML;
      let totalFour = squares[i + 3].innerHTML;
      let row = [
        parseInt(totalOne),
        parseInt(totalTwo),
        parseInt(totalThree),
        parseInt(totalFour),
      ];
      console.log(row);

      let filteredRow = row.filter((num) => num);
      console.log(filteredRow);
      let missing = 4 - filteredRow.length;
      let zero = Array(missing).fill(0);
      console.log(zero);
      let newRow = zero.concat(filteredRow);
      console.log(newRow);

      squares[i].innerHTML = newRow[0];
      squares[i + 1].innerHTML = newRow[1];
      squares[i + 2].innerHTML = newRow[2];
      squares[i + 3].innerHTML = newRow[3];
    }
  }
}

function addRows() {
  for (let i = 0; i < 15; i++) {
    if (squares[i].innerHTML === squares[i + 1].innerHTML) {
      let total =
        parseInt(squares[i].innerHTML) + parseInt(squares[i + 1].innerHTML);
      squares[i].innerHTML = total;
      squares[i + 1].innerHTML = 0;

      score += total;
      scoreDispaly.innerHTML = score;
    }
  }
}

function control(e) {
  if (e.keyCode === 39 || e.keyCode === 68) {
    keyRight();
  } else if (e.keyCode === 37 || e.keyCode === 65) {
    keyLeft();
  } else if (e.keyCode === 38 || e.keyCode === 87) {
    keyUp();
  } else if (e.keyCode === 40 || e.keyCode === 83) {
    keyDown();
  }
}

function gameOver() {
  let checkForZero = 0;
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].innerHTML == 0) {
      checkForZero++;
    }
  }
  if (checkForZero == 0) {
    resultDispaly.innerHTML = "You loose!";
    document.removeEventListener("keyup", control);
  }
}

function winGame() {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].innerHTML == 2048) {
      resultDispaly.innerHTML = "You win!";
      document.removeEventListener("keyup", control);
    }
  }
}

document.addEventListener("keyup", control);

function keyRight() {
  moveRight();
  addRows();
  moveRight();
  generate();
}

function keyLeft() {
  moveLeft();
  addRows();
  moveLeft();
  generate();
}

function keyUp() {
  moveUp();
  addColumns();
  moveUp();
  generate();
}

function keyDown() {
  moveDown();
  addColumns();
  moveDown();
  generate();
}
