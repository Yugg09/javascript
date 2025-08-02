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
