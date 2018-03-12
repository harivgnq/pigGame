 var scores, roundScores, activePlayer, gamePlaying;

init();
document.querySelector(".btn-roll").addEventListener('click', function() {
    if(gamePlaying){
        console.log('New roll')
        var dice= Math.floor(Math.random()*6)+1; 
        console.log('you rolled a- '+dice);        
        document.querySelector("#current-"+activePlayer).textContent=dice;
        document.querySelector(".dice").style.display='block';
        document.querySelector(".dice").src='dice-'+dice+'.png';        
        console.log('the current player is -'+activePlayer);
    
    if(dice!==1) {
        roundScores+= dice;
        console.log(roundScores);
        document.querySelector("#current-"+activePlayer).textContent=roundScores;
        
    }
    else {
        nextPlayer()

    }
    }
  
    })
    document.querySelector(".btn-hold").addEventListener('click', function() {
        console.log('buton hold');
        if (gamePlaying) { 
            //add round score to total score
            scores[activePlayer] +=roundScores;
        //make roundscore =0 and display
        roundScores=0;
        document.querySelector("#current-"+activePlayer).textContent=roundScores;
        //update total score displayed on the screen
        document.getElementById("score-"+activePlayer).innerHTML=scores[activePlayer];
       
        //check if player won the game
        if(scores[activePlayer]>=100){
            console.log('Player- '+activePlayer+' won!');
            document.querySelector("#name-"+activePlayer).textContent='WINNER!';
            document.querySelector(".dice").style.display='none';
            document.querySelector(".player-"+activePlayer+"-panel").classList.add('winner');
            document.querySelector(".player-"+activePlayer+"-panel").classList.remove('active');
            gamePlaying=false;
        }
        else {
            nextPlayer();
        } 
        }
       


     
    })

document.querySelector(".btn-new").addEventListener('click',init)
    
function init() {
    scores =[0,0];
    roundScores= 0;
    activePlayer=0;
    
    gamePlaying=true;    

    document.querySelector("#current-1").textContent=0;
    document.querySelector("#current-0").textContent=0;
    document.getElementById("score-0").innerHTML=0;
    document.getElementById("score-1").innerHTML=0;
    document.getElementById("name-0").innerHTML='Player1';
    document.getElementById("name-1").innerHTML='Player2';
    document.querySelector(".player-0-panel").classList.remove('winner');
    document.querySelector(".player-1-panel").classList.remove('winner');
    document.querySelector(".player-"+activePlayer+"-panel").classList.add('active');
    document.querySelector(".dice").style.display='none';

}    
function nextPlayer() {
        document.querySelector("#current-"+activePlayer).textContent=0;
        document.querySelector(".player-"+activePlayer+"-panel").classList.remove('active');

        activePlayer==0? activePlayer=1 : activePlayer=0;
        roundScores=0
        console.log('round Score- '+roundScores);
        document.querySelector(".dice").style.display='none';
        document.querySelector(".player-"+activePlayer+"-panel").classList.add('active');
        document.querySelector("#current-"+activePlayer).textContent=roundScores;
        console.log('the current player is -'+activePlayer);
    }
    
