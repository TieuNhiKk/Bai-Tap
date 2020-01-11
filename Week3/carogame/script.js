const empty = 1;
const value_x = 2;
const value_o = 3;
const cols = 20;
const rows = 20;
const cellSize = 30;

function Cell(x, y) {
    this.x = x;
    this.y = y;
    this.value = empty;
    this.getHtml = function () {
        var top = x * cellSize;
        var left = y * cellSize;
        var cellHtml = '<div id="cell-' + x + '-' + y + '" onclick="play(' + x + ',' + y + ')" class="cell" style="position: absolute; width: ' + cellSize + 'px; height:' + cellSize + 'px; left:' + left + 'px; top:' + top + 'px; line-height: ' + cellSize + 'px;"></div>';
        return cellHtml;
    };

    this.draw = function () {
        var cellDiv = document.getElementById("cell-" + x + "-" + y);
        switch (this.value) {
            case value_x:
                cellDiv.innerHTML = "X";
                break;
            case value_o:
                cellDiv.innerHTML = "O";
                break;
            default:
                cellDiv.innerHTML = "";
                break;
        }
    }
}

function GameBoard(rows, cols, elementId) {
    this.rows = rows;
    this.cols = cols;
    this.elementId = elementId;
    this.turn = value_o;
    this.cells = [];
    this.isOver = false;

    this.draw = function () {
        var gameBoardDiv = document.getElementById(this.elementId);
        gameBoardDiv.innerHTML = "";
        for (var i = 0; i < this.rows; i++) {
            var row = [];
            this.cells.push(row);
            for (var j = 0; j < this.cols; j++) {
                var cell = new Cell(i, j);
                row.push(cell);
                gameBoardDiv.innerHTML += cell.getHtml();
            }
        }
    };

    this.play = function (x, y) {
        if (this.isOver) {
            return;
        }
        var cell = this.cells[x][y];
        if (cell.value === empty) {
            cell.value = this.turn;
            cell.draw();
            this.check(x, y);
            if (this.turn === value_o) {
                this.turn = value_x;
            } else {
                this.turn = value_o;
            }
        } else {
            alert("Cell is not empty");
        }
    };

    this.check = function (x, y) {
        var cell = this.cells[x][y];
        //Horizontal
        var count = 1;
        var i = 1;
        while ((y + i < this.cols) && this.cells[x][y + i].value === cell.value) {
            count++;
            i++;
        }
        var i = 1;
        while ((y - i >= 0) && this.cells[x][y - i].value === cell.value) {
            count++;
            i++;
        }
        this.endGame(count);
        //Vertical
        var count = 1;
        var i = 1;
        while ((x + i < this.rows) && this.cells[x + i][y].value === cell.value) {
            count++;
            i++;
        }
        var i = 1;
        while ((x - i >= 0) && this.cells[x - i][y].value === cell.value) {
            count++;
            i++;
        }
        this.endGame(count);
        //Left diagonal
        var count = 1;
        var i = 1;
        var j = 1;
        while ((y + i < this.cols) && (x + i < this.rows) && this.cells[x + i][y + j].value === cell.value) {
            count++;
            i++;
            j++;
        }
        var i = 1;
        var j = 1;
        while ((x - i >= 0) && (y - j >= 0) && this.cells[x - i][y - j].value === cell.value) {
            count++;
            i++;
            j++;
        }
        this.endGame(count);
        //Right diagonal
        var count = 1;
        var i = 1;
        var j = 1;
        while ((y + j < this.cols) && (x - i >= 0) && this.cells[x - i][y + j].value === cell.value) {
            count++;
            i++;
            j++;
        }
        var i = 1;
        var j = 1;
        while ((y - j >= 0) && (x + i < this.rows) && this.cells[x + i][y - j].value === cell.value) {
            count++;
            i++;
            j++;
        }
        this.endGame(count);
    };

    this.endGame = function (count) {
        if (count >= 5) {
            this.isOver = true;
            alert("You won!!!");
        }
    };
}

function play(x, y) {
    gameBoard.play(x, y);
}

function start() {
    gameBoard = new GameBoard(rows, cols, "game-board");
    gameBoard.draw();
}
var gameBoard;
start();