// they all result in boolean 
// console.log(2>1)
// console.log(1>=1)
// console.log(2<1)
// console.log(1<=1)
// console.log(2!=1)

// console.log("2" == 2);
// console.log("02" == 2);


// comparison > , < converts null to a number == 0
// console.log(null > 0);
// console.log(null > -1);
// console.log(null < 0);
// console.log(null < 1);
// console.log(null == 0);
// console.log(null >= 0);
// console.log(null <= 0);


// undefined doesn't get affected by it
// console.log(undefined >= 0);
// console.log(undefined >= -2);

// === check the value and datatype also
// console.log(2 == "2");
// console.log(2 === "2");
// console.log(3 === 2);

// experiment
// console.log("hello" == "hello");
// console.log("hello" == hello");

// symbol data type is used to provide uniqueness 
let num1 =2
let num2 = 2
let num3 = Symbol('2')
let num4 = Symbol('2')

console.log(num1 == num2);
console.log(num1 == num3);
console.log(num3 == num4);