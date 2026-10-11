const mcu_heroes=["IronMan","Thor","SpiderMan"]
const dc_heroes=["Batman","Superman","Flash"]

//mcu_heroes.push(dc_heroes)
console.log(mcu_heroes)

const allHeroes = mcu_heroes.concat(dc_heroes)
console.log(allHeroes)

const all_new_Heroes = [...mcu_heroes,...dc_heroes]
console.log(all_new_Heroes)

const arr = [1,2,3,[4,5,6],7,[6,7,[4,5,6]]]
const real_arr = arr.flat(Infinity)
console.log(real_arr)

console.log(Array.isArray("Amit"))
console.log(Array.from("Amit"))

s1 = 100
s2 = 200
s3 = 300
console.log(Array.of(s1,s2,s3))