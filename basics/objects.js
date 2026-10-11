

const id = Symbol(123)


const user ={
    [id]:123,
    name: "Amit",
     age : 26, 
     location: "Jalandhar",
     email: "amit@abc.com",
     isLoggedIn : false,
     lastLoginDays:["Monday","Friday"]

}

console.log(user.name)
console.log(user["email"])
console.log(user[id])
console.log(typeof user[id])
console.log(typeof id)

console.log(Object.keys(user))

console.log(Reflect.ownKeys(user))