// Milk -40, Bread- 20, Banana- 10, Orange- 5, Apple- 6, Tomato -5
// + - * / %

const product = "Tomato"

switch (product) {
  case 'Milk': {
    console.log('The price of Milk is 40den.')
    break
  }

  case 'Bread': {
    console.log('The price of Bread is 20den.')
    break
  }

  case 'Banana': {
    console.log('The price of Banana is 10den.')
    break
  }

  case 'Orange':
  case 'Tomato': {

    let variable = 'I am buying some tomatoes'
    console.log(variable)
    console.log('The price of the product is 5den.')
    break
  }

  case 'Apple': {
    console.log('The price of Apple is 6den.')
    break
  }

  default: {
    console.log('Unknown product')
    break
  }
}


const day = 'FriDay'

switch (day.toLowerCase()) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday": {
    console.log("I have to go to work :(")
    break
  }

  case 'saturday':
  case 'sunday': {
    console.log("It's the weekend!")
    break
  }

  default: {
    console.log('Unknown day ???')
    break
  }
}

const broj = 1112

if (broj % 5 === 0) {
  console.log("Brojot e deliv so 5")
} else {
  console.log("Brojot ne e deliv so 5")
}

