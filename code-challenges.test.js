// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

//1. Create a function "randomColors"
//2. Takes in an array, removes the first item from the array and shuffles the remaining content
//3. expect the input ["purple", "blue", "green", "yellow", "pink"] .toEqual ["yellow", "blue", "pink", "green"] -- add expect.arrayContaining in front of the expect output
//4. Run yarn jest
//5. Got red

    describe("randomColors", () => {
        var colors1 = ["purple", "blue", "green", "yellow", "pink"]
        var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
        it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
        expect(randomColors(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"])),
        expect(randomColors(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
        })
    })

  
// b) Create the function that makes the test pass.

//6. create a function "randomColor" for a test and take in an array of strings
//7. .shift() - it's used get rid of the first index of array 
//8. create a new variable to store a new array after index[0] is removed
//9. run a for loop and use Math.floor(Math.random()) to shuffle indexs around
//10. create a new variable to store a new shuffled array
//11. return the removeFirstIndex
//12. run yarn jest
//13. Got green


    const randomColors = (arr) => {
        arr.shift()
        let removeFirstIndex = arr
        for (i = 0; i < removeFirstIndex.length; i++) {
            let shuffles = Math.floor(Math.random() * removeFirstIndex.length)
            let newSet  = removeFirstIndex[i]
            removeFirstIndex[i] = removeFirstIndex[shuffles]
            removeFirstIndex[shuffles] = newSet
        }
        return removeFirstIndex
    }


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

// var nums1 = [3, 56, 90, -8, 0, 23, 6]
// // Expected output: [-8, 90]
// var nums2 = [109, 5, 9, 67, 8, 24]
// // Expected output: [5, 109]

//1. Create a function "orderNums"
//2. Takes an array of numbers and returns an array of the minimum and maximum numbers in that order
//3. expect the input [3, 56, 90, -8, 0, 23, 6] .toEqual [-8, 90] and 
// expect the input [109, 5, 9, 67, 8, 24] .toEqual [5, 109] 
//4. Run yarn jest
//5. Got red 

    describe("orderNums", () => {
        var nums1 = [3, 56, 90, -8, 0, 23, 6]
        var nums2 = [109, 5, 9, 67, 8, 24]
        it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
        expect(orderNums(nums1)).toEqual([-8, 90]),
        expect(orderNums(nums2)).toEqual([5, 109])
        })
    })


// b) Create the function that makes the test pass.

//6. create a function "orderNums" for a test and take in an array of numbers
//7. do a for loop to go through every index in an array
//8. create a new variable to store a new array -- newNums = []
//9. use Math.max to get the maximum of the number in the array and store it in a maxNum variable
//10. use Math.min to get the minimun of the number in the array and store it in a minNum variable 
//11. push minNum and maxNum in a new variable called newNumset
//12. return newNums
//13. run yarn jest
//14. Got green

    const orderNums = (arr) => {
        for (i = 0; i < arr.length; i++) {
        newNums = []
        maxNum = Math.max(...arr)
        minNum = Math.min(...arr)
        newNumsSet = newNums.push(minNum, maxNum)
        }
        return newNums
    }

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// var testArray1 = [3, 7, 10, 5, 4, 3, 3]
// var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

//1. Create a function "noDuplicat"
//2. Takes in two arrays as arguments and returns one array with no duplicate values
//3. expect the input [3, 7, 10, 5, 4, 3, 3], [7, 8, 2, 3, 1, 5, 4] .toEqual [3, 7, 10, 5, 4, 8, 2, 1]
//4. Run yarn jest
//5. Got red 

    describe("noDuplicate", () => {
        var testArray1 = [3, 7, 10, 5, 4, 3, 3]
        var testArray2 = [7, 8, 2, 3, 1, 5, 4]
        it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
        expect(noDuplicate(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
        })
    })


// b) Create the function that makes the test pass.

//6. create a function "noDuplicate" for a test and take in two arrays as parameter
//7. merge two arrays using spread operator 
//8. create a variable newSetArray to store a new array 
//9. remove duplicate numbers in array using spread operator and Set method to get unique values
//10. return newSetArray
//11. run yarn jest
//12. Got green

    const noDuplicate = (arr1, arr2) => {
        let mergeArray = [...arr1, ...arr2]
        let newSetArray = [...new Set(mergeArray)]
        return newSetArray
    }
