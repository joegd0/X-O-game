let title = document.querySelector('.title')
let turn = 'x';
let squares = [];
let gameOver = false;
let item1 = document.getElementById('item1');
let item2 = document.getElementById('item2');
let item3 = document.getElementById('item3');
let item4 = document.getElementById('item4');
let item5 = document.getElementById('item5');
let item6 = document.getElementById('item6');
let item7 = document.getElementById('item7');
let item8 = document.getElementById('item8');
let item9 = document.getElementById('item9');
document.querySelectorAll('input[name="mode"]').forEach(radio => {
    radio.addEventListener('change', function() {
        const isMulti = this.value === 'multi';
        document.getElementById('playerNames').style.display = isMulti ? 'block' : 'none';
        document.getElementById('player1').required = isMulti;
        document.getElementById('player2').required = isMulti;
    });
});

window.addEventListener('DOMContentLoaded', function() {
    const isMulti = document.querySelector('input[name="mode"]:checked').value === 'multi';
    document.getElementById('playerNames').style.display = isMulti ? 'block' : 'none';
    document.getElementById('player1').required = isMulti;
    document.getElementById('player2').required = isMulti;
});
function aiMove() {
    if (gameOver) return; // Find all empty squares
    let empty = [];
        if(item1.innerHTML == item2.innerHTML && item2.innerHTML == 'O' && item3.innerHTML == ''){
        item3.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item4.innerHTML == item5.innerHTML && item5.innerHTML == 'O' && item6.innerHTML == ''){
        item6.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item7.innerHTML == item8.innerHTML && item8.innerHTML == 'O' && item9.innerHTML == ''){
        item9.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item3.innerHTML == item2.innerHTML && item2.innerHTML == 'O' && item1.innerHTML == ''){
        item1.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item6.innerHTML == item5.innerHTML && item5.innerHTML == 'O' && item4.innerHTML == ''){
        item4.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item9.innerHTML == item8.innerHTML && item8.innerHTML == 'O' && item7.innerHTML == ''){
        item7.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item1.innerHTML == item3.innerHTML && item3.innerHTML == 'O' && item2.innerHTML == ''){
        item2.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item4.innerHTML == item6.innerHTML && item6.innerHTML == 'O' && item5.innerHTML == ''){
        item5.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item7.innerHTML == item9.innerHTML && item9.innerHTML == 'O' && item8.innerHTML == ''){
        item8.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item1.innerHTML == item4.innerHTML && item4.innerHTML == 'O' && item7.innerHTML == ''){
        item7.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item2.innerHTML == item5.innerHTML && item5.innerHTML == 'O' && item8.innerHTML == ''){
        item8.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item3.innerHTML == item6.innerHTML && item6.innerHTML == 'O' && item9.innerHTML == ''){
        item9.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item4.innerHTML == item7.innerHTML && item7.innerHTML == 'O' && item1.innerHTML == ''){
        item1.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item8.innerHTML == item5.innerHTML && item5.innerHTML == 'O' && item2.innerHTML == ''){
        item2.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item6.innerHTML == item9.innerHTML && item9.innerHTML == 'O' && item3.innerHTML == ''){
        item3.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item1.innerHTML == item7.innerHTML && item7.innerHTML == 'O' && item4.innerHTML == ''){
        item4.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item2.innerHTML == item8.innerHTML && item8.innerHTML == 'O' && item5.innerHTML == ''){
        item5.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item3.innerHTML == item9.innerHTML && item9.innerHTML == 'O' && item6.innerHTML == ''){
        item6.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item1.innerHTML == item5.innerHTML && item5.innerHTML == 'O' && item9.innerHTML == ''){
        item9.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item3.innerHTML == item5.innerHTML && item5.innerHTML == 'O' && item7.innerHTML == ''){
        item7.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item9.innerHTML == item5.innerHTML && item5.innerHTML == 'O' && item1.innerHTML == ''){
        item1.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item7.innerHTML == item5.innerHTML && item5.innerHTML == 'O' && item3.innerHTML == ''){
        item3.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item1.innerHTML == item9.innerHTML&& item9.innerHTML == 'O' && item5.innerHTML == ''){
        item5.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item3.innerHTML == item7.innerHTML && item7.innerHTML == 'O' && item5.innerHTML == ''){
        item5.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }


    else if(item1.innerHTML == item2.innerHTML && item2.innerHTML != '' && item3.innerHTML == ''){
        item3.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item4.innerHTML == item5.innerHTML && item5.innerHTML != '' && item6.innerHTML == ''){
        item6.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item7.innerHTML == item8.innerHTML && item8.innerHTML != '' && item9.innerHTML == ''){
        item9.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item3.innerHTML == item2.innerHTML && item2.innerHTML != '' && item1.innerHTML == ''){
        item1.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item6.innerHTML == item5.innerHTML && item5.innerHTML != '' && item4.innerHTML == ''){
        item4.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item9.innerHTML == item8.innerHTML && item8.innerHTML != '' && item7.innerHTML == ''){
        item7.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item1.innerHTML == item3.innerHTML && item3.innerHTML != '' && item2.innerHTML == ''){
        item2.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item4.innerHTML == item6.innerHTML && item6.innerHTML != '' && item5.innerHTML == ''){
        item5.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item7.innerHTML == item9.innerHTML && item9.innerHTML != '' && item8.innerHTML == ''){
        item8.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item1.innerHTML == item4.innerHTML && item4.innerHTML != '' && item7.innerHTML == ''){
        item7.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item2.innerHTML == item5.innerHTML && item5.innerHTML != '' && item8.innerHTML == ''){
        item8.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item3.innerHTML == item6.innerHTML && item6.innerHTML != '' && item9.innerHTML == ''){
        item9.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item4.innerHTML == item7.innerHTML && item7.innerHTML != '' && item1.innerHTML == ''){
        item1.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item8.innerHTML == item5.innerHTML && item5.innerHTML != '' && item2.innerHTML == ''){
        item2.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item6.innerHTML == item9.innerHTML && item9.innerHTML != '' && item3.innerHTML == ''){
        item3.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item1.innerHTML == item7.innerHTML && item7.innerHTML != '' && item4.innerHTML == ''){
        item4.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item2.innerHTML == item8.innerHTML && item8.innerHTML != '' && item5.innerHTML == ''){
        item5.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item3.innerHTML == item9.innerHTML && item9.innerHTML != '' && item6.innerHTML == ''){
        item6.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item1.innerHTML == item5.innerHTML && item5.innerHTML != '' && item9.innerHTML == ''){
        item9.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item3.innerHTML == item5.innerHTML && item5.innerHTML != '' && item7.innerHTML == ''){
        item7.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item9.innerHTML == item5.innerHTML && item5.innerHTML != '' && item1.innerHTML == ''){
        item1.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item7.innerHTML == item5.innerHTML && item5.innerHTML != '' && item3.innerHTML == ''){
        item3.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item1.innerHTML == item9.innerHTML && item9.innerHTML != '' && item5.innerHTML == ''){
        item5.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }else if(item3.innerHTML == item7.innerHTML && item7.innerHTML != '' && item5.innerHTML == ''){
        item5.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }
    else{
    for (let i = 1; i < 10; i++) {
        let el = document.getElementById('item' + i);
        if (el.innerHTML === '') empty.push(i);
    }
    // Pick a random empty square
    if (empty.length > 0) {
        let move = empty[Math.floor(Math.random() * empty.length)];
        document.getElementById('item' + move).innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X Turn';
        winner();
    }}
}
function winner(){
    for(let i = 1; i<10 ; i++){
        squares[i] = document.getElementById('item' + i).innerHTML
    }
    function getWinnerName(symbol) {
        if (symbol === 'X') {
            return (window.gameMode === 'ai') ? 'You' : (window.player1Name || 'X');
        } else if (symbol === 'O') {
            return (window.gameMode === 'ai') ? 'AI' : (window.player2Name || 'O');
        }
        return symbol;
    }
    if(squares[1] == squares[2]  && squares[2] == squares[3] && squares[1] != ''){
        let winnerName = getWinnerName(squares[1]);
        title.innerHTML = `${winnerName} winner`;
        document.getElementById('item1').style.background = '#000';
        document.getElementById('item2').style.background = '#000';
        document.getElementById('item3').style.background = '#000';
        gameOver = true;
        setInterval(function(){title.innerHTML += '.'}, 1000);
        setTimeout(function(){location.reload()},4000);

    }else if(squares[4] == squares[5]  && squares[5] == squares[6] && squares[4] != ''){
        let winnerName = getWinnerName(squares[4]);
        title.innerHTML = `${winnerName} winner`;
        document.getElementById('item4').style.background = '#000'
        document.getElementById('item5').style.background = '#000'
        document.getElementById('item6').style.background = '#000'
        gameOver = true; 
        setInterval(function(){title.innerHTML += '.'}, 1000);
        setTimeout(function(){location.reload()},4000);
    }else if(squares[7] == squares[8]  && squares[8] == squares[9] && squares[7] != ''){
        let winnerName = getWinnerName(squares[7]);
        title.innerHTML = `${winnerName} winner`;
        document.getElementById('item7').style.background = '#000'
        document.getElementById('item8').style.background = '#000'
        document.getElementById('item9').style.background = '#000'
        gameOver = true; 
        setInterval(function(){title.innerHTML += '.'}, 1000);
        setTimeout(function(){location.reload()},4000);
    }else if(squares[1] == squares[4]  && squares[4] == squares[7] && squares[1] != ''){
        let winnerName = getWinnerName(squares[1]);
        title.innerHTML = `${winnerName} winner`;
        document.getElementById('item1').style.background = '#000'
        document.getElementById('item4').style.background = '#000'
        document.getElementById('item7').style.background = '#000'
        gameOver = true; 
        setInterval(function(){title.innerHTML += '.'}, 1000);
        setTimeout(function(){location.reload()},4000);
    }else if(squares[2] == squares[5]  && squares[5] == squares[8] && squares[2] != ''){
        let winnerName = getWinnerName(squares[2]);
        title.innerHTML = `${winnerName} winner`;
        document.getElementById('item2').style.background = '#000'
        document.getElementById('item5').style.background = '#000'
        document.getElementById('item8').style.background = '#000'
        gameOver = true; 
        setInterval(function(){title.innerHTML += '.'}, 1000);
        setTimeout(function(){location.reload()},4000);
    }else if(squares[3] == squares[6]  && squares[6] == squares[9] && squares[3] != ''){
        let winnerName = getWinnerName(squares[3]);
        title.innerHTML = `${winnerName} winner`;
        document.getElementById('item3').style.background = '#000'
        document.getElementById('item6').style.background = '#000'
        document.getElementById('item9').style.background = '#000'
        gameOver = true; 
        setInterval(function(){title.innerHTML += '.'}, 1000);
        setTimeout(function(){location.reload()},4000);
    }else if(squares[1] == squares[5]  && squares[5] == squares[9] && squares[1] != ''){
        let winnerName = getWinnerName(squares[1]);
        title.innerHTML = `${winnerName} winner`;
        document.getElementById('item1').style.background = '#000'
        document.getElementById('item5').style.background = '#000'
        document.getElementById('item9').style.background = '#000'
        gameOver = true; 
        setInterval(function(){title.innerHTML += '.'}, 1000);
        setTimeout(function(){location.reload()},4000);
    }else if(squares[3] == squares[5]  && squares[5] == squares[7] && squares[3] != ''){
        let winnerName = getWinnerName(squares[3]);
        title.innerHTML = `${winnerName} winner`;
        document.getElementById('item3').style.background = '#000'
        document.getElementById('item5').style.background = '#000'
        document.getElementById('item7').style.background = '#000'
        gameOver = true; 
        setInterval(function(){title.innerHTML += '.'}, 1000);
        setTimeout(function(){location.reload()},4000);
    }
    // Draw condition
    let isDraw = true;
    for (let i = 1; i < 10; i++) {
        if (squares[i] === '') {
            isDraw = false;
            break;
        }
    }
    if (isDraw && !gameOver) {
        title.innerHTML = "Draw!";
        for (let i = 1; i < 10; i++) {
            document.getElementById('item' + i).style.background = '#000';
        }
        gameOver = true;
        setTimeout(function(){location.reload()}, 4000);
    }
}
function game(id){
    if (gameOver) return;
    let element = document.getElementById(id);
    if(turn === 'x' && element.innerHTML == ''){
        element.innerHTML = 'X';
        winner();
        if (gameOver) return;
        if (window.gameMode === 'multi') {
            turn = 'o';
            title.innerHTML = (window.player2Name || "O") + " Turn";
        } else if (window.gameMode === 'ai') {
            turn = 'o';
            title.innerHTML = "O Turn";
            setTimeout(aiMove, 500); // AI plays as O
        }
    } else if (turn === 'o' && window.gameMode === 'multi' && element.innerHTML == ''){
        element.innerHTML = 'O';
        winner();
        if (gameOver) return;
        turn = 'x';
        title.innerHTML = (window.player1Name || "X") + " Turn";
    }
}
document.querySelectorAll('input[name="mode"]').forEach(radio => {
    radio.addEventListener('change', function() {
        document.getElementById('playerNames').style.display = this.value === 'multi' ? 'block' : 'none';
    });
});

// Handle form submission
document.getElementById('gameForm').onsubmit = function(e) {
    e.preventDefault();
    let mode = document.querySelector('input[name="mode"]:checked').value;
    let player1 = "Player 1";
    let player2 = "Player 2";
    if (mode === 'multi') {
        player1 = document.getElementById('player1').value || "Player 1";
        player2 = document.getElementById('player2').value || "Player 2";
    }
    // Store mode and names for use in your game logic
    window.gameMode = mode;
    window.player1Name = player1;
    window.player2Name = player2;
    document.getElementById('startModal').style.display = 'none';
    // Optionally update UI with player names
    // title.innerHTML = player1Name + "'s Turn";
};