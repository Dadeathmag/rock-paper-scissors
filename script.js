
function playgame(move){
    const score=JSON.parse(localStorage.getItem("score"))||{
        win:0,
        lose:0,
        tie:0
    }

    let cpu=computermove();
    let result="";
    if(move==="rock"){
        //stone
        if(cpu==="scissor"){
            score.win++;
            result="WIN";
        }
        else if(cpu==="paper"){
            score.lose++;
            result="LOSE";
        }
        else{
            score.tie++;
            result="TIE";
        }
    }else if(move==="paper"){
        //paper
        if(cpu==="rock"){
            score.win++;
            result="WIN";
        }
        else if(cpu==="scissor"){
            score.lose++;
            result="LOSE";
        }
        else{
            score.tie++;
            result="TIE";
        }
    }
    else{
        //scissor
        if(cpu==="paper"){
            score.win++;
            result="WIN";
        }
        else if(cpu==="rock"){
            score.lose++;
            result="LOSE";
        }
        else{
            score.tie++;
            result="TIE";
        }
    }

    localStorage.setItem("score", JSON.stringify(score));   
    displaymoves(move,cpu);
    displayresult(result);
    displayscore(score);
}

function computermove(){
    let rand=Math.random();
    if(rand<1/3)return "rock";
    else if(rand>=1/3&&rand<2/3)return "paper";
    else return "scissor";
}

function displaymoves(move,cpu){
    document.querySelector(".moves").innerHTML=`YOU:<img class="move-icon" src="images/${move}-emoji.png"> CPU:<img class="move-icon" src="images/${cpu}-emoji.png">`;
}
function displayresult(result){
    document.querySelector(".result").innerHTML=`YOU ${result}!!`;
}
function displayscore(score){
    document.querySelector(".score").innerHTML=`WIN:${score.win} LOSE:${score.lose} TIE:${score.tie}`;
}

function resetscore(){
    reset={
        win:0,
        lose:0,
        tie:0
    }
    localStorage.setItem("score",JSON.stringify(reset));
    displayscore(reset);
}