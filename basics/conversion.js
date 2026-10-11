let score = 50
let password="12345"

let isLoggedIn = true

let age;
let name = null

console.table([score,password,age,name,isLoggedIn])

let marks = String(score)
let numPassword = Number(password)
let login = Number(isLoggedIn)
let Age = String(age)
let firstName = Number(name)

console.table([marks,numPassword,login,Age,firstName])
console.table([typeof(marks),typeof(numPassword),typeof(login),typeof(Age),typeof(firstName)])