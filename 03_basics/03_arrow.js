//this means current context

const user = {
    username: "yug",
    price: 99,

    welcome: function(){
     console.log(`${this.username},welcome to website`);
     console.log(this);
     
    }
}
//user.welcome()
//user.username = "sam"
//user.welcome()
//console.log(this); //no context
//browser ke andr window object



//function chai(){
  //  let username = "yug"
    //console.log(this.username); //when executed in function this doesnt work
//}
//chai()




//const chai = function(){
   // let username = "yug"
    //console.log(this.username);
//}
//Chai()

//ARROW FUNCTION

const chai = () => {
    let username = "yug" //diff bw function and arrow function 
    console.log(this); // this doesnt work in arrow function why
}
chai()

//PURELY ARROW FUNCTION

//() => {}

    //const addtwo = (num1, num2) => { //basic arrrow function
      //  return num1 + num2 //explicit return
    //}
    //console.log(addtwo(5,6))



   // IMPLICIT RETURN

   //const addtwo = (num1,num2) =>  (num1+num2) //return not required
   //console.log(addtwo(5,7)); 
   
//returning object
const addtwo = (num1, num2) => ({username:"yug"})
console.log(addtwo(6,7));


//arrow in loops

const myarray = [3,5,6]
myarray.forEach( () => () )
