
//document.createElement() -> crear nuevo elemento
//setAttribute() -> añade atributos al elemento
//appendChild() -> añade el elemento a la pagina
    const insertDiv= document.getElementById("gameboard");
    
    const classDiv="ocean";
    const idA="A"
    let lNDiv=0;
    //getElementById('A' + ((iY + 1) * 10 + (iX + 1)))
    let tNDiv=0;

    for (let i = 0; i < 9; i++) {
        switch (i) {
            case 0:
                tNDiv = 0;
                break;
            case 1:
                tNDiv = 70;
                break;
            case 2:
                tNDiv = 140;
                break;
            case 3:
                tNDiv = 210;
                break;
            case 4:
                tNDiv = 280;
                break;
            case 5:
                tNDiv = 350;
                break;
            case 6:
                tNDiv = 420;
                break;
            case 7:
                tNDiv = 490;
                break;
            case 8:
                tNDiv = 560;
                break;

            default:
                break;
            }
        for (let x = 0; x < 9; x++) {
           
            switch (x) {
                case 0:
                    lNDiv = 0;
                    
                    break;
                case 1:
                    lNDiv = 70;
                   
                    break;
                case 2:
                    lNDiv = 140;
                    break;
                case 3:
                    lNDiv = 210;
                    break;
                case 4:
                    lNDiv = 280;
                    break;
                case 5:
                    lNDiv = 350;
                    break;
                case 6:
                    lNDiv = 420;
                    break;
                case 7:
                    lNDiv = 490;
                    break;
                case 8:
                    lNDiv = 560;
                    break;
                default:
                    break;
            }
            let idNum= ((i+1)*10)+(x+1);
            const newDiv=document.createElement("div");
            newDiv.setAttribute('class', 'oceano');
            newDiv.setAttribute('id',(idA+idNum));
            newDiv.style.left = lNDiv + "px";
            newDiv.style.top = tNDiv + "px";
            newDiv.style.boxSizing = "border-box";
            newDiv.style.position = "absolute";
            newDiv.style.width = "70px"; 
            newDiv.style.height = "70px";
            newDiv.style.zIndex= "2";
            insertDiv.appendChild(newDiv);
            
            }        
            
        }
        

