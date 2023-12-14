const sumAll = function(start, end) {
    if (start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    }

    if (end < start) {
        let temp = start;
        start = end;
        end = temp;
    }
    let sum = 0;
    for (let i = start; i <= end; i++) {
    sum += i;

}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
