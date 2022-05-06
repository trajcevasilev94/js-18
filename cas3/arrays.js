// nizi (arrays)

// redosledot na elementite vo edna niza e fiksen i sekoj element si ima svoja pozicija (index)
let animals = ["Cat", "Dog", "Parrot", "Rabbit"]
              //i = 0 // i=1  // i =2   // i = 3


              // X elementi -- posledniot index kje bide X - 1

console.log(animals[1])

const friends = [
  "Aleksandar", // 0
  "Simona", // 1
  "Petar", // 2
  "Sanja", // 3
  "Angela", // 4
  "Gjorgji",
  "Marko"
]

// friends = []
friends[2] = "Nesto drugo"

for (let index = 0; index < friends.length; index++) {
  console.log(friends[index])
}

// vnesuva nov element na krajot na nizata
friends.push("Aleksandra")
console.log(friends)

// vnesuva nov element na pocetok na nizata
friends.unshift("Kristijan")
console.log(friends)

// go brise posledniot element od nizata i go vrakaj vo promenliva
const izbrisan = friends.pop()

// go brise prviot element od nizata i go vrakaj vo promenliva
const izbrisan2 = friends.shift()

console.log(izbrisan, izbrisan2)
console.log(friends)

console.log(friends.concat(animals))