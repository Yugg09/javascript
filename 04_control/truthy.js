const email = "yug@gmail.com"

if (email) {
console.log("got user emal");
}
else{ 
    console.log("dont have user email");   
}

// falsy values
//false, 0, -0, bigint, "", null, undefined, nan
//truthy value
// "0", 'false', " ", [], {}, function(){}

//array check
if(email.length === 0){
    console.log("array is empty");
    
}

//object check

const emptyobj = {}

if(Object.keys(emptyobj).length === 0){
    console.log("object is empty");
    
}
//nullish calescing operator (??) : null undefined

let val1;
//val1 =5 ?? 10 
//val1 = null ?? 10 //safety check
//only made for null and undefined
console.log(val1);

//terniary operator
//condition ? true:false. if else type

const price = 100
price <=80 ? console.log("lessthan 80") : console.log("more than 80");



