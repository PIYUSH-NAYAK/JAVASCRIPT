            // date is an object


let date=new Date()
console.log(date)
console.log(date.toString())
console.log(date.toDateString())
console.log(date.toIsoString())
console.log(date.toISOString())
console.log(date.toJSON());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleTimeString());

const myDate=new Date(2024,0,19)
console.log(myDate.toDateString()) 


                // TIMESTAMP  
console.log(Date.now())
console.log(myDate.getTime())
// for changing into seconds
console.log(Math.floor(Date.now()/1000 ))

let newDate= new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay()+1)
console.log(newDate.getDate())

