
document.getElementById("refresh").onclick= getRandomValues
var scorePlayer1=0
var scorePlayer2=0
var numberOfRound=0



var palyer1 = prompt("what is the first player's name?")
var palyer2 = prompt("what is the second player's name?")
let Round=prompt("how many rounds you want to play")

document.getElementById("Playern1").innerHTML =palyer1
document.getElementById("Playern2").innerHTML =palyer2

document.getElementById("NOfR").innerHTML =Round

document.getElementById("reset").onclick=reset

function reset(){
  numberOfRound=0
  scorePlayer1=0
  scorePlayer2=0
  document.getElementById("alert2").innerHTML=""
  document.getElementById("alert1").innerHTML=""
  document.getElementById("AcR").innerHTML =numberOfRound
  document.getElementById("Playern1").innerHTML =""
  document.getElementById("Playern2").innerHTML =""
  document.getElementById("Playern1").innerHTML =prompt("what is the first player's name?")
  document.getElementById("Playern2").innerHTML =prompt("what is the second player's name?")
  Round=prompt("how many rounds you want to play")
  document.getElementById("NOfR").innerHTML =Round
  document.getElementById("countlabel1").innerHTML= 0
  document.getElementById("countlabel2").innerHTML= 0
}

function getRandomValues(){
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
    
     
    if (numberOfRound<Round){
    const d1Value = randomIntFromInterval(1, 6)
    const d2Value = randomIntFromInterval(1, 6)
    
    document.getElementById("d1").src="images/dice"+d1Value+".png"
    document.getElementById("d2").src="images/dice"+d2Value+".png"

    scorePlayer1=scorePlayer1+d1Value
    document.getElementById("countlabel1").innerHTML= scorePlayer1
    scorePlayer2=scorePlayer2+d2Value
    document.getElementById("countlabel2").innerHTML= scorePlayer2
    numberOfRound++

    document.getElementById("AcR").innerHTML =numberOfRound
    
    if (numberOfRound==Round){
      if (scorePlayer2<scorePlayer1){
        document.getElementById("alert1").innerHTML=palyer1 +" is the winner with score :"+scorePlayer1
        document.getElementById("alert2").innerHTML=palyer2+" is the loser with score :"+scorePlayer2
      }
      else if (scorePlayer2>scorePlayer1){
        document.getElementById("alert2").innerHTML=palyer1 +" is the loser with score :"+scorePlayer1
        document.getElementById("alert1").innerHTML=palyer2 +" is the winner  with score :"+scorePlayer2

      }
      
    }
    
}
}


