// Number {400}
// [[Prototype]]: Number
// constructor: ƒ Number()
// toExponential: ƒ toExponential()
// toFixed: ƒ toFixed()
// toLocaleString: ƒ toLocaleString()
// toPrecision: ƒ toPrecision()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// [[Prototype]]: Object
// [[PrimitiveValue]]: 0

let num=400
let num1=300/7

console.log(num.toString().length)
console.log(num.toFixed(2))
console.log(num1)
console.log(num1.toFixed(2))

console.log(num1.toPrecision(5))

let num2=10000000000
console.log(num2.toLocaleString())
console.log(num2.toLocaleString('en-IN'))
// let num3=num.MIN_VALUE
console.log(Number.MIN_VALUE)


//              MATH
 
// Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}
// E: 2.718281828459045
// LN2: 0.6931471805599453
// LN10: 2.302585092994046
// LOG2E: 1.4426950408889634
// LOG10E: 0.4342944819032518
// PI: 3.141592653589793
// SQRT1_2: 0.7071067811865476
// SQRT2: 1.4142135623730951
// abs: ƒ abs()
console.log(Math.abs(-8))
// acos: ƒ acos()
// acosh: ƒ acosh()
// asin: ƒ asin()
// asinh: ƒ asinh()
// atan: ƒ atan()
// atan2: ƒ atan2()
// atanh: ƒ atanh()
// cbrt: ƒ cbrt()
// ceil: ƒ ceil()
console.log(Math.ceil(4.1));
// clz32: ƒ clz32()
// cos: ƒ cos()
// cosh: ƒ cosh()
// exp: ƒ exp()
// expm1: ƒ expm1()
// floor: ƒ floor()
console.log(Math.floor(4.9));
// fround: ƒ fround()
// hypot: ƒ hypot()
// imul: ƒ imul()
// log: ƒ log()
// log1p: ƒ log1p()
// log2: ƒ log2()
// log10: ƒ log10()
// max: ƒ max()
console.log(Math.max(4,3,6,1,3))
// min: ƒ min()
console.log(Math.min(4,3,6,1,3))
// pow: ƒ pow()
// random: ƒ random()
                //between 0 and 1
            console.log(Math.random())
        const min=10
        const max=20
     let req=   Math.random()*(max-min+1)
     console.log(Math.floor(req))
// round: ƒ round()
console.log(Math.round(4.32));
console.log(Math.round(4.82));
// sign: ƒ sign()
// sin: ƒ sin()
// sinh: ƒ sinh()
// sqrt: ƒ sqrt()
console.log(Math.sqrt(36));
// tan: ƒ tan()
// tanh: ƒ tanh()
// trunc: ƒ trunc()
// Symbol(Symbol.toStringTag): "Math"
// [[Prototype]]: Object

 