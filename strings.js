// let name="piyush"
// let age = 20

// // // old way for concating
// // console.log(name +" " + age)

// // // new way for concating
// // console.log(`my name is ${name} and my age is ${age}`)
const sentence="my name is piyush nayak"
let index=5;
// // [[Prototype]]
// // : 
// // String


// 17 -21 no longer use 
// // anchor:  ƒ anchor()
// // at : ƒ at()
// // big : ƒ big()
// // blink : ƒ blink()
// // bold : ƒ bold()
// // charAt : ƒ charAt()
// console.log(`the char at index ${index} is ${sentence.charAt(index)}`)

// // charCodeAt : ƒ charCodeAt()
console.log(`character code at ${sentence.charCodeAt(index)} is ${sentence.charAt(index)} `)
// // codePointAt : ƒ codePointAt()
// // concat : ƒ concat()
let str1="hello"
let str2="world" 
console.log(str1.concat(' ', str2))
console.log(str2.concat(',', str1))
console.log("hello".concat(" ","world"));
// // constructor : ƒ String()
// // endsWith : ƒ endsWith()
let url="hi234@gmail.com"
console.log(url.endsWith('.com'))

// not in use 40-42
// // fixed : ƒ fixed()
// // fontcolor : ƒ fontcolor()
// // fontsize : ƒ fontsize()

// // includes : ƒ includes()
let word="piyush"
console.log(`the word "${word}" ${sentence.includes(word) ? 'is' : 'is not' } in the sentence`)
// // indexOf : ƒ indexOf()
let srchword="nayak"
console.log(`the word ${srchword} is at ${sentence.indexOf(srchword)}`)
// // isWellFormed : ƒ isWellFormed()
// // italics : ƒ italics()
// // lastIndexOf : ƒ lastIndexOf()
// // length: 0
// // link : ƒ link()
// // localeCompare : ƒ localeCompare()
// // match : ƒ match()
// // matchAll : ƒ matchAll()
// // normalize : ƒ normalize()
let str3="piyush "
console.log(str3.padEnd(15,'.'))
console.log(str3.padStart(15,'.'))
// // padEnd : ƒ padEnd()
// // padStart : ƒ padStart()
// // repeat : ƒ repeat()
console.log(`echo piyush ${str3.repeat(5)}`)
console.log(sentence.replace('piyush nayak','rishu gupta'))
// // replace : ƒ replace()
// // replaceAll : ƒ replaceAll()
// // search : ƒ search()
// // slice : ƒ slice()
// // small : ƒ small()
// // split : ƒ split()
// // startsWith : ƒ startsWith()
// // strike : ƒ strike()
// // sub : ƒ sub()
// // substr : ƒ substr()
// // substring : ƒ substring()
// // sup : ƒ sup()
// // toLocaleLowerCase : ƒ toLocaleLowerCase()
// // toLocaleUpperCase : ƒ toLocaleUpperCase()
// // toLowerCase : ƒ toLowerCase()
// // toString : ƒ toString()
// // toUpperCase : ƒ toUpperCase()
// // toWellFormed : ƒ toWellFormed()
// // trim : ƒ trim()
// // trimEnd :  ƒ trimEnd()
// // trimLeft : ƒ trimStart()
// // trimRight : ƒ trimEnd()
// // trimStart : ƒ trimStart()
// // valueOf : ƒ valueOf()
// // Symbol(Symbol.iterator) : ƒ [Symbol.iterator]()
// // [[Prototype]] : Object

let name = new String('piyush')
console.log(name.length)
console.log(name.toLowerCase())
console.log(name.toUpperCase())

// console.log(name);
let fname= "PIYUSH"
console.log(fname.length)

// substring
let newName=fname.substring(1,4)
console.log(newName)

//slicing
let anotherString=fname.slice(-4,-5)
console.log(fname.slice(0,4))

// trimming

let lname="   nayak   "
console.log(lname)
console.log(lname.trim())

// for replacing something with another
let college = "bad_college"
console.log(college.replace('bad', 'good'))
 
console.log(college.includes('college'))
console.log(college.includes('good'))

// splitting array into an array with words spaces , char 

let string="my name is piyush nayak"
const word1=string.split(' ')
console.log(word1)
console.log(word1[3])
const word2=string.split('')
console.log(word2[8])
