const myArr=[0,1,2,3,"Amit"]
console.log(myArr[4])
console.log(myArr)
myArr.push(8)

console.log(myArr)

myArr.unshift(10)
console.log(myArr)
myArr.shift()
console.log(myArr)

const newArr = myArr.join()
console.log(newArr)

//slice , splice

const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("A:",myArr)

const myn2 = myArr.splice(1,3)

console.log(myn2)
console.log("B:",myArr)

myn2.splice(1,0,9)
console.log(myn2)
console.log("C:",myArr)

myn2.splice(2,1,90)
console.log(myn2)

