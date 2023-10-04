// The "Basic 13" algorithm challenges

// 1. Print 1-255
for (let i = 1; i <= 255; i++) {
    console.log(i)
}

// 2. Print Sum 0-255
sum = 0
for (let i = 0; i <=255; i++) {
    sum += i
    console.log(sum)
}

// 3. Find and Print Max
function findMax(numList) {
    max = Number.NEGATIVE_INFINITY
    for (let i = 0; i < numList.length; i++) {
        if (numList[i] > max) {
            max = numList[i]
        }
    }
    console.log(max)
}

findMax([1,2,3,4,5,6,5,6,7,8])
findMax([1,2,3,72,18])

// 4. Array with Odds
function arrayOdd() {
    oddArray = []
    for (let i =0; i <= 255; i++) {
        if (i%2 != 0) {
            oddArray.push(i)
        }
    }
    console.log(oddArray)
}
arrayOdd()

// 5. Greater than Y
function greaterThanY(myArray, Y) {
    count = 0
    for (let i =0; i < myArray.length; i++) {
        if (myArray[i] > Y) {
            count++
        }
    }
    console.log(count)
}
myArray = [4,5,2,1,2,3,6]
greaterThanY(myArray, 3)

// 6. Max, Min, Average
function maxMinAverage(myArray) {
    max = Number.NEGATIVE_INFINITY
    min = Number.POSITIVE_INFINITY
    average = 0
    for (let i=0; i < myArray.length; i++) {
        if (myArray[i] > max) {
            max = myArray[i]
        }
        if (myArray[i] < min) {
            min = myArray[i]
        }
        average += myArray[i]
    }
    console.log(max, min, (average/myArray.length))
}

maxMinAverage([4,1,2,3,5,6])

// 8. Print Odds 1-255
function odds() {
    for (let i = 1; i <=255; i++) {
        if (i%2 != 0) {
            console.log(i)
        }
    }
}

odds()

// 9. Iterate and Print Array
function iterateArray(myArray) {
    for (let i = 0; i < myArray.length; i++) {
        console.log(myArray[i])
    }
}

myArray = [4,5,2,1,2,3,6]
iterateArray(myArray)

// 10. Get and Print Average
function getAverage(myArray) {
    average = null
    for (let i = 0; i < myArray.length; i++) {
        average += myArray[i]
    }
    console.log(average/myArray.length)
}

myArray = [4,5,2,1,2,3,6]
getAverage(myArray)

// 11. Sqaure the values
function squareValues(myArray) {
    newArray = []
    for (let i = 0; i < myArray.length; i++) {
        newArray.push(myArray[i]*myArray[i])
    }
    console.log(newArray)
}

myArray = [4,5,2,1,2,3,6]
squareValues(myArray)