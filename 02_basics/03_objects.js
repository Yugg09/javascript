//constructor se humesha singleton bnagea

//object literals ans defining symbol
 
const mySym = Symbol("key1")



const JsUser = {
    name: "yug", //name consd. as string
    "full name" : "yug chaudhary",
    [mySym]: "mykey1", //right way
     age: 18,
    email: "yc@gmail.com",
    lastLoginDays: ["mon", "tues"]
}

console.log(JsUser.email);
//console.log(JsUser["email"]);
console.log( JsUser[mySym]);

JsUser.email = "yugch@gmail.com"
//Object.freeze(JsUser) // values are locked
//console.log(JsUser);


//function
JsUser.greeting = function(){
    console.log("hello");
}
console.log(JsUser.greeting());
//accessing object

JsUser.greetingTwo = function (){
    console.log(`hello , ${this.email}`);
}
console.log(JsUser.greetingTwo());








