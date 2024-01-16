const str1=["piyush","lakshya","arun"]
const str2=["tanish","amrit","swyam"]
const p1= str1.slice()
const p2=str1.slice()
p1.push(str2)
console.log(p1)
console.log(str1)
console.log(p2.push(str2))
console.log(p2)

const p3= str1.concat(str2)
console.log(p3)
console.log(str1)
console.log(str2)
console.log(p1[3][1])
console.log(p3[4])

// another method for concating ... is spread
const p4=[ ...str1,...str2]
console.log(p4);

const str3 = [1,2,3,[4,5],6,4,[1,2,5,[6,7]]]
console.log(str3)


// all subarray into one
// inside flat we have to give depth
const p5 =str3.flat(0)
const p6 =str3.flat(1)
const p7 =str3.flat(2)
const p8 =str3.flat(Infinity)
console.log(p5)
console.log(p6)
console.log(p7)
console.log(p8)

let name="piyush"
console.log(Array.isArray(name))
console.log(Array.from(name))

let score1="100"
let score2="200"
let score3="300"
// console.log(Array.from(score1,score2,score3)) error 
console.log(Array.of(score1,score2,score3))
console.log(Array.from(score1))
console.log(Array.from(score2))
console.log(Array.from(score3))






// experiment

// const p= str1
// console.log("A", p)
// console.log(str1.push("B",str2))
// str1.push(str2)
// console.log("C",str1)
// console.log(p.push("D",str2))
// console.log(p.push("E",str2))
// console.log(p.push("F",str2))
// str1.concat(str2)
// console.log("G",str1)
// console.log("H",p)