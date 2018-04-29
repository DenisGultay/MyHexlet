const sequenceSum = (begin, end) => {
    if (begin === end) {
        return begin;
    }
    else if (begin > end) {
        return NaN;
    }
    return begin + sequenceSum(begin+1, end);
}


console.log(sequenceSum(-3, 2));