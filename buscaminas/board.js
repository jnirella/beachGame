function ColorBoard() {
    for (var iY = iLocY - 4; iY < iLocY + 5; iY++) {
        for (var iX = iLocX - 4; iX < iLocX + 5; iX++) {

            if (iY < 0 || iX < 0 || iY > (sizeMap - 1) || iX > (sizeMap - 1)) {
                qppBoard[iY - iLocY + 4][iX - iLocX + 4].style.backgroundImage = "url('./media/beach/tierra.png')";
                qppBoard[iY - iLocY + 4][iX - iLocX + 4].style.border = "hidden";
                qppBoard[iY - iLocY + 4][iX - iLocX + 4].style.opacity = 1;
            } else {
                qppBoard[iY - iLocY + 4][iX - iLocX + 4].style.backgroundImage = qppMap[iY][iX];
                // qppBoard[iY - iLocY + 4][iX - iLocX + 4].style.border = "dashed #FFFF00 2px";
                if (walkable[iY][iX] === 1) {
                    qppBoard[iY - iLocY + 4][iX - iLocX + 4].style.opacity = 0.5;
                } else {
                    qppBoard[iY - iLocY + 4][iX - iLocX + 4].style.opacity = 1;
                }
            }
        }
    }

}
function CheckItem() {
    //Find trash materials. Show trash can.
    //0=trash // 1=Shark. // -2= trash collected.
    //If there is scrap:
    if (posiShark[iLocY][iLocX] == 0) {
        //Will collect a random quantity of scrap from 1 to 3 ud.
        var iRnd = Math.floor(Math.random() * 3) + 1;
        //show scrap gif.
        let a = document.getElementById('addTrash');
        a.innerHTML = "<img id=\"imgPj\" src=\"./media/beach/basura.gif\" alt=\"addTrash\" height=\"50\" width=\"50\"> </img>";
        //now this possition will be empty and no scrap will be collected anymore.
        posiShark[iLocY][iLocX] = -2;
        //Add to actual scrap status the scrap collected
        scrap += iRnd;
        //Remove the scrap gif after 1 second displaying it.
        setTimeout(function () {
            a.innerHTML = ""
        }, 1000);

    }
    // If there is a shark in the spot:
    else if (posiShark[iLocY][iLocX] == 1) {
        //Hide pj gif and show shark gif. GAME OVER.
        let a = document.getElementById('pj');
        a.innerHTML = "<img id=\"imgSharkEat\" src=\"./media/beach/sharkEat.gif\" alt=\"addTrash\"> </img>"
        setTimeout(function () {
            a.innerHTML = ""
        }, 1800);
        //GAME OVER.
        loose = false;
    }

}
function setWookPlank() {
    for (let i = 0; i < sizeMap; i++) {
        for (let x = 0; x < sizeMap; x++) {
            if (posiShark[i][x] == 2) {
                woodPlank[i][x] = "<img id=\"imgWoodPlank\" src=\"./media/beach/woodplank.png\" alt=\"addWoodPlank\" style=\"display: block; margin-top: 6px; margin-left: auto; margin-right: auto\"> </img>";

            } else {
                woodPlank[i][x] = "";
            }
        }

    }

}

function showWoodP() {
    setWookPlank();

    for (var iY = iLocY - 4; iY < iLocY + 5; iY++) {
        for (var iX = iLocX - 4; iX < iLocX + 5; iX++) {

            if (iY < 0 || iX < 0 || iY > (sizeMap - 1) || iX > (sizeMap - 1)) {
                qppBoard[iY - iLocY + 4][iX - iLocX + 4].innerHTML = "";
            } else {
                qppBoard[iY - iLocY + 4][iX - iLocX + 4].innerHTML = woodPlank[iY][iX];

            }
        }
    }

}
//IF WALKED ALREADY THROUGH THIS AREA, THE OPACITY OF THE IMAGE WILL BE SET TO 0.5
function opacityOcean() {
    walkable[iLocY][iLocX] = 1;

}