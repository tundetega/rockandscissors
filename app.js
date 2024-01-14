let clickOne = document.getElementById('click');
const playOne = document.querySelector('.play-one');
const section = document.querySelector('section');
const playerScore = document.querySelector('div.player-score p')
const computerScore = document.querySelector('div.computer-score p');
const hand = document.querySelectorAll('div img');

 for (hands of hand) {
     hands.addEventListener('animationend',function(){
         this.style.animation = '';
     })
 }
let pScore = 0;
let cScore = 0;
// introduction page to the game 
clickOne.onclick = ()=>{
    playOne.classList.remove('fadeout');
    section.classList.add('fadeout');
}

const buttons = document.querySelectorAll('div button');
const winner =  document.querySelector('div h1')
const playerHand = document.querySelector('.player-hand');
const computerHand = document.querySelector('.computer-hand')
const computerOptions = ['rock','paper','scissors'];


// play match 
buttons.forEach((button)=>{
    button.addEventListener('click',function(){
        const computerPick = Math.floor(Math.random() * 3);
        //computer hand
        const computerChoice = computerOptions[computerPick];
        
        setTimeout(() => {
             // this is the compare of hands
        compareHands(this.textContent,computerChoice);
        updateScore();
            // image update
        playerHand.src = `./images/${this.textContent}.png`;
        computerHand.src = `./images/${computerChoice}.png`;
        }, 2000);
        playerHand.style.animation = 'shakePlayer 2s ease';
        computerHand.style.animation = 'shakeComputer 2s ease';
       
    })
})
function updateScore(){
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
}
 function compareHands(playerChoice,computerChoice){
    //for a tie
    if(playerChoice === computerChoice){
        winner.textContent = 'the match is a tie'
        return;
    }
    // for rock
    if(playerChoice === 'rock'){
        if(computerChoice === 'scissors'){
            winner.textContent = 'player wins'
            pScore++;
            return;
        }else{
            winner.textContent = 'computer wins'
            cScore++;
            return
        }
    }
    //for paper
    if(playerChoice === 'paper'){
        if(computerChoice === 'scissors'){
            winner.textContent = 'computer wins'
            cScore++;
            return;
        }else{
            winner.textContent = 'player wins'
            pScore++;
            return;
        }
    }
    // for scissors
    if(playerChoice === 'scissors'){
        if(computerChoice === 'scissors'){
            winner.textContent = 'computer wins'
            cScore++;
            return;
        }else{
            winner.textContent = 'player wins';
            pScore++;
            return;
        }
    }
}
