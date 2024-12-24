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
        if (arr2It < arr2.length && (arr2It < n || (arr2It >= n && arr1It >= arr1.length))) {
            result.push(arr2[arr2It])
            arr2It++
        } else {
            result.push(arr1[arr1It])
            arr1It++
        }
    }
    return result
}

const bouncer = arr => arr.filter(x => x)

const getIndexToIns = (arr, num) => {
    arr.sort((a, b) => a - b)
    if(num <= arr[0]){
        return 0
    }
    let i = 0
    while (i < arr.length) {
        i++
        if(num > arr[i - 1] && num <= arr[i]) {
            break
        }

    }
    return i
}
const mutation = arr => {
    const toLowerAsciiSet = str => {
        const set = new Set()
        const caseOffset = 32
        const capA = 65
        const capZ = 90
        const lowA = 97
        const lowZ = 122
        for (let i = 0; i < str.length; i++) {
            let code = str.charCodeAt(i)
            if (code >= capA && code <= capZ) {
                code += caseOffset
            }
            if (code >= lowA && code <= lowZ) {
                set.add(code)
            }
        }
        return set
    }
    const lowerSetA = toLowerAsciiSet(arr[0])
    const lowerSetB = toLowerAsciiSet(arr[1])
    const difference = new Set()
    lowerSetB.forEach(e => {
        if (!lowerSetA.has(e)) {
            difference.add(e)
        }
    });
    return difference.size === 0
}
const chunkArrayInGroups = (arr, size) => {
    const result = []
    let start = 0
    let end = 0
    while (end < arr.length) {
        end = size + start
        result.push(arr.slice(start, end ))
        start = end
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
    frankenSplice,
    bouncer,
    getIndexToIns,
    mutation,
    chunkArrayInGroups
}