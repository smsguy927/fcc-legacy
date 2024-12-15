import * as assert from "node:assert";
import {
    convertCtoF,
    reverseString,
    factorialize,
    findLongestWordLength,
    largestOfFour,
    confirmEnding,
    repeatStringNumTimes,
    truncateString,
    findElement,
    booWho,
    titleCase,
    frankenSplice
} from "../modules/Easy.js";


describe('convertCtoF()', function () {
    it('converts Celsius temperature to Fahrenheit 0', function () {
        // Setup
        const input = -30
        const expected = -22

        // Exercise
        const result = convertCtoF(input);

        // Verify
        assert.strictEqual(result, expected);
    })
    it('converts Celsius temperature to Fahrenheit 1', function () {
        // Setup
        const input = -10
        const expected = 14

        // Exercise
        const result = convertCtoF(input);

        // Verify
        assert.strictEqual(result, expected);
    })
    it('converts Celsius temperature to Fahrenheit 2', function () {
        // Setup
        const input = 0
        const expected = 32

        // Exercise
        const result = convertCtoF(input);

        // Verify
        assert.strictEqual(result, expected);
    })
    it('converts Celsius temperature to Fahrenheit 3', function () {
        // Setup
        const input = 20
        const expected = 68

        // Exercise
        const result = convertCtoF(input);

        // Verify
        assert.strictEqual(result, expected);
    })
    it('converts Celsius temperature to Fahrenheit 4', function () {
        // Setup
        const input = 30
        const expected = 86

        // Exercise
        const result = convertCtoF(input);

        // Verify
        assert.strictEqual(result, expected);
    })

})

describe('reverseString()', function () {
    it('reverses a string 0', function () {
        // Setup
        const input = "hello"
        const expected = "olleh"

        // Exercise
        const result = reverseString(input);

        // Verify
        assert.strictEqual(result, expected);
    })
    it('reverses a string 1', function () {
        // Setup
        const input = "Howdy"
        const expected = "ydwoH"

        // Exercise
        const result = reverseString(input);

        // Verify
        assert.strictEqual(result, expected);
    })
    it('reverses a string 2', function () {
        // Setup
        const input = "Greetings from Earth"
        const expected = "htraE morf sgniteerG"

        // Exercise
        const result = reverseString(input);

        // Verify
        assert.strictEqual(result, expected);
    })

    it('reverses a string 3', function () {
        // Setup
        const input = "kayak"
        const expected = "kayak"

        // Exercise
        const result = reverseString(input);

        // Verify
        assert.strictEqual(result, expected);
    })
})
describe('factorialize()', function () {
    it('returns the factorial of a number 0', () => {
        const input = 0
        const expected = 1
        const result = factorialize(input);
        assert.equal(result, expected)
    });

    it('returns the factorial of a number 1', () => {
        const input = 5
        const expected = 120
        const result = factorialize(input);
        assert.equal(result, expected)
    });
    it('returns the factorial of a number 2', () => {
        const input = 10
        const expected = 3628800
        const result = factorialize(input);
        assert.equal(result, expected)
    });

    it('returns the factorial of a number 3', () => {
        const input = 20
        const expected = 2432902008176640000
        const result = factorialize(input);
        assert.equal(result, expected)
    });
})
describe('findLongestWordLength()', function () {
    it('returns a number', () => {
        const input = "The quick brown fox jumped over the lazy dog"
        const expected = true
        const result = !isNaN(findLongestWordLength(input));
        assert.equal(result, expected)
    });
    it('returns the length of the longest word in a string 0', () => {
        const input = "The quick brown fox jumped over the lazy dog"
        const expected = 6
        const result = findLongestWordLength(input);
        assert.equal(result, expected)
    });

    it('returns the length of the longest word in a string 1', () => {
        const input = "May the force be with you"
        const expected = 5
        const result = findLongestWordLength(input);
        assert.equal(result, expected)
    });

    it('returns the length of the longest word in a string 2', () => {
        const input = "What is the average airspeed velocity of an unladen swallow"
        const expected = 8
        const result = findLongestWordLength(input);
        assert.equal(result, expected)
    });

    it('returns the length of the longest word in a string 3', () => {
        const input = "Google do a barrel roll"
        const expected = 6
        const result = findLongestWordLength(input);
        assert.equal(result, expected)
    });
    it('returns the length of the longest word in a string 4', () => {
        const input = "What if we try a super-long word such as otorhinolaryngology"
        const expected = 19
        const result = findLongestWordLength(input);
        assert.equal(result, expected)
    });
})
describe('largestOfFour()', function () {
    it('returns an array', () => {
        const input = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]
        const expected = true
        const result = Array.isArray(largestOfFour(input));
        assert.equal(result, expected)
    });
    it('returns an array consisting of the largest number from each provided sub-array. 0', () => {
        const input = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]
        const expected = [5,27,39,1001]
        const result = largestOfFour(input);
        assert.deepStrictEqual(result, expected)
    });

    it('returns an array consisting of the largest number from each provided sub-array. 1', () => {
        const input = [[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]
        const expected = [9, 35, 97, 1000000]
        const result = largestOfFour(input);
        assert.deepStrictEqual(result, expected)
    });

    it('returns an array consisting of the largest number from each provided sub-array. 2', () => {
        const input = [[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]
        const expected = [25, 48, 21, -3]
        const result = largestOfFour(input);
        assert.deepStrictEqual(result, expected)
    });
})

describe('confirmEnding()', function () {
    it('Check if a string ends with the given target string 0', () => {
        const input = ["Bastian", "n"]
        const expected = true
        const result = confirmEnding(input[0], input[1]);
        assert.strictEqual(result, expected)
    })
    it('Check if a string ends with the given target string 1', () => {
        const input = ["Congratulation", "on"]
        const expected = true
        const result = confirmEnding(input[0], input[1]);
        assert.strictEqual(result, expected)
    })
    it('Check if a string ends with the given target string 2', () => {
        const input = ["Connor", "n"]
        const expected = false
        const result = confirmEnding(input[0], input[1]);
        assert.strictEqual(result, expected)
    })
    it('Check if a string ends with the given target string 3', () => {
        const input = ["Walking on water and developing software from a specification are easy if both are frozen", "specification"]
        const expected = false
        const result = confirmEnding(input[0], input[1]);
        assert.strictEqual(result, expected)
    })
    it('Check if a string ends with the given target string 4', () => {
        const input = ["He has to give me a new name", "name"]
        const expected = true
        const result = confirmEnding(input[0], input[1]);
        assert.strictEqual(result, expected)
    })
    it('Check if a string ends with the given target string 5', () => {
        const input = ["Open sesame", "same"]
        const expected = true
        const result = confirmEnding(input[0], input[1]);
        assert.strictEqual(result, expected)
    })
    it('Check if a string ends with the given target string 6', () => {
        const input = ["Open sesame", "game"]
        const expected = false
        const result = confirmEnding(input[0], input[1]);
        assert.strictEqual(result, expected)
    })
    it('Check if a string ends with the given target string 7', () => {
        const input = ["If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"]
        const expected = false
        const result = confirmEnding(input[0], input[1]);
        assert.strictEqual(result, expected)
    })
    it('Check if a string ends with the given target string 8', () => {
        const input = ["Open sesame", "sage"]
        const expected = false
        const result = confirmEnding(input[0], input[1]);
        assert.strictEqual(result, expected)
    })
    it('Check if a string ends with the given target string 9', () => {
        const input = ["Abstraction", "action"]
        const expected = true
        const result = confirmEnding(input[0], input[1]);
        assert.strictEqual(result, expected)
    })
})
describe('repeatStringNumTimes()', function () {
    it('Returns a given string repeated num times or an empty string if num is not a positive number. 0', () => {
        const input = ["*", 3]
        const expected = "***"
        const result = repeatStringNumTimes(input[0], input[1]);
        assert.strictEqual(result, expected)
    })
    it('Returns a given string repeated num times or an empty string if num is not a positive number. 1', () => {
        const input = ["abc", 3]
        const expected = "abcabcabc"
        const result = repeatStringNumTimes(input[0], input[1]);
        assert.strictEqual(result, expected)
    })
    it('Returns a given string repeated num times or an empty string if num is not a positive number. 2', () => {
        const input = ["abc", 4]
        const expected = "abcabcabcabc"
        const result = repeatStringNumTimes(input[0], input[1]);
        assert.strictEqual(result, expected)
    })
    it('Returns a given string repeated num times or an empty string if num is not a positive number. 3', () => {
        const input = ["abc", 1]
        const expected = "abc"
        const result = repeatStringNumTimes(input[0], input[1]);
        assert.strictEqual(result, expected)
    })
    it('Returns a given string repeated num times or an empty string if num is not a positive number. 4', () => {
        const input = ["*", 8]
        const expected = "********"
        const result = repeatStringNumTimes(input[0], input[1]);
        assert.strictEqual(result, expected)
    })
    it('Returns a given string repeated num times or an empty string if num is not a positive number. 5', () => {
        const input = ["abc", -2]
        const expected = ""
        const result = repeatStringNumTimes(input[0], input[1]);
        assert.strictEqual(result, expected)
    })
    it('Returns a given string repeated num times or an empty string if num is not a positive number. 6', () => {
        const input = ["abc", 0]
        const expected = ""
        const result = repeatStringNumTimes(input[0], input[1]);
        assert.strictEqual(result, expected)
    })
    it('Returns a given string repeated num times or an empty string if num is not a positive number. 7', () => {
        const input = ["hahaha", 3]
        const expected = "hahahahahahahahaha"
        const result = repeatStringNumTimes(input[0], input[1]);
        assert.strictEqual(result, expected)
    })
})
describe('truncateString()', function () {
    it('Truncate a string if it is longer than the given maximum string length with ... 0', () => {
        const input = ["A-tisket a-tasket A green and yellow basket", 8]
        const expected = "A-tisket..."
        const result = truncateString(input[0], input[1]);
        assert.strictEqual(result, expected)
    })
    it('Truncate a string if it is longer than the given maximum string length with ... 1', () => {
        const input = ["Peter Piper picked a peck of pickled peppers", 11]
        const expected = "Peter Piper..."
        const result = truncateString(input[0], input[1]);
        assert.strictEqual(result, expected)
    })
    it('Truncate a string if it is longer than the given maximum string length with ... 2', () => {
        const input = ["A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length]
        const expected = "A-tisket a-tasket A green and yellow basket"
        const result = truncateString(input[0], input[1]);
        assert.strictEqual(result, expected)
    })
    it('Truncate a string if it is longer than the given maximum string length with ... 3', () => {
        const input = ["A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2]
        const expected = "A-tisket a-tasket A green and yellow basket"
        const result = truncateString(input[0], input[1]);
        assert.strictEqual(result, expected)
    })
    it('Truncate a string if it is longer than the given maximum string length with ... 4', () => {
        const input = ["A-", 1]
        const expected = "A..."
        const result = truncateString(input[0], input[1]);
        assert.strictEqual(result, expected)
    })
    it('Truncate a string if it is longer than the given maximum string length with ... 5', () => {
        const input = ["Absolutely Longer", 2]
        const expected = "Ab..."
        const result = truncateString(input[0], input[1]);
        assert.strictEqual(result, expected)
    })
})
describe('findElement()', function () {
    it('returns the first element that passes a "truth test". If no element passes the test, return undefined 0', () => {
        const input = [[1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }]
        const expected = 8
        const result = findElement(input[0], input[1]);
        assert.strictEqual(result, expected)
    })
    it('returns the first element that passes a "truth test". If no element passes the test, return undefined 1', () => {
        const input = [[1, 3, 5, 9,], function(num) { return num % 2 === 0; }]
        const expected = undefined
        const result = findElement(input[0], input[1]);
        assert.strictEqual(result, expected)
    })
})
describe('booWho()', function () {
    it('Check if a value is classified as a boolean primitive. Return true or false 0', () => {
        const input = true
        const expected = true
        const result = booWho(input);
        assert.strictEqual(result, expected)
    })
    it('Check if a value is classified as a boolean primitive. Return true or false 1', () => {
        const input = "false"
        const expected = false
        const result = booWho(input);
        assert.strictEqual(result, expected)
    })
    it('Check if a value is classified as a boolean primitive. Return true or false 2', () => {
        const input = "true"
        const expected = false
        const result = booWho(input);
        assert.strictEqual(result, expected)
    })
    it('Check if a value is classified as a boolean primitive. Return true or false 3', () => {
        const input = 'a'
        const expected = false
        const result = booWho(input);
        assert.strictEqual(result, expected)
    })
    it('Check if a value is classified as a boolean primitive. Return true or false 4', () => {
        const input = NaN
        const expected = false
        const result = booWho(input);
        assert.strictEqual(result, expected)
    })
    it('Check if a value is classified as a boolean primitive. Return true or false 5', () => {
        const input = 1
        const expected = false
        const result = booWho(input);
        assert.strictEqual(result, expected)
    })
    it('Check if a value is classified as a boolean primitive. Return true or false 6', () => {
        const input = false
        const expected = true
        const result = booWho(input);
        assert.strictEqual(result, expected)
    })
    it('Check if a value is classified as a boolean primitive. Return true or false 7', () => {
        const input = [1, 2, 3]
        const expected = false
        const result = booWho(input);
        assert.strictEqual(result, expected)
    })
    it('Check if a value is classified as a boolean primitive. Return true or false 8', () => {
        const input = [].slice
        const expected = false
        const result = booWho(input);
        assert.strictEqual(result, expected)
    })
    it('Check if a value is classified as a boolean primitive. Return true or false 9', () => {
        const input = { "a": 1 }
        const expected = false
        const result = booWho(input);
        assert.strictEqual(result, expected)
    })
})
describe('titleCase()', function () {
    it('0 Return the first letter of each word capitalized. The rest is in lower case including words like the and of', () => {
        const input = "I'm a little tea pot"
        const expected = "I'm A Little Tea Pot"
        const result = titleCase(input);
        assert.strictEqual(result, expected)
    })
    it('1 Return the first letter of each word capitalized. The rest is in lower case including words like the and of', () => {
        const input = "sHoRt AnD sToUt"
        const expected = "Short And Stout"
        const result = titleCase(input);
        assert.strictEqual(result, expected)
    })
    it('2 Return the first letter of each word capitalized. The rest is in lower case including words like the and of', () => {
        const input = "HERE IS MY HANDLE HERE IS MY SPOUT"
        const expected = "Here Is My Handle Here Is My Spout"
        const result = titleCase(input);
        assert.strictEqual(result, expected)
    })
})
describe('frankenSplice()', function () {
    it('0 Copy each element of the first array into the second array, in order. Begin inserting elements at index n of the second array.', () => {
        const input = [[1, 2, 3], [4, 5], 1]
        const expected =[4, 1, 2, 3, 5]
        const result = frankenSplice(input[0], input[1], input[2]);
        assert.deepStrictEqual(result, expected)
    })
    it('1 Copy each element of the first array into the second array, in order. Begin inserting elements at index n of the second array.', () => {
        const input = [[1, 2], ["a", "b"], 1]
        const expected = ["a", 1, 2, "b"]
        const result = frankenSplice(input[0], input[1], input[2]);
        assert.deepStrictEqual(result, expected)
    })
    it('2 Copy each element of the first array into the second array, in order. Begin inserting elements at index n of the second array.', () => {
        const input = [["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2]
        const expected =["head", "shoulders", "claw", "tentacle", "knees", "toes"]
        const result = frankenSplice(input[0], input[1], input[2]);
        assert.deepStrictEqual(result, expected)
    })
    it("0 doesn't modify either input array", () => {
        const input = [[1, 2, 3], [4, 5], 1]
        const expected =[1,2,3]
        frankenSplice(input[0], input[1], input[2]);
        const result = input[0];
        assert.deepStrictEqual(input[0], expected)
    })
    it("1 doesn't modify either input array", () => {
        const input = [[1, 2, 3], [4, 5], 1]
        const expected =[4,5]
        frankenSplice(input[0], input[1], input[2]);
        const result = input[1];
        assert.deepStrictEqual(input[1], expected)
    })
})