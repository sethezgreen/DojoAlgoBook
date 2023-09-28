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
    max = 0
    for (let i = 0; i < numList.length; i++) {
        if (numList[i] > max) {
            max = numList[i]
        }
    }
    console.log(max)
}

findMax([1,2,3,4,5,6,5,6,7,8])
findMax([1,2,3,72,18])