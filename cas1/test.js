// deklaracija / definicija na promenliva + zadavanje na pocetna vrednost
var greeting = 'Hello Semos Academy' // string


// deklaracija na promenliva - camelCase imenuvanje
let imeIPrezime
// zadavanje na vrednost na promenliva
imeIPrezime = 'Koco Nica'

// vrednosta na konstantata ne moze da se smeni
const godinaNaRagjanje = 2022 // number

// koristenje na promenliva
// citanje na vrednost na promenliva
// pristapuvanje na vrednost na promenliva
console.log(greeting, imeIPrezime, godinaNaRagjanje)

// console.warn, console.error

// menuvanje na vrednost na promenliva
greeting = 'Hello Node academy'

// logicki promenlivi - boolean
const polnoleten = true

// vrednosti na promenlivi od nevaliden tip / faulty values
// undefined, null, NaN, false, 0, ' ', '' ...

let test
console.error(test)

let a = 6, b = 3, c = a + b


b = b + 2 // b = 5
b += 2
b++ // b+=1  b = b+ 1


console.log(c, a - b, a / b, a*b, a % b) // modulo operator - % - ostatok pri celobrojno delenje

let ime = "petko"
let prezime = "petkovski"
console.log(ime + ' ' + prezime)

console.log("test" + 5)
