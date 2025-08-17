{} //scope 
let a = 300 //global scope

if (true) {
    let a = 10   //blockscope
    //console.log("inner", a); // jo andr define hua bahar ni ja skata
}

//console.log(a);


//SCOPE AND MINI HOISTING
function one(){
    const username = "yug"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);

    two()
    
}
one()


//intersetin exapla
console.log(addone(5)) //can execute
function addone(num){
return num+1
}


addtwo(5) //cant execute
const addtwo = function(num){ //variables can hold functions
    return num+2
}
