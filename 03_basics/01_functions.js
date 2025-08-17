//function is basically a package of code

function sayMyName(){
    console.log("y");
    console.log("u");
    console.log("g");
}

//sayMyName()

function add(number1, number2){
    let result = number1 + number2
    return result
}
const result = add(3, 5)
//console.log(result);

function loginUser(username = "yug"){
    if(!username){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUser());

//too many items in cart too many values passed
function calculateCartPrice(val1, val2, ...num1){ // ... spread operator combines all in array  
    return num1
}

console.log(calculateCartPrice(200, 400, 600, 2000));

//passing function in object

const user = {
    username: "yug",
    price:  100
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
//handleObject(user)

//DIRECT OBJECT PASSING
 handleObject({
    username: "yug",
    price: 45
 })


 //PASSING ARRAY IN FUNCTION
 const myArray = [200, 400, 500]
  function returnSecondValue(getArray){
    return getArray[1]
  }
  console.log(returnSecondValue(myArray));
  
