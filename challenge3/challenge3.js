const submitNumForm = document.querySelector("#submitNumber")
const genNum = document.querySelector("#genNum");
const guessNum = document.querySelector("#submitNumber input");
const playing = document.querySelector("#playing");
const result = document.querySelector("#result");

const SAVEDNUMBER = "GenNumber";

const ExistNum = localStorage.getItem(SAVEDNUMBER);


function guessSubmit(event){
    const genNumber = parseInt(genNum.value);
    const guessNumber = parseInt(guessNum.value);
    event.preventDefault();

    if(genNumber < 0){
        alert("plz input positive");
        return false;
      }else if(guessNumber >= genNumber){
        alert("Guess Number can't bigger than Generated Number");
        return false;
    }
    localStorage.setItem(SAVEDNUMBER, genNumber);
    printResult();
}
    
function printResult(){
    const genNumber = parseInt(genNum.value);
    const guessNumber = parseInt(guessNum.value);
    const ranNum = Math.round(Math.random() * genNumber);

        playing.innerText = `You chose ${guessNumber}, the machine chose ${ranNum}`;
        if(guessNumber === ranNum){
            result.innerText = `You Won!`;
        }else{
            result.innerText = `You lost!`;
        }
        
}

submitNumForm.addEventListener("submit", guessSubmit);


