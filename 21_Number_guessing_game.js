// NUMBER GUSSING GAME

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() *(maxNum-minNum+1) + 1);

let attempts = 0;
let guess;
let running = true;

while(running){
guess = window.prompt("Guess a Number!");
guess = Number(guess);
if(isNaN(guess)){
    window.alert("Please enter a valid number!");
}
else if(guess > maxNum || guess < minNum){
    window.alert("Please enter a valid number!");
}
else{
    attempts++;
    if(guess > answer){
        window.alert(`Too high! Enter a lower number!`);
    }
    else if(guess < answer){
        window.alert(`Too Low! Enter a higher number!`);
    }
    else{
        window.alert(`Congratulations! The answer was ${answer} and you gussed it in ${attempts}`)
    running = false;
    }

}

}


