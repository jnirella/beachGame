/* INDICADOR PROXIMIDAD: Hacer indicador en lateral de tablero donde idica tanto a N S E W con un indicador de 3 rayas (rollo wifi) 
cuan lejos puede estar el tiburon. 
Señal de 3: a menos de 5 casillas; 
Señal de 2: entre 5 y 9 casillas; 
Señal de 1: a más 0 igual de 10 casillas */
function checkAllRadars() {
    checkRadarN();
    checkRadarS();
    checkRadarE();
    cehckRadarW();
}
function checkRadarE() {
    let a = document.getElementById('radarE');

    if (radarNSEW(radarMin, 0, 1, 0, 0, 0, 0, 0, "min") == 1) {
        //pintar radar minimo Este
        a.innerHTML = "<img id=\"radarImg\" src=\"./media/beach/radar/RadarEMin.png\" alt=\"addTrash\"> </img>";
    } else if (radarNSEW(radarMed, radarMin, 1, 0, 0, 0, 0, 0, "med") == 2) {
        //pintar radar medio Este
        a.innerHTML = "<img id=\"radarImg\" src=\"./media/beach/radar/RadarEMed.png\" alt=\"addTrash\"> </img>";
    } else if (radarNSEW(sizeMap, radarFar, 1, 0, 0, 0, 0, iLocX, "far") == 3) {
        //pintar radar Far Este
        a.innerHTML = "<img id=\"radarImg\" src=\"./media/beach/radar/RadarEFar.png\" alt=\"addTrash\"> </img>";
    } else {
        //no pointar nada
        a.innerHTML = "<img id=\"radarImg\" src=\"./media/beach/radar/RadarEFar.png\" alt=\"addTrash\" style=\"filter: grayscale(100%);\"> </img>";
    }
}
function cehckRadarW() {
    let a = document.getElementById('radarW');
    if (radarNSEW(0, 0, 1, 0, 0, 0, radarMin, 0, "min") == 1) {
        //pintar radar este minimo West
        a.innerHTML = "<img id=\"radarImg\" src=\"./media/beach/radar/RadarWMin.png\" alt=\"addTrash\"> </img>";
    } else if (radarNSEW(0, 0, 0, 1, 0, 0, radarMed, radarMin, "med") == 2) {
        //pintar radar medio West
        a.innerHTML = "<img id=\"radarImg\" src=\"./media/beach/radar/RadarWMed.png\" alt=\"addTrash\"> </img>";
    } else if (radarNSEW(0, 0, 0, 1, 0, 0, iLocX, radarFar, "far") == 3) {
        //pintar radar Far West
        a.innerHTML = "<img id=\"radarImg\" src=\"./media/beach/radar/RadarWFar.png\" alt=\"addTrash\"> </img>";
    } else {
        //no pointar nada
        a.innerHTML = "<img id=\"radarImg\" src=\"./media/beach/radar/RadarWFar.png\" alt=\"addTrash\" style=\"filter: grayscale(100%);\"> </img>";
    }
}
function checkRadarN() {
    let a = document.getElementById('radarN');
    if (radarNSEW(0, 0, 0, 1, 0, -radarMin, 0, 0, "min") == 1) {
        //pintar radar este minimo North
        a.innerHTML = "<img id=\"radarImg\" src=\"./media/beach/radar/RadarNMin.png\" alt=\"addTrash\"> </img>";
    } else if (radarNSEW(0, 0, 0, 1, -radarMin, -radarMed, 0, 0, "med") == 2) {
        //pintar radar medio North
        a.innerHTML = "<img id=\"radarImg\" src=\"./media/beach/radar/RadarNMed.png\" alt=\"addTrash\"> </img>";
    } else if (radarNSEW(0, 0, 0, 1, -radarFar, -iLocY, 0, 0, "far") == 3) {
        //pintar radar Far North
        a.innerHTML = "<img id=\"radarImg\" src=\"./media/beach/radar/RadarNFar.png\" alt=\"addTrash\"> </img>";
    } else {
        //no pointar nada
        a.innerHTML = "<img id=\"radarImg\" src=\"./media/beach/radar/RadarNFar.png\" alt=\"addTrash\" style=\"filter: grayscale(100%);\"> </img>";
    }
}
function checkRadarS() {
    let a = document.getElementById('radarS');
    if (radarNSEW(0, 0, 0, 1, radarMin, 0, 0, 0, "min") == 1) {
        //pintar radar este minimo South
        a.innerHTML = "<img id=\"radarImg\" src=\"./media/beach/radar/RadarSMin.png\" alt=\"addTrash\"> </img>";
    } else if (radarNSEW(0, 0, 0, 1, radarMed, radarMin, 0, 0, "med") == 2) {
        //pintar radar medio South
        a.innerHTML = "<img id=\"radarImg\" src=\"./media/beach/radar/RadarSMed.png\" alt=\"addTrash\"> </img>";
    } else if (radarNSEW(0, 0, 0, 1, sizeMap, radarFar, 0, iLocY, "far") == 3) {
        //pintar radar Far South
        a.innerHTML = "<img id=\"radarImg\" src=\"./media/beach/radar/RadarSFar.png\" alt=\"addTrash\"> </img>";
    } else {
        //no pointar nada
        a.innerHTML = "<img id=\"radarImg\" src=\"./media/beach/radar/RadarSFar.png\" alt=\"addTrash\" style=\"filter: grayscale(100%);\"> </img>";
    }
}
function radarNSEW(radarX, radarMX, controlY, controlX, radarY, radarMY, iniWS, controlWS, whatRadar) {
    //radarFar Este.
    //radarX=es la posición final hasta la que se hará el bucle en vector X. Se le suma a la posición actual ya que esta será la posición inicial.
    //radarMX= es la posición inicial en la que empezará el bucle en vector X. Si es radar medio empieza en la posición 5 desde la posición actual.
    //radarY= lo mismo que el anterior pero para el vector Y.
    //radarMY= lo mismo que el anterior pero para el vector Y.
    /*controlY= variable de control para el vector Y. Se le suma a la posición inicial para crear una horquilla en la que se comprobará en E y W. Esta
    horquilla en Y será dos por arriba y dos por abajo*/
    /*controlX= Lo mismo que controlY pero para crear horquilla en vectorX, se mirara dos casillas por izquierda y dos por derecha. A comprobar N y S.*/
    //iniWS= variable para hacer la cuenta desde atras, tanto para el W como el S
    //controlWS= variable para indicar cual es la posicion maxima para hacer bucle desde W o S.
    let foundShark = true;
    let iniY = (iLocY + radarMY - controlY);
    let endY = (iLocY + radarY + controlY - controlWS);
    let iniX = (iLocX + radarMX - controlX - iniWS);
    let endX = (iLocX + radarX + controlX - controlWS);

    if (iniY < 0) {
        iniY = 0;
    } else if (endY > sizeMap) {
        endY = sizeMap;
    } else if (iniX < 0) {
        iniX = 0;
    } else if (endX > sizeMap) {
        endX = sizeMap;
    }
    for (let iY = iniY; iY <= endY; iY++) {
        for (let iX = iniX; iX <= endX; iX++) {
            if (posiShark[iY][iX] == 1) {
               
                if (whatRadar == "min") {
                    foundShark = false;
                    return 1;
                } else if (whatRadar == "med") {
                    foundShark = false;
                    return 2;
                } else if (whatRadar == "far") {
                    foundShark = false;
                    return 3;
                }
            }
        }
    } if (foundShark === true) {
        return -1;
    }
}