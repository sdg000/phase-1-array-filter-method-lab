function findMatching(drivers, value) {
    return drivers.filter(possibleMatch => possibleMatch.toLowerCase() === value.toLowerCase())
}

function fuzzyMatch(drivers, value) {
    return drivers.filter(beginLetters => beginLetters.startsWith(value))
}

function matchName(drivers, value) {
    return drivers.filter(stringValue => stringValue.name === value)
}