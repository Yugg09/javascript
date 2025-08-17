//INTERVIEW BASED KNOWLEDGE

//.  JAVASCRIPT EXECUTION CONTEXT
// javascript is single threaded

// 1) global execution contest
// 2) function execution contest
// 3) eval


//js code executes in two phases:
// 1) memory creation phase - just create memory for variables 
// 2) execution phase 

let val1 = 10
let val2 = 5
function addnum(num1,num2){
    let total = num1+num2
    return total
}
let result1 = addnum(val1,val2)
let result2 = addnum(16,2)

//steps to execute
// 1) global execution => this ke andr allocate
// 2) mcp : create space for variables
// 3) execution phase : value vairables ke andr jaati h
// for a function ek nya meory phase na dexecution contest create hota h jo badme delete bhi hota h


//CALL STACKS
// lifo hota h
// too many func executing simultaneously