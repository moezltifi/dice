
document.getElementById("refresh").onclick= getRandomValues
var scorePlayer1=0
var scorePlayer2=0
var numberOfRoundsPlayed=0
let maxNumberOfRounds=5


var palyer1 = prompt("what is the first player's name?","player1")
var palyer2 = prompt("what is the second player's name?","player2")

document.getElementById("Playern1").innerHTML =palyer1
document.getElementById("Playern2").innerHTML =palyer2

document.getElementById("NOfR").innerHTML =maxNumberOfRounds

document.getElementById("reset").onclick=reset

function reset(){
  numberOfRoundsPlayed=0
  scorePlayer1=0
  scorePlayer2=0
  document.getElementById("alert1").innerHTML=""
  document.getElementById("AcR").innerHTML =numberOfRoundsPlayed
  document.getElementById("Playern1").innerHTML =""
  document.getElementById("Playern2").innerHTML =""
  document.getElementById("Playern1").innerHTML =prompt("what is the first player's name?","player1")
  document.getElementById("Playern2").innerHTML =prompt("what is the second player's name?","player2")
  document.getElementById("countlabel1").innerHTML= 0
  document.getElementById("countlabel2").innerHTML= 0
}

function getRandomValues(){
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
    
     
    if (numberOfRoundsPlayed<maxNumberOfRounds){
    const d1Value = randomIntFromInterval(1, 6)
    const d2Value = randomIntFromInterval(1, 6)
    
    document.getElementById("d1").src="images/dice"+d1Value+".png"
    document.getElementById("d2").src="images/dice"+d2Value+".png"

    scorePlayer1=scorePlayer1+d1Value
    document.getElementById("countlabel1").innerHTML= scorePlayer1
    scorePlayer2=scorePlayer2+d2Value
    document.getElementById("countlabel2").innerHTML= scorePlayer2
    numberOfRoundsPlayed++

    document.getElementById("AcR").innerHTML =numberOfRoundsPlayed
    
    if (numberOfRoundsPlayed==maxNumberOfRounds){
      if(scorePlayer1==scorePlayer2){
        document.getElementById("alert1").innerHTML="Draw :)"
      }
      else if (scorePlayer2<scorePlayer1){
        document.getElementById("alert1").innerHTML=palyer1 +"\nis the winner :)"
      }
      else if (scorePlayer2>scorePlayer1){
        document.getElementById("alert1").innerHTML=palyer2 +"\nis the winner :)"

      }
      
    }
    
}
}


