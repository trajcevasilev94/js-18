class Coffeemaker {
    coffee = 100
    milk = 100
    water = 1000
    cups = 0

    constructor(coffee, milk, water) {
        this.coffee = coffee
        this.milk = milk
        this.water = water
    }

    coffeeCup() {
        if (this.coffee >= 7 && this.milk >= 20 && this.water >= 100) {
            this.coffee = this.coffee - 7
            this.milk = this.milk - 20
            this.water = this.water - 100

            console.log("The coffee is done!")
            this.cups = this.cups + 1
        } else {
            console.log("You don't have enough ingredients!")

            if (this.coffee < 7) console.log("Missing coffee: " + (7 - this.coffee) + " grams.")
            if (this.milk < 20) console.log("Missing milk: " + (20 - this.milk) + " grams.")
            if (this.water < 100) console.log("Missing water: " + (100 - this.water) + " grams.")
        }
    }

    numOfCoffees() {
        return this.cups
    }
}
const cupOfCoffee = new Coffeemaker(25, 60, 300)
const coffeeInterval = setInterval(startCoffeeMaking, 2000)

function startCoffeeMaking() {
    temp = cupOfCoffee.numOfCoffees()
    cupOfCoffee.coffeeCup()

    setTimeout(function () {
        console.log('Number of cups made: ' + cupOfCoffee.numOfCoffees())
    }, 1000);

    if (temp === cupOfCoffee.numOfCoffees()) clearInterval(coffeeInterval)
}
