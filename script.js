let colegas = ["Andrêina", "Pamela", "Barbara", "Larissa", "Ghislain"]
console.log(colegas)

colegas.unshift("Luan")

colegas.splice(5)

colegas.push("Tati", "Arthur")

colegas.shift(0)

let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort(function(x,y){
    return (x-y)
})
console.log(numbers)