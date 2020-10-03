
exports.min = function min(array) {
    if (Array.isArray(array)) {
        let newArray = array.sort((a, b) => {
            if (a < b) {
                return -1
            }
            else { return 1 }
        })
        if (array.length > 0) return newArray[0]
    }
    return 0
}

exports.max = function max(array) {
    if (Array.isArray(array)) {
        let newArray = array.sort((a, b) => {
            if (a < b) {
                return -1
            }
            else { return 1 }
        })
        if (array.length > 0) return array[array.length - 1]
    }
    return 0
}

exports.avg = function avg(array) {
    if (Array.isArray(array) && array.length > 0) {
        let newArray = array.reduce((sum, current) => {
            return sum + current
        })
        return newArray / array.length
    }
    return 0
}
