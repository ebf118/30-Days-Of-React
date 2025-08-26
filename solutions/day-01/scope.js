// Window scope
// a = 'JavaScript' // is a window scope this found anywhere
// b = 10 // this is a window scope variable
// function letsLearnScope() {
//   console.log(a, b)
//   if (true) {
//     console.log(a, b)
//   }
// }
// console.log(a, b) 

//Global scope
// let a = 'JavaScript' // is a global scope it will be found anywhere in this file
// let b = 10 // is a global scope it will be found anywhere in this file
// function letsLearnScope() {
//   console.log(a, b) // JavaScript 10, accessible
//   if (true) {
//     let a = 'Python'
//     let b = 100
//     console.log(a, b) // Python 100
//   }
//   console.log(a, b)
// }
// letsLearnScope()
// console.log(a, b) // JavaScript 10, accessible

//Local scope
// let a = 'JavaScript' // is a global scope it will be found anywhere in this file
// let b = 10 // is a global scope it will be found anywhere in this file
// function letsLearnScope() {
//   console.log(a, b) // JavaScript 10, accessible
//   let c = 30
//   if (true) {
//     // we can access from the function and outside the function but
//     // variables declared inside the if will not be accessed outside the if block
//     let a = 'Python'
//     let b = 20
//     let d = 40
//     console.log(a, b, c) // Python 20 30
//   }
//   // we can not access c because c's scope is only the if block
//   console.log(a, b) // JavaScript 10
// }
// letsLearnScope()
// console.log(a, b) // JavaScript 10, accessible

// function letsLearnScope() {
//   var gravity = 9.81
//   console.log(gravity)
// }
// // console.log(gravity), Uncaught ReferenceError: gravity is not defined

// if (true) {
//   var gravity = 9.81
//   console.log(gravity) // 9.81
// }
// console.log(gravity) // 9.81

// for (var i = 0; i < 3; i++) {
//   console.log(i) // 1, 2, 3
// }
// console.log(i)

function letsLearnScope() {
  // you can use let or const, but gravity is constant I prefer to use const
  const gravity = 9.81
  console.log(gravity)
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true) {
  const gravity = 9.81
  console.log(gravity) // 9.81
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

for (let i = 0; i < 3; i++) {
  console.log(i) // 1, 2, 3
}