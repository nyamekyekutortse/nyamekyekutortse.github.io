let table = document.getElementById("laborTable");

table.addEventListener("keydown", (event) => {
  let currentCell = event.target;
  let keyCode = event.keycode;

  const LEFT_ARROW = 37;
  const RIGHT_ARROW = 39;
  const UP_ARROW = 38;
  const DOWN_ARROW = 40;

  if (keyCode === LEFT_ARROW) {
    // Navigate to the previous cell
    let previousCell = currentCell.previousElementSibling;
    if (previousCell) {
      previousCell.focus();
    }
  } else if (keyCode === RIGHT_ARROW) {
    // Navigate to the next cell
    let nextCell = currentCell.nextElementSibling;
    if (nextCell) {
      nextCell.focus();
    }
  } else if (keyCode === UP_ARROW) {
    // Navigate to the cell in the row above
    let currentRow = currentCell.parentNode;
    let previousRow = currentRow.previousElementSibling;
    if (previousRow) {
      let cellsInRowAbove = previousRow.getElementsByTagName("td");
      if (cellsInRowAbove[currentCell.cellIndex]) {
        cellsInRowAbove[currentCell.cellIndex].focus();
      }
    }
  } else if (keyCode === DOWN_ARROW) {
    // Navigate to the cell in the row below
    let currentRow = currentCell.parentNode;
    let nextRow = currentRow.nextElementSibling;
    if (nextRow) {
      let cellsInRowBelow = nextRow.getElementsByTagName("td");
      if (cellsInRowBelow[currentCell.cellIndex]) {
        cellsInRowBelow[currentCell.cellIndex].focus();
      }
    }
  }
});
