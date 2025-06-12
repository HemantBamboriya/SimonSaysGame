let gameseq=[];
let userseq=[];
let h2= document.querySelector("h2");
let started=false;
let level=0;
let btns=["yellow","red","purple","green"];


document.addEventListener("keypress",function(){
if(started==false){
    console.log("game is started");
    started=true;
    levelUp();
}
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);
}

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
//random button choose
let randIdx=Math.floor(Math.random()*3);
let randColor = btns[randIdx];
let randBtn =document.querySelector(`.${randColor}`);
gameseq.push(randColor);

// console.log(randIdx);
// console.log(randColor);
// console.log(randBtn);
 gameFlash(randBtn);
}

function checkAns(idx){
//console.log("curr level:",level);
//let idx=level-1;
if(userseq[idx]===gameseq[idx]){
    if(userseq.length == gameseq.length){
      setTimeout(levelUp,1000);
    }
   
}else{
    h2.innerText=`Game Over! Press any key to start.`;
}

}

function btnPress()
{
    let btn = this;
    userFlash(btn);
    //console.log("btn was pressed");
    userColor= btn.getAttribute("id");
   // console.log(userColor);
   userseq.push(userColor);
   checkAns(userseq.length-1);
    
}

let allBtns=document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click",btnPress);
}