let homeScoreStr = document.getElementById("home-score");
let guestScoreStr = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;


function homeAdd1(){
    homeScore +=1;
    homeScoreStr.textContent = homeScore;
}
function homeAdd2(){
    homeScore +=2;
    homeScoreStr.textContent = homeScore;
}
function homeAdd3(){
    homeScore +=3;
    homeScoreStr.textContent = homeScore;
}
function guestAdd1(){
    guestScore +=1;
    guestScoreStr.textContent = guestScore;
}
function guestAdd2(){
    guestScore +=2;
    guestScoreStr.textContent = guestScore;
}
function guestAdd3(){
    guestScore +=3;
    guestScoreStr.textContent = guestScore;
}
function reset(){
    guestScore = 0;
    homeScore = 0;
    guestScoreStr.textContent = guestScore;
    homeScoreStr.textContent = homeScore;
}
