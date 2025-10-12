# projects related to DOM

## project link

# solution code

## project 1

```javascript
// to select all buttons
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")


buttons.forEach(function(button) {
    button.addEventListener('click', function(e){
console.log(e)
console.log(e.target)
if(e.target.id === 'grey'){
    body.style.backgroundColor = e.target.id;
}
if(e.target.id === 'white'){
    body.style.backgroundColor = e.target.id;
}
if(e.target.id === 'blue'){
    body.style.backgroundColor = e.target.id;
}
if(e.target.id === 'yellow'){
    body.style.backgroundColor = e.target.id;
}
    });
});
```
## project 2

```javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  

  //checks
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```
## project 3
```javscript
//document.getElementById('clock')
const clock = document.querySelector('#clock')



//jitni baar 1 second maangoge utni baar ye function chalega
//1000ms = 1 second
//5000ms = 5 seconds
//2000ms = 2 seconds

setInterval(function(){
    let date = new Date()
    //console.log(date.toLocaleTimeString())
clock.innerHTML = date.toLocaleTimeString()

}, 1000)

```
## project 4
```javascript
const randomno = (parseInt(Math.random()*100 + 1));

const submit = document.querySelector('#subt')
const userinput = document.querySelector('#guessfeild');
const guessslot = document.querySelector('.guesses');
const reamaining = document.querySelector('.lastresult');
const loworhigh = document.querySelector('.loworhigh');
const startover = document.querySelector('.resultparas');

const p = document.createElement('p');
let prevguess = [];
let numofguess = 1;
let playgame = true;


//user available to play
if(playgame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
       const guess =  parseInt(userinput.value);
       validateGuess(guess);
    });
}



//validate input valid input hoga
function validateGuess(guess){ 
 if(isNaN(guess)){
    alert('Please enter a valid number');
 } else if(guess < 1){
    alert('Please enter a number greater than 0');
 } else if(guess > 100){
    alert('Please enter a number less than 100');
 } else{
    prevguess.push(guess);
    if(numofguess === 11){
        displayguesses(guess)
        displmessage(`Game Over! Number was ${randomno}`);
        endgame();
    }else{
        displayguesses(guess);
        checkguess(guess);
    };
    };
}
function checkguess(guess) {
 if(guess === randomno){
    displmessage(`You guessed it right! It was ${randomno}`);
    endgame();
 }else if(guess < randomno){
    displmessage('Too low!');
 }else if(guess > randomno){
    displmessage('Too high!');
    };
}
// clear the input field
function displayguesses(guess) {
    userinput.value = '';
    guessslot.innerHTML += `${guess}, `;
    numofguess++;
    reamaining.innerHTML = `${11 - numofguess} guesses remaining`;
}

function displmessage(message) {
    loworhigh.innerHTML = `<h2>${message}</h2>`;
}

function newgame() {
  const newgamebutton = document.querySelector('#newgame');
    newgamebutton.addEventListener('click', function(){
        
        randomno = (parseInt(Math.random()*100 + 1));
        prevguess = [];
        numofguess = 1;
        guessslot.innerHTML = '';
        reamaining.innerHTML = `${11 - numofguess} guesses remaining`;
        loworhigh.innerHTML = '';
        startover.removeChild(p);
        userinput.removeAttribute('disabled');
        playgame = true;
    }
)}

function endgame() {
    userinput.value = '';
     userinput.setAttribute('disabled', '');
     p.classList.add('button');
     p.innerHTML = `<h2 id="newgame">Start New Game</h2>`;
     startover.appendChild(p);
    newgame();
    playgame = false;
    
}
