// Logichki iskazi i uslovno izvrsuvanje na kod, logicki operatori

// console.log("test")

// alert("test")

// const text = prompt("Vnesi vrednost")

// logicki operatori
// ">" "<"  ">="  "=<" '!' "==" "!="

// hardcoded
const vnes1 = prompt("Vnesi prva vrednost")
const vnes2 = prompt("Vnesi vtora vrednost")

if (!vnes1 || !vnes2) {
  // GRESKA - nevaliden broj
} else {

  const a = Number(vnes1)
  const b = Number(vnes2)

  console.log(a)

  // uslov (if - statement)
  if (a < b) {
  
    // kodot sto treba da se izvrsi dokolku uslovot e ispolnet
    console.log(a + ' e pomalo od ' + b)
  
  } else if (a > b) {
  
    console.log(a + ' e pogolemo od ' + b)
  
  } else {
  
    // kodot sto ke se izvrsi dokolku nieden od gornite uslovi ne e ispolnet
    console.log(a + ' e ednakvo na ' + b)
  
  }
  
}


const broj1 = 7
const broj2 = 20

// && - logicko I
// || - logicko ILI
if ((broj1 < broj2) && (broj1 < 10)) {
  console.log("brojot e ednocifren")
}

const username = prompt("Vnesete korisnicko ime")
const password = prompt("Vnesete password") // null - ako na promptot pritisneme Cancel
console.log(password)

if (!password) {
  console.log("Ve molime vnesete validen password")
}
