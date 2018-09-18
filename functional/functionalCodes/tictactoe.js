/** Purpose         :  Program to play a Cross Game or Tic­Tac­Toe Game.
 *  @description    
 *  @file           : tictactoe.js
 *  @overview       :The User1 or the User2 can only take the unoccupied cell. The Game is played till either wins or till draw.
 *  @module         : calculate.js
 *  @author         : Arghya Ray
*/
var prompt = require('prompt');

var board = {
    1: ' ',
    2: ' ',
    3: ' ',
    4: ' ',
    5: ' ',
    6: ' ',
    7: ' ',
    8: ' ',
    9: ' '
};

function markBoard(position, mark) //for marking the position that user wants
{
    board[position] = mark.toUpperCase();
}

function printBoard() //for printing the board
{
    console.log('\n' +
        ' ' + board[1] + ' | ' + board[2] + ' | ' + board[3] + '\n' +
        ' ---------\n' +
        ' ' + board[4] + ' | ' + board[5] + ' | ' + board[6] + '\n' +
        ' ---------\n' +
        ' ' + board[7] + ' | ' + board[8] + ' | ' + board[9] + '\n');

}

function isInt(value) //checking input is number or not
 {
    var x;
    if (isNaN(value)) 
    {
        return false;
    }
    x = parseFloat(value);
    return (x | 0) === x;
}

function validateMove(position) //checking that is the position is empty or not
{
    if (isInt(position) === true && board[position] === ' ') {
        return true;
    }
    return false;
}

// Every possible combination of three in a row for winning
var winCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],
                       [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

// Determines if the passed in player has three in a row
function checkWin(player) {
    for (var i = 0; i < winCombinations.length; i++) {
        var markCount = 0;
        for (var j = 0; j < winCombinations[i].length; j++) {
            if (board[winCombinations[i][j]] === player) //matching the winning combination
            {
                markCount++;//after matching increasing the count
            }
            if (markCount === 3) //winning condition
            {
                return true;
            }
        }
    }
    return false;
}

function playTurn(player) {

    console.log('Your turn player: ' + player);
    prompt.start();// prompt starts
    prompt.get(['position'], function (err, result)//Get two properties 
     {

        if (validateMove(result.position) === true) 
        {
            markBoard(result.position, player);//calling for marking
            printBoard();// calling for printing
            if (checkWin(player) === true) {
                console.log('Winner Winner!');
                return;
            }
            if (player === 'X') // for alternative turns
            {
                playTurn('O');
            } else {
                playTurn('X');
            }
        } else {
            console.log('incorrect input please try again...');
            playTurn(player);
        }
    });
}

console.log('Game started: \n' +
    ' 1 | 2 | 3 \n' +
    ' --------- \n' +
    ' 4 | 5 | 6 \n' +
    ' --------- \n' +
    ' 7 | 8 | 9 \n');


playTurn('X');//calling for the first turn
