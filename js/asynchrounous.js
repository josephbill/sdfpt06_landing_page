// async js allows a program to start an operation and continue doing other work while waiting for the 
// operation to finish  examples: 
// 1. Fetching data from an API 
// 2. Reading a large file 
// 3. Waiting for a database response 
// 4. Upload media (images,videos,svgs,)
// 5. Processing large amounts of data e.g  jumia product loading 

// setTimeout method 
console.log("1. Start")
// set timeout method calls the callback function after a set delay
// setTimeout(callbackfunction, delay) //delay is always given as milliseconds 1s = 1000ms 
setTimeout(() => {
  // do this after 5 seconds 
  console.log("2. Food is ready")
}, 5000) 

console.log("Other things continue before timer elapses")

// WRITING ASYNCHRONOUS PROCESSES IN JS 
// 1. callbacks : a function passed to another function to be executed later after a process occurs
function greeting(name,footerNote){
  console.log("Hello " + name)
  footerNote()
}
// 1. call stack greeting( footerNote)  -> footerNote()

function footerNote(){
  console.log("Thank you for visiting our restaurant today!!")
}
// event is greeting has to be called for footerNote to run 
greeting("Joseph", footerNote)

// 2. promises : represents the eventual success or failure of an async.process 
// 3. async /await : modern JS way of writing promises in a way that resembles async.code