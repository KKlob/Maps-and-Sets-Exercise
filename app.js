// Provided SpringBoard Question 1
// What does the following code return?
// new Set([1,1,2,2,3,4])
// Answer below

// new Set([1,1,2,2,3,4]) // {1, 2, 3, 4}

// Provided SpringBoard Question 2
// What does the following code return?
// [...new Set("referee")].join("")
// Answer Below

// [...new Set("referee")].join("") // "ref"

// Provided SpringBoard Question 3
// What does the Map m look like after running the following code?
// let m = new Map ();
// m.set([1,2,3], true);
// m.set([1,2,3], false);
// Answer Below

// console.log(m) // {Array(3) => true, Array(3) => false}

// Provided SpringBoard Question 4
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
// hasDuplicate([1,3,2,1]) // true
//hasDuplicate([1,5,-1,4]) // false
// Answer below

const hasDuplicate = (arr) => new Set(arr).size === arr.length ? false : true;

// Provided SpringBoard Question 5
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }
// Answer Below

const vowelCount = ((str) => {
    const vowels = Array.from('aeiou');
    const strVowels = Array.from(str.toLowerCase()).filter((char) => {
        for (let vowel of vowels) {
            if (char === vowel) return true;
        }
    });
    const singleVowels = [...new Set(strVowels)];
    const vowelMap = new Map();
    for (let char of singleVowels) {
        // let count = 0;
        // for (let vowel of strVowels) {
        //     if (char === vowel) {
        //         count++;
        //     }
        // }
        vowelMap.set(char, strVowels.reduce((count, vowel) => {
            if (char.includes(vowel)) return count += 1;
            return count;
        }, 0)
        );
    }
    return vowelMap;
});