const convertCtoF = c => 9 / 5 * c + 32
const reverseString = str => str.split('').reverse().join('')
const factorialize = num => {
    if (num < 0) {
        throw new RangeError('Cannot calculate factorial of a negative number')
    }
    if (num % 1 !== 0) {
        throw new RangeError('Not Implemented')
    }
    if (num === 0 || num === 1) {
        return 1

    }
    let total = 1
    for (let i = 2; i < num + 1; i++) {
        total *= i
    }
    return total
}
const findLongestWordLength = str => Math.max(...str.split(' ').map(word => word.length))
const largestOfFour = arr => arr.map(e => Math.max(...e))
const confirmEnding = (str, target) => {
    let strIt = str.length - 1
    let tarIt = target.length - 1
    while (tarIt >= 0) {
        if (str[strIt] !== target[tarIt]) {
            return false
        }
        strIt--
        tarIt--
    }
    return true
}
const repeatStringNumTimes = (str, num) => {
    const arr = []
    for (let i = 0; i < num; i++) {
        arr.push(str)
    }
    return arr.join('')
}

const truncateString = (str, num) => num >= str.length ? str : `${str.slice(0, num)}...`

const findElement = (arr, func) => arr.find(func)

const booWho = bool => typeof bool === 'boolean'

const titleCase = str => {
    return str.toLowerCase().split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(' ')
}

const frankenSplice = (arr1, arr2, n) => {
    const result = []
    let arr1It = 0
    let arr2It = 0
    while (result.length < arr1.length + arr2.length) {
        if(arr2It < arr2.length && (arr2It < n || (arr2It >= n && arr1It >= arr1.length))) {
            result.push(arr2[arr2It])
            arr2It++
        }else {
            result.push(arr1[arr1It])
            arr1It++
        }
    }
    return result
}

export {
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
}