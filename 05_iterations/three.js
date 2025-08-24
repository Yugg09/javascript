// for of loop
//array specific loops
const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
    
}
   
//maps unique values

const map = new Map()
map.set('in',"india")
map.set('us',"usa")
console.log(map);

for (const  [key, value] of map) {
    console.log(key, '-', value);
    
}

//for of loop on objects
const myobj = {
    'game1': 'nfs',
    'game2': 'spideman'
} 
for (const [key,value] of myobj) {
    
} // we have another method to iterate on objects