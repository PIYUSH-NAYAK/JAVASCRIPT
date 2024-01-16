// let num=49
// const res=Math.sqrt(49)

// if(res==7)
// {
//     console.log("THALA FOR A REASON")
// }

const myArr = [1,2,3,4,true,"piyush"]
console.log(typeof(myArr[3]))
console.log(typeof(myArr[4]))
console.log(typeof(myArr[5]))

// another way to declare arrays
const myArr2= new Array(1,2,3,4,5)

for(let i=0;i<5;i++)
{
  console.log(myArr2[i])
}
myArr2.push(67)
myArr2.pop()
myArr2.shift()
myArr2.unshift(1,1,1,1,1,1,1)
console.log(myArr2)
console.log(myArr2.includes(1))
console.log(myArr2.includes(112))
console.log(myArr2.indexOf(2))
console.log(myArr2.indexOf(1))

const newArr=myArr2.join()
console.log(newArr) 
console.log(typeof(newArr) )

const myN1=[0,1,2,3,4,5,6,7,8,9]
console.log("A",myN1)
const m1=myN1.slice(1,4)
console.log("B",myN1)
console.log(m1)
const m2=myN1.splice(1,4)
console.log("C",myN1)
console.log(m2)



// prototype


//             [[Prototype]]
//         Array(0)
// at: ƒ at()
// concat: ƒ concat()
// constructor: ƒ Array()
// copyWithin: ƒ copyWithin()
// entries: ƒ entries()
// every: ƒ every()
// fill: ƒ fill()
// filter: ƒ filter()
// find: ƒ find()
// findIndex: ƒ findIndex()
// findLast: ƒ findLast()
// findLastIndex: ƒ findLastIndex()
// flat: ƒ flat()
// flatMap: ƒ flatMap()
// forEach: ƒ forEach()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// join: ƒ join()
// keys: ƒ keys()
// lastIndexOf: ƒ lastIndexOf()
// length: 0
// map: ƒ map()
// pop: ƒ pop()
// push: ƒ push()
// reduce: ƒ reduce()
// reduceRight: ƒ reduceRight()
// reverse: ƒ reverse()
// shift: ƒ shift()
// slice: ƒ slice()
// some: ƒ some()
// sort: ƒ sort()
// splice: ƒ splice()
// toLocaleString: ƒ toLocaleString()
// toReversed: ƒ toReversed()
// toSorted: ƒ toSorted()
// toSpliced: ƒ toSpliced()
// toString: ƒ toString()
// unshift: ƒ unshift()
// values: ƒ values()
// with: ƒ with()
// Symbol(Symbol.iterator): ƒ values()
// Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}
//            [[Prototype]]: Object
// constructor: ƒ Object()
// hasOwnProperty: ƒ hasOwnProperty()
// isPrototypeOf: ƒ isPrototypeOf()
// propertyIsEnumerable: ƒ propertyIsEnumerable()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// __defineGetter__: ƒ __defineGetter__()
// __defineSetter__: ƒ __defineSetter__()
// __lookupGetter__: ƒ __lookupGetter__()
// __lookupSetter__: ƒ __lookupSetter__()
// __proto__: (...)
// get __proto__: ƒ __proto__()
// set __proto__: ƒ __proto__()
