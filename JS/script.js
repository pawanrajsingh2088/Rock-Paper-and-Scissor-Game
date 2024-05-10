let player = document.getElementById("player");
let bot = document.getElementById("bot");
let notify = document.getElementById("notify");
let head = document.getElementById("head");


let bot_call = "";
let player_call = "";

let player_point = 0;
let bot_point = 0;

botPress();

function botPress(){
    let random = Math.floor((Math.random()*3))+1;
    if(random===1){
    bot_call = "rock";
}
else if(random===2){
    bot_call = "paper";
}
else{
    bot_call = "scissor";
}

    let boxes = document.querySelectorAll(".boxes");
        for(btn of boxes){
        btn.addEventListener("click",userPress);
    }
}

function userPress(){
    let btn = this;
    player_call = btn.getAttribute("id");


    if(bot_call==="rock" && player_call==="paper"){
        console.log("Player Wins");
        notify.innerHTML="Bot Call:-Rock, Your Call:-Paper,You Win";
        player_point++;
        player.innerHTML="Your Point is "+player_point;
    }

    else if(bot_call==="paper" && player_call==="scissor"){
        console.log("Player Wins");
        notify.innerHTML="Bot Call:-Paper, Your Call:-Scissor,You Win";
        player_point++;
        player.innerHTML="Your Point is "+player_point;
    }

    else if(bot_call==="scissor" && player_call==="rock"){
        console.log("Player Wins");
        notify.innerHTML="Bot Call:-Scissor, Your Call:-Rock,You Win";
        player_point++;
        player.innerHTML="Your Point is "+player_point;
    }

    else if(bot_call==="rock" && player_call==="scissor"){
        console.log("Bot Wins");
        notify.innerHTML="Bot Call:-Rock, Your Call:-Scissor,Bot Win";
        bot_point++;
        bot.innerHTML="Bot Point is "+bot_point;
    }

    else if(bot_call==="paper" && player_call==="rock"){
        console.log("Bot Wins");
        notify.innerHTML="Bot Call:-Paper, Your Call:-Rock,Bot Win";
        bot_point++;
        bot.innerHTML="Bot Point is "+bot_point;
    }

    else if(bot_call==="scissor" && player_call==="paper"){
        console.log("Bot Wins");
        notify.innerHTML="Bot Call:-Scissor, Your Call:-Paper,Bot Win";
        bot_point++;
        bot.innerHTML="Bot Point is "+bot_point;
    }

    else{
        console.log("Match Tied");
        notify.innerHTML="Tied";
    }
    botPress();
}