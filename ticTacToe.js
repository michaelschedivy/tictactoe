let set = 0;

let setsX = [0];
let setsO = [0];

let wins = 0;

const win1 = [1, 2, 3];
const win2 = [4, 5, 6];
const win3 = [7, 8, 9];

const win4 = [1, 4, 7];
const win5 = [2, 5, 8];
const win6 = [3, 6, 9];

const win7 = [1, 5, 9];
const win8 = [3, 5, 7];

let winner = false;
let lock = false;

let colorX = "#0800FF";
let colorO = "#FF0000";

let xWin = 0;
let oWin = 0;
function setColorX(id){
    if(set === 0){
        if(colorO === document.getElementById(id).value){
            alert("Nemůžete použít stejnou barvu na oba hráče!");
            document.getElementById("colorX").setAttribute("value", "#0800FF");
            document.getElementById("colorO").setAttribute("value", "#FF0000");
        }else{
            colorX = document.getElementById(id).value;
            document.getElementById("x").setAttribute("style", "color:" + colorX);
            document.getElementById("xx").setAttribute("style", "color:" + colorX);
            document.getElementById("xxx").setAttribute("style", "color:" + colorX);
        }
    }else{
        alert("Hra byla již započata, barva již nelze změnit!");
    }
}

function setColorO(id){
    if(set === 0){
        if(colorX === document.getElementById(id).value){
            alert("Nemůžete použít stejnou barvu na oba hráče!");
            document.getElementById(id).setAttribute("value", "");
            document.getElementById(id).setAttribute("value", "");
        }else{
            colorO = document.getElementById(id).value;
            document.getElementById("o").setAttribute("style", "color:" + colorO);
            document.getElementById("oo").setAttribute("style", "color:" + colorO);
            document.getElementById("ooo").setAttribute("style", "color:" + colorO);
        }
    }else{
        alert("Hra byla již započata, barva již nelze změnit!")
    }
}

function ticTacToe(button){
    if(lock === true){
        return;
    }
    document.getElementById("info").setAttribute("class", "off");
    document.getElementById("nextO").setAttribute("class", "off");
    document.getElementById("nextX").setAttribute("class", "off");

    if (set % 2 == 0){
        if (document.getElementById(button).className != 'buttonClear'){
            alert("Pole je již zaškrtlé!");
            return;
        }
        else{
            console.log("x sets");
            document.getElementById(button).setAttribute("class", "buttonX");
            document.getElementById(button).setAttribute("style", "border:1px solid "+ colorX +" ; color: "+ colorX +";");
            document.getElementById(button).textContent = "X"
            setsX.push(button);
            document.getElementById("nextO").setAttribute("class", "on");
        }
    }
    else{
        if (document.getElementById(button).className != 'buttonClear'){
            alert("Pole je již zaškrtlé!");
            return;
        }
        else {
            console.log("o sets");
            document.getElementById(button).setAttribute("class", "buttonO");
            document.getElementById(button).setAttribute("style", "border:1px solid "+ colorO +" ; color: "+ colorO +";");
            document.getElementById(button).textContent = "O"
            setsO.push(button);
            document.getElementById("nextX").setAttribute("class", "on");
        }
    }
    console.log(setsX);
    console.log(setsO);
    set = set + 1;

    //WINNER X
    winner = win1.every(value => {
        return setsX.includes(value);
    });
    if(winner === true) {
        wins = 1;
    }
    winner = win2.every(value => {
        return setsX.includes(value);
    });
    if(winner === true) {
        wins = 1;
    }
    winner = win3.every(value => {
        return setsX.includes(value);
    });
    if(winner === true) {
        wins = 1;
    }
    winner = win4.every(value => {
        return setsX.includes(value);
    });
    if(winner === true) {
        wins = 1;
    }
    winner = win5.every(value => {
        return setsX.includes(value);
    });
    if(winner === true) {
        wins = 1;
    }
    winner = win6.every(value => {
        return setsX.includes(value);
    });
    if(winner === true) {
        wins = 1;
    }
    winner = win7.every(value => {
        return setsX.includes(value);
    });
    if(winner === true) {
        wins = 1;
    }
    winner = win8.every(value => {
        return setsX.includes(value);
    });
    if(winner === true) {
        wins = 1;
    }

    //WINNER O

    winner = win1.every(value => {
        return setsO.includes(value);
    });
    if(winner === true) {
        wins = 2;
    }
    winner = win2.every(value => {
        return setsO.includes(value);
    });
    if(winner === true) {
        wins = 2;
    }
    winner = win3.every(value => {
        return setsO.includes(value);
    });
    if(winner === true) {
        wins = 2;
    }
    winner = win4.every(value => {
        return setsO.includes(value);
    });
    if(winner === true) {
        wins = 2;
    }
    winner = win5.every(value => {
        return setsO.includes(value);
    });
    if(winner === true) {
        wins = 2;
    }
    winner = win6.every(value => {
        return setsO.includes(value);
    });
    if(winner === true) {
        wins = 2;
    }
    winner = win7.every(value => {
        return setsO.includes(value);
    });
    if(winner === true) {
        wins = 2;
    }
    winner = win8.every(value => {
        return setsO.includes(value);
    });
    if(winner === true) {
        wins = 2;
    }

    if(set === 9){
        document.getElementById("nextO").setAttribute("class", "off");
        document.getElementById("nextX").setAttribute("class", "off");
        document.getElementById("winN").setAttribute("class", "on");
        document.getElementById("newGame").setAttribute("class", "newGameButton");
        lock = true;
    }
    if(wins === 1){
        document.getElementById("winX").setAttribute("class", "on");
        document.getElementById("winN").setAttribute("class", "off");
        document.getElementById("nextO").setAttribute("class", "off");
        document.getElementById("nextX").setAttribute("class", "off");
        document.getElementById("newGame").setAttribute("class", "newGameButton");
        xWin = xWin + 1;
        document.getElementById("scoreX").textContent = xWin;
        lock = true;
    }
    if(wins === 2){
        document.getElementById("winO").setAttribute("class", "on");
        document.getElementById("winN").setAttribute("class", "off");
        document.getElementById("nextO").setAttribute("class", "off");
        document.getElementById("nextX").setAttribute("class", "off");
        document.getElementById("newGame").setAttribute("class", "newGameButton");
        oWin = oWin + 1;
        document.getElementById("scoreO").textContent = oWin;
        lock = true;
    }
}

function newGame(reset){
    lock = false;
    winner = false;
    setsX = ["0"];
    setsO = ["0"];
    set = 0;
    wins = 0;

    document.getElementById("info").setAttribute("class", "on");
    document.getElementById("winX").setAttribute("class", "off");
    document.getElementById("winO").setAttribute("class", "off");
    document.getElementById("winN").setAttribute("class", "off");

    for(let i = 1; i < 10; i++){
        document.getElementById(i).removeAttribute("class");
        document.getElementById(i).setAttribute("class", "buttonClear");
    }
}

function reset(){
    lock = false;
    winner = false;
    setsX = ["0"];
    setsO = ["0"];
    set = 0;
    wins = 0;

    console.log(xWin, oWin)

    document.getElementById("info").setAttribute("class", "on");
    document.getElementById("winX").setAttribute("class", "off");
    document.getElementById("winO").setAttribute("class", "off");
    document.getElementById("winN").setAttribute("class", "off");

    for(let i = 1; i < 10; i++){
        document.getElementById(i).removeAttribute("class");
        document.getElementById(i).setAttribute("class", "buttonClear");
    }
    document.getElementById("nextO").setAttribute("class", "off");
    document.getElementById("nextX").setAttribute("class", "off");
    document.getElementById("info").setAttribute("class", "info");

    if(xWin > oWin){
        alert("Vyhrál X se skórem: " + xWin + ":" + oWin);
    }else if(xWin == oWin) {
        alert("Remíza se skórem: " + xWin + ":" + oWin);
    }else{
        alert("Vyhrál O se skórem: " + xWin + ":" + oWin);
    }

    xWin = 0;
    oWin = 0;

    document.getElementById("scoreX").textContent = xWin;
    document.getElementById("scoreO").textContent = oWin;

}
