let gameSeq =[];
let userSeq =[];

let btns = ["yellow","red","purple","green"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp(){
    userSeq =[];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    //console.log(randIdx);
    //console.log(randColor);
    //console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn);

}

function checkAns(idx){
    //console.log("curr level: ",level);
    

    if(userSeq[idx]===gameSeq[idx]){
        //console.log("same value");
        if(userSeq.length == gameSeq.length){
           //levelUp();
           setTimeout(levelUp(),1000);
        }
    }else{
        h2.innerHTML = `Game over! Your Score was <b>${level}</b> <br>press any key to start`;
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
    }
}


function btnPress(){
    
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    //console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq =[];
    userSeq = 0;
    level =0;

}

