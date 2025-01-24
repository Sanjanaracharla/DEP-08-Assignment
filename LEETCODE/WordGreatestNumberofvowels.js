 Word have Greatest Number of vowels from line.

let sentence = "HAPPY NEW YEAR";
let res = "";
let words = sentence.split(' ');
let vowels = "aeiouAEIOU";
let totalcount = 0;

for (let word of words) {
    let count = 0;
    for (let char of word) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    if (count > totalcount) {
        res = word;
        totalcount = count;
    }
}

console.log(res);

//optimised using the reduce function
let sentence = "HAPPY NEW YEAR";
let result = "";
let words = sentence.split(' ');
let vowels = "aeiouAEIOU";
let highestVowelCount = 0;

words.forEach(word => {
    let vowelCount = Array.from(word).reduce((count, char) => vowels.includes(char) ? count + 1 : count, 0);
    if (vowelCount > highestVowelCount) {
        result = word;
        highestVowelCount = vowelCount;
    }
});

console.log(result);
