//iteration1- declare all the variables.

const boxElements =document.querySelectorAll(".box")

let winningCombination=
[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],


]

const Message = document.getElementById("message")
const PlayAgain= document.getElementById("button")  
const result= document.getElementById("result")

var click=0;
let xAttempts =[]
let oAttempts=[]
let wonTheGame = 0;

//iteration2- Onclick function
boxElements.forEach((el,i,arr)=>{
  el.addEventListener('click',()=>{
    HandleClick(event)
  })
      
}) 

function HandleClick(e){
  let i = e.target.id;


  let p =document.createElement("p")


  p.setAttribute("id","text");
  p.style.color="red"
  boxElements[i-1].append(p);

  if (click % 2==0){
    p.innerHTML="X"
    p.style.color="yellow"
    xAttempts.push(parseInt(i-1))
    Checkresult(winningCombination,xAttempts,"X")
  }
  else {
    p.innerHTML="O"
    p.style.color="red"
    oAttempts.push(parseInt(i-1))
    Checkresult(winningCombination,oAttempts,"O")
  }
  click++

  if (click ==9 && wonTheGame==0){
    result.style.visibility="visible";
    Message.innerHTML="Its a Tie"
  }
}
  //iteration3
function Checkresult(winningCombination,attempts,player){
  let count=0;
  let checker=[];
   for (let i=0; i<winningCombination.length;i++){
    if (Array.isArray(winningCombination[i])){
      Checkresult(winningCombination[i],attempts,player) //recursive function
    }
    else{
      if(attempts.includes(winningCombination[i])){
        checker.push(true)
        count++
      }
      else{
        checker.push(false)
      }
    }
  }

if (checker.every(el=>el==true)&& count>2){
result.style.visibility="visible";
  Message.innerHTML="The winner is " + player +"!";
  wonTheGame= 1
}
}

//iteration4 restart function
PlayAgain.onclick=()=>{
   window.location.reload()
  }