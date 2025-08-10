const marvel = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash"]

//marvel.push(dc)
//console.log(marvel);

//const all = marvel.concat(dc) //return a whole new array 
//console.log(all);

//const allNew = [...marvel, ...dc] //spread
//console.log(allNew);

//const another = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
//const real = another.flat(Infinity) // infi basically depth
//console.log(real);

console.log(Array.isArray("yug"))
console.log(Array.from("yug")) //coverts into array
console.log(Array.from({name: "yug"})); // IMP


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); //convert in array



