// Synchronous JS executes instructions one at time, in order 
console.log("1. Start")
console.log("2. Processing Payment")
console.log("3. Payment Complete")
// calculate the total cost of tickets 
const ticketPrice = 1500
const no_of_tickets = 3
const total = ticketPrice * no_of_tickets
console.log(`Total: Kes ${total}`)
// what's the problem with synchronous code ? some operations take a long time and JS wont wait
// 1. Fetching data from an API 
// 2. Reading a large file 
// 3. Waiting for a database response 
// 4. Upload media (images,videos,svgs,)
// 5. Processing large amounts of data e.g  jumia product loading 
