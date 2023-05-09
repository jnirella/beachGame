function KeyHandler(qKeyEvent) {

    let iKeyDown = 0;
    let iLeftArrow = 37;
    let iUpArrow = 38;
    let iRightArrow = 39;
    let iDownArrow = 40;
    let iW = 87;
    let iA = 65;
    let iS = 83;
    let iD = 68;

    if (qKeyEvent) {
        iKeyDown = qKeyEvent.which;
    } else {
        iKeyDown = window.event.keyCode;
    }

    if (iKeyDown === iLeftArrow) {
        if (iLocX > 0) {
            iLocX = iLocX - 1;
            document.getElementById("pj").innerHTML = "<img id='imgPj' src=\"./media/beach/pjLeft.gif\" alt=\"pj\"></img>";
            CheckItem();

        }
    } else if (iKeyDown === iRightArrow) {
        if (iLocX < (sizeMap - 1)) {
            iLocX = iLocX + 1;
            document.getElementById("pj").innerHTML = "<img id='imgPj' src=\"./media/beach/pjRight.gif\" alt=\"pj\"></img>";
            CheckItem();
        }
    } else if (iKeyDown === iUpArrow) {
        if (iLocY > 0) {
            iLocY = iLocY - 1;
            document.getElementById("pj").innerHTML = "<img id='imgPj' src=\"./media/beach/pjUp.gif\" alt=\"pj\"></img>";
            CheckItem();
        }
    } else if (iKeyDown === iDownArrow) {
        if (iLocY < (sizeMap - 1)) {
            iLocY = iLocY + 1;
            document.getElementById("pj").innerHTML = "<img id='imgPj' src=\"./media/beach/pjDown.gif\" alt=\"pj\"></img>";
            CheckItem();
        }
    }
    //keys to set platforms (WASD):

    else if (iKeyDown === iW && iLocY > 0) {
        if (posiShark[iLocY - 1][iLocX] < 2) {
            if (scrap < subtractScrapPlank) {
                alert("You don't have enough scrap to build a plank.");
            } else {
                posiShark[iLocY - 1][iLocX] = 2;
                totalSharksNow();
                printSharkCounter();
                scrap -= subtractScrapPlank;
                isWin();
            }

        } else {
            console.log("there is a wood plank here already.");
        }
    } else if (iKeyDown === iA && iLocX > 0) {
        if (posiShark[iLocY][iLocX - 1] < 2) {
            if (scrap < subtractScrapPlank) {
                alert("You don't have enough scrap to build a plank.");
            } else {
                posiShark[iLocY][iLocX - 1] = 2;
                totalSharksNow();
                printSharkCounter();
                scrap -= subtractScrapPlank;
                isWin();
            }

        } else {
            console.log("there is a wood plank here already.");
        }
    } else if (iKeyDown === iS && iLocY < sizeMap) {
        if (posiShark[iLocY + 1][iLocX] < 2) {
            if (scrap < subtractScrapPlank) {
                alert("You don't have enough scrap to build a plank.");
            } else {
                posiShark[iLocY + 1][iLocX] = 2;
                totalSharksNow();
                printSharkCounter();
                scrap -= subtractScrapPlank;
                isWin();
            }

        } else {
            console.log("there is a wood plank here already.");
        }
    } else if (iKeyDown === iD && iLocX < sizeMap) {
        if (posiShark[iLocY][iLocX + 1] < 2) {
            if (scrap < subtractScrapPlank) {
                alert("You don't have enough scrap to build a plank.");
            } else {
                posiShark[iLocY][iLocX + 1] = 2;
                totalSharksNow();
                printSharkCounter();
                scrap -= subtractScrapPlank;
                isWin();
            }

        } else {
            console.log("there is a wood plank here already.");
        }
    }

    ColorBoard();

    showWoodP();

    opacityOcean();

    checkAllRadars();

    printScrapCounter();



    //GAME OVER IMAGE + menu
    if (loose == false) {
        clearInterval(timer);
        document.removeEventListener('keydown', KeyHandler);
        setTimeout(function () {
            document.getElementById("containerB").style.opacity = 0.5;
            let a = document.getElementById("winnerTitle");
            a.innerHTML = "GAME OVER";
            a.style.color = "#F2200C";
            a.style.left = "670px";
            finalMenu();
        }, 2000);

    }
    return false;
}
