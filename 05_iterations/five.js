//for each loop
const coding = ["js","java","cpp"]
// coding.forEach( function (val){
//     console.log(val);
    
//})

//arrow function
// coding.forEach( (val) => {
//     console.log(va);
    
// })


// function print(item){
//     console.log(item);
    
// }

// coding.forEach(print)


coding.forEach( (item, index, arr) => {
    console.log(item,index,arr);
    
} )

//object in array

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )