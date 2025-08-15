//object through singelton or constructor 
const tinder = new Object() //singelton object

tinder.id = "34637"
tinder.name = "yug"
tinder.isLoggedIn = false
//console.log(tinder);

//obejct in obejct
const user = {
    email: "yug@gmail.com",
    fullname: {
        firstname: "yug",
        lastname: "chaudhary",
    }
}

//console.log(user.fullname);

//combine objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = Object.assign({}, obj1, obj2)//target,source
//console.log(obj3);

//mainly used method > spread

const obj3 = {...obj1, ...obj2}
//console.log(obj3);


//values from database
const userr = [
    {
        id: "2133"
    },
    {
        id: "598435"
    }
]
//console.log(userr[1].id);
//METHODS
console.log(tinder);

console.log(Object.keys(tinder)); //stored as array
console.log(Object.values(tinder));
console.log(Object.entries(tinder));

//if value exists
console.log(tinder.hasOwnProperty('isLoggedIn'));










