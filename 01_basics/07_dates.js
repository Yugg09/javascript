let myDate = new Date()
console.log(myDate.toISOString());
console.log(myDate.toLocaleString);

console.log(typeof myDate); //date is a object

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());


//with time
 
let myCreatedDatee = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDatee.toLocaleString());

//time stamp

let timeStamp = Date.now()
console.log(timeStamp);
 //time from a particular date 

 console.log(myCreatedDatee.getTime());
 //convert in seconds
 console.log(Math.floor(Date.now()/1000));


 let newDate = new Date()
 console.log(newDate.getMonth()+1);

 
 //IMP

 newDate.toLocaleString('default',{
      weekday: "long",
 })
 
 
 




