function process(player,bot,Ps,Bs,o) {
    if(player!=bot)
        {
             result = (player > bot) ? player - bot : bot - player;
           if(player>bot && result==1)
              {  
                o.value=1
                Ps.value++
                }
            else if(bot>player && result==2)
                 {
                o.value=1 
                Ps.value++
                 }
              else 
                {
                    o.value=2
                    Bs.value++
                }
        }
        else
            o.value=0
}
let player
let bot
let result
let Pscore={value:0};
let Bscore={value:0};
let outcome={value:0};
let boutcome;
let botcard;

const messg=["Draw!","Win!","Lose!"];
const card=[ " ","rock", "paper","scissor"]
const color=["white","green","red"]

$(document).on("click","#rock",function()
{
   
    
    player=1;
    boutcome=0
    bot=Math.floor(Math.random() * 3) + 1;
    
    botcard="bot_"+card[bot];
    $('#'+card[1]).css('color','#FDEDED')
    $('#'+card[2]).css('color','#FDEDED')
    $('#'+card[3]).css('color','#FDEDED')
    $('#'+"bot_"+card[1]).css('color','#FDEDED')
    $('#'+"bot_"+card[2]).css('color','#FDEDED')
    $('#'+"bot_"+card[3]).css('color','#FDEDED')
    process(player,bot,Pscore,Bscore,outcome);
    
    if(outcome.value!=0)
        boutcome=(outcome.value==1)?2:1;
    else
     boutcome=0

    $('.mssg').css('opacity',1)
    $('#'+card[player]).css('color','#FCD783')
    $('#'+botcard).css('color','#FCD783')
    $('#player_mssg').text(messg[outcome.value]);
    $('#bot_mssg').text(messg[boutcome]);
    $('#player_mssg').css('color',color[outcome.value]);
    $('#bot_mssg').css('color',color[boutcome]);
    $('.Ppoints').text(Pscore.value);
    $('.Bpoints').text(Bscore.value);
    console.log(card[player],card[bot])
    console.log(Pscore.value,Bscore.value)
    console.log(outcome.value,boutcome)



})

$(document).on("click","#paper",function()
{
    player=2;
    boutcome=0
    bot=Math.floor(Math.random() * 3) + 1;
    
    botcard="bot_"+card[bot];
    $('#'+card[1]).css('color','#FDEDED')
    $('#'+card[2]).css('color','#FDEDED')
    $('#'+card[3]).css('color','#FDEDED')
    $('#'+"bot_"+card[1]).css('color','#FDEDED')
    $('#'+"bot_"+card[2]).css('color','#FDEDED')
    $('#'+"bot_"+card[3]).css('color','#FDEDED')
    process(player,bot,Pscore,Bscore,outcome);
    
    if(outcome.value!=0)
        boutcome=(outcome.value==1)?2:1;
    else
     boutcome=0

    $('.mssg').css('opacity',1)
    $('#'+card[player]).css('color','#FCD783')
    $('#'+botcard).css('color','#FCD783')
    $('#player_mssg').text(messg[outcome.value]);
    $('#bot_mssg').text(messg[boutcome]);
    $('#player_mssg').css('color',color[outcome.value]);
    $('#bot_mssg').css('color',color[boutcome]);
    $('.Ppoints').text(Pscore.value);
    $('.Bpoints').text(Bscore.value);
    console.log(card[player],card[bot])
    console.log(Pscore.value,Bscore.value)
    console.log(outcome.value,boutcome)

})
$(document).on("click","#scissor",function()
{
    player=3;
    boutcome=0
    bot=Math.floor(Math.random() * 3) + 1;
    
    botcard="bot_"+card[bot];
    $('#'+card[1]).css('color','#FDEDED')
    $('#'+card[2]).css('color','#FDEDED')
    $('#'+card[3]).css('color','#FDEDED')
    $('#'+"bot_"+card[1]).css('color','#FDEDED')
    $('#'+"bot_"+card[2]).css('color','#FDEDED')
    $('#'+"bot_"+card[3]).css('color','#FDEDED')
    process(player,bot,Pscore,Bscore,outcome);
    
    if(outcome.value!=0)
        boutcome=(outcome.value==1)?2:1;
    else
     boutcome=0

    $('.mssg').css('opacity',1)
    $('#'+card[player]).css('color','#FCD783')
    $('#'+botcard).css('color','#FCD783')
    $('#player_mssg').text(messg[outcome.value]);
    $('#bot_mssg').text(messg[boutcome]);
    $('#player_mssg').css('color',color[outcome.value]);
    $('#bot_mssg').css('color',color[boutcome]);
    $('.Ppoints').text(Pscore.value);
    $('.Bpoints').text(Bscore.value);
    console.log(card[player],card[bot])
    console.log(Pscore.value,Bscore.value)
    console.log(outcome.value,boutcome)

})

