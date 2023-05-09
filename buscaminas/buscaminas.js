/*LVLS:
EASY= SIZEMAP 18
MEDIUM= SIZEMAP 26
HARD = SIZEMAP 36*/

//show modal
const modal1= new bootstrap.Modal(document.getElementById('exampleModalToggle'),{});
document.onreadystatechange = function(){
    modal1.show();
}

function isWin() {
    win = true;
    for (let i = 0; i < posiShark.length; i++) {
        for (let x = 0; x < posiShark.length; x++) {
            if (posiShark[i][x] == 1) {
                win = false;
            }
        }
    } if (win) {

        document.getElementById("containerB").style.opacity = 0.5;
        let a = document.getElementById("winnerTitle");
        let b = document.getElementById("score");
        let p = document.getElementById("database");
        a.innerHTML = "Winner chicken dinner";
        b.innerHTML = "Your score is <br>" + finalScore();
        b.style.position = "absolute";
        b.style.zIndex = 3;
        b.style.left = "700px";
        b.style.top = "400px";
        b.style.textAlign = "center";
        b.style.fontSize = "25px";
        document.removeEventListener('keydown', KeyHandler);
        createCookieStats("stats",4,finalScore(),totalTimeFinal);
        
        finalMenu(); 
        clearInterval(timer); 
        
    }
    
}



//sumarize the scrap collected at the end of the game + the basic score given that is 100 points.
function finalScore() {

    return totalScore = scrap + 100;
}

function finalMenu() {
    document.getElementById("menu").style = "position: absolute; margin-top:250px; left:680px;";
    let a = document.getElementById("menu");
    a.innerHTML = `<div><p onclick="playAgain()" style="text-align:center; cursor: pointer"> - Play again - </p></div>
    <div><p onclick="backToMenu()" style="text-align:center; cursor: pointer"> - Exit - </p></div>`;
    a.style.fontSize = "30px";
}

function playAgain() {
    location.reload();
}
function backToMenu() {
    location.href = "../games.php";
}

window.onload = Initialize;
