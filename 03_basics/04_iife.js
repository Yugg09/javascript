//immediately invoked function impression 

(function chai(){   //named iifee
    console.log(`db connected`);
    })();


    //global scope ke pollution ko hatane ke liye iife use krte
    // first one for function defination and second one was for execution

    //iiife in arrow function
   ( (name) => {
    console.log(`db connected to ${name}`);
   })("yug")
