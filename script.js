let currentPlayer = 'X';
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function makeMove(row, col) {
  if (board[row][col] === '') {
    board[row][col] = currentPlayer;
    renderBoard();
    if (checkWinner()) {
      showMessage(`Player ${currentPlayer} wins!`);
    } else if (isBoardFull()) {
      showMessage("It's a draw!");
    } else {
      switchPlayer();
    }
  }
}

function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) {
      return true;
    }
    if (board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer) {
      return true;
    }
  }
  if ((board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) ||
      (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer)) {
    return true;
  }
  return false;
}

function isBoardFull() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === '') {
        return false;
      }
    }
  }
  return true;
}

function renderBoard() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell, index) => {
    const row = Math.floor(index / 3);
    const col = index % 3;
    cell.textContent = board[row][col];
  });
}

function showMessage(message) {
  const messageElement = document.getElementById('message');
  messageElement.textContent = message;
}

function resetGame() {
  currentPlayer = 'X';
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  renderBoard();
  showMessage('');
}
