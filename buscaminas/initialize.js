

function GetRandomOcean() {
    var iRnd = Math.floor(Math.random() * 3) + 1;
    switch (iRnd) {
        case 1:
            {
                return "url('./media/beach/ocean1.gif')";
            }
        case 2:
            {
                return "url('./media/beach/ocean2.gif')";
            }
        case 3:
            {
                return "url('./media/beach/ocean3.gif')";
            }

    }
}
//Asign shark to random spots. MIGHT CHANGE IT TO ADD MORE SHARKS.
function GetRandomShark() {

    posiShark = new Array(sizeMap);
    let sharks = Math.ceil(sizeMap / 3);
    totalSharks = sharks;
    let k = 0;

    //Asign value 0 to all elements in the array.
    for (let iY = 0; iY < posiShark.length; iY++) {
        posiShark[iY] = new Array(sizeMap);
        for (let iX = 0; iX < posiShark.length; iX++) {
            posiShark[iY][iX] = 0;
        }
    }

    while (k <= sharks) {
        var iRndY = Math.floor(Math.random() * (sizeMap - 1));
        var iRndX = Math.floor(Math.random() * (sizeMap - 1));

        if (posiShark[iRndY][iRndX] == 0 && iRndY != 0) {
            posiShark[iRndY][iRndX] = 1;
            k++;
        }
    }
    console.log(posiShark);
    
}
function Initialize() {

    // Generate map
    qppMap = new Array(sizeMap);
    for (var iY = 0; iY < sizeMap; iY++) {
        qppMap[iY] = new Array(sizeMap);
        for (var iX = 0; iX < sizeMap; iX++) {
            qppMap[iY][iX] = GetRandomOcean();
        }
    }
    //Allocate sharks
    GetRandomShark();
    console.log(posiShark);
    // Allocate the visible board
    qppBoard = new Array(sizeBoard);
    for (var iY = 0; iY < sizeBoard; iY++) {
        qppBoard[iY] = new Array(sizeBoard);
        for (var iX = 0; iX < sizeBoard; iX++) {
            qppBoard[iY][iX] = document.getElementById('A' + ((iY + 1) * 10 + (iX + 1)));
        }
    }

    //initialize empty arrays for wood planks.
    initializeWoodPlank();
    initializeWalkable()
    //initialize colorboard
    ColorBoard();
    totalSharksNow();
    //initialize shark counter
    printSharkCounter();
    //initialize scrap counter
    printScrapCounter();
    timer();
    

    document.addEventListener('keydown', KeyHandler);

    qpBkdg = document.getElementById('gameboard');

}
function totalSharksNow(){
    let sharksNow=0;
    for (let i = 0; i < posiShark.length; i++) {
        for (let x = 0; x < posiShark.length; x++) {
            if (posiShark[i][x] == 1) {
               sharksNow++;
            }
        }
        totalSharks=sharksNow;
    }
    
}

function initializeWoodPlank() {
    //Initialize empty array for woodPlanks:
    woodPlank = new Array(sizeMap);
    for (let iY = 0; iY < woodPlank.length; iY++) {
        woodPlank[iY] = new Array(sizeMap);
        for (let iX = 0; iX < woodPlank.length; iX++) {
            woodPlank[iY][iX] = 0;
        }
    }

}
function initializeWalkable() {
    walkable = new Array(sizeMap);
    for (let iY = 0; iY < walkable.length; iY++) {
        walkable[iY] = new Array(sizeMap);
        for (let iX = 0; iX < walkable.length; iX++) {
            walkable[iY][iX] = 0;
        }
    }
}
function printSharkCounter() {
    let a = document.getElementById("sharkCounter");
    let b = document.getElementById("sCounterImg");
    b.innerHTML = "<img id=\"radarImg\" src=\"./media/beach/shark.gif\" alt=\"addTrash\" style=\"height:50px \"> </img>";
    a.innerHTML = totalSharks;
}

function printScrapCounter() {
    let a = document.getElementById("scrapCounter");
    let b = document.getElementById("scrapCounterImg");
    b.innerHTML = "<img id=\"radarImg\" src=\"./media/beach/trash.png\" alt=\"addTrash\" style=\"height:50px \"> </img>";
    a.innerHTML = scrap;
}

function timer() {

    var minutesLabel = document.getElementById("minutes");
    var secondsLabel = document.getElementById("seconds");
    var totalSeconds = 0;
    intervalId = setInterval(setTime, 1000);


    function setTime() {
        ++totalSeconds;
        let seg = pad(totalSeconds % 60);
        let min = pad(parseInt(totalSeconds / 60));
        secondsLabel.innerHTML = seg;
        minutesLabel.innerHTML = min;
        totalTime = min + ":" + seg;
        totalTimeFinal= (min*60)+seg;
    }
    function pad(val) {
        var valString = val + "";
        if (valString.length < 2) {
            return "0" + valString;
        }
        else {
            return valString;
        }
    }


}