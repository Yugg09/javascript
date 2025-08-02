//datatypes are divided in primitive and non primitive 

//PRIMITIVE DATATYPE


  // 7 types: string , number , boolean , null(empty) , undefined , symbol , bigint
 const score = 100
 const isLoggedIn = false
 let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
 
const bigNumber = 9847848676478n


   //REFERENCE DATATYPE(non primitive) (inka return type object ata h)
   //array , objects , functions

   const heroes = ["yug", "aksh"]
  let myInfo = { //object
    name: "yug",
    age: 22,
   }


   const myFunction = function(){
    console.log("hello");
    
   }


   //++++++++++++++++++++++++++++++++

   // TWO TYPES OF MEMORY 
   //STACK (PRIMITIVE) (hume copy milta h)
   //HEAP (NON PRIMITIVE) (hume refernce milta h )

   let myYTname = "yugmotion"
   let anotherName = myYTname
   anotherName = "mrbeast"

   console.log(myYTname);
   console.log(anotherName);
   // stack m hume copy de gayi gyi thi 



   let userOne = {
    email: "yc@gmail",
    upi: "yf@ybl"
   }
   
   let userTwo = userOne

   userTwo.email = "hietsh@gmail"
   console.log(userOne.email);
   console.log(userTwo.email);
   
   