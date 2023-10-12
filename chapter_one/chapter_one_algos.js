// Threes and Fives
function threesFives() {
    sum = 0
    for (let i = 100; i <= 4000000; i++) {
        if (i%3 == 0 || i%5 == 0) {
            if (!i%3 == 0 && i%5 == 0) {
                sum += i
            }
        }
    }
    console.log("sum: " + sum)
}
threesFives()

function betterThreesFives(min, max) {
    sum = 0
    for (let i = min; i <= max; i++) {
        if (i%3 == 0 || i%5 == 0) {
            if (!i%3 == 0 && i%5 == 0) {
                sum += i
            }
        }
    }
    console.log("sum: " + sum)
}
betterThreesFives(1, 20)

// Generate Coin Change
function generateCoinChange(cents) {
    centsLeft = cents%25
    console.log(centsLeft)
    quarters = (cents - centsLeft)/25
    cents = centsLeft
    console.log("quarters: " + quarters)
    console.log("cents after quarters: " + cents)

    centsLeft = cents%10
    dimes = (cents - centsLeft)/10
    cents = centsLeft
    console.log("dimes: " + dimes)
    console.log("cents after dimes: " + cents)
    
    centsLeft = cents%5
    nickels = (cents - centsLeft)/5
    cents = centsLeft
    console.log("nickels: " + nickels)
    console.log("cents after nickels: " + cents)
    
    centsLeft = cents%1
    pennies = (cents - centsLeft)/1
    cents = centsLeft
    console.log("pennies: " + pennies)
    console.log("cents after pennies: " + cents)
}
generateCoinChange(91)

// Sigma
function sigma(num) {
    sum = null
    for (let i = 1; i <= num; i++) {
        sum += i
    }
    console.log(sum)
}
sigma(7)

// Factorial
function factorial(num) {
    sum = 1
    for (let i = 1; i <= num; i++) {
        sum *= i
    }
    console.log(sum)
}
factorial(10)