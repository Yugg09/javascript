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
