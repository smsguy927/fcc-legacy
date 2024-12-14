const convertCtoF = c => 9/5 * c + 32
const reverseString = str => str.split('').reverse().join('')
const factorialize = num => {
    if(num < 0){
        throw new RangeError('Cannot calculate factorial of a negative number')
    }
    if(num % 1 !== 0){
        throw new RangeError('Not Implemented')
    }
    if(num === 0 || num === 1){
        return 1

    }
    let total = 1
    for(let i = 2; i < num + 1; i++){
        total *= i
    }
    return total
}
const findLongestWordLength = str => Math.max(...str.split(' ').map(word => word.length))
export const largestOfFour = arr => arr.map(e => Math.max(...e))

export { convertCtoF, reverseString, factorialize, findLongestWordLength }