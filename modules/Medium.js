const sumAll = arr => {
    if(arr[0] > arr[1]){
        [arr[0], arr[1]] = [arr[1], arr[0]]
    }
    return(arr[0] + arr[1]) / 2 * (arr[1] - arr[0] + 1)
}

export {
    sumAll
}