// 1. Da se vnesat 10 prijateli vo prazna niza so prompt i otkako ke se vnesat, da se ispecatat

const friends = []

// i = iterator
// for (let i = 0; i < 3; i++) {
//   const ime = prompt("Vnesi ime:")
//   friends.push(ime)
// }

// for (let index = 0; index < friends.length; index++) {
//   //console.log("my friend: " + friends[index] + "20:42")
//   console.log(`My friend: ${friends[index]} 20:42`)
// }


// 2. Za dadena niza od elementi, da se ispecatat vo obraten redosled
const niza = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// primer, kje treba da ispecati - 4, 3, 2, 1

for (let index = niza.length - 1; index >= 0; index--) {
  console.log(niza[index])
}

// console.log(niza.reverse())



// 3. Imame niza od dnevni temperaturi, da se najde prosecnata temp za dadenite denovi
const temp = [12, 15, 14, 20, 22, 30]

let sum = 0;

for (let i = 0; i< temp.length; i++) {
  sum += temp[i]
}

// if (!temp.length) console.log(0)
// else console.log(sum / temp.length)
console.log(!temp.length ? 0 : sum / temp.length)



// 4. Imame valkana niza koja sto sodrzi razlicni tipovi na elemnti, vklucuvajki i nedefinirani vrednosti
// Nedefinirani vrednosti bea null, undefined, '',.....
// Da se kreira nova niza kade sto ke se smestat samo validnite vrednosti
// primer: valkanaNiza = [1, "test", null, 2, 4, undefined] ====> chistaNiza = [1, "test", 2, 4]
// Na kraj, novata niza da se ispechati

const valkanaNiza = [1, "test", null, 2, 4, undefined]
const chistaNiza = []

for (let i = 0; i< valkanaNiza.length; i++) {
  const el = valkanaNiza[i];
  if (el) {
    chistaNiza.push(el)
  }
}

console.log(chistaNiza)