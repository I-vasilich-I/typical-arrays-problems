
exports.min = function min (array) {
    if (!Array.isArray(array) || array.length<=0 || array===undefined) return 0;
    return array.sort((a,b) => a - b)[0];
}

exports.max = function max (array) {
    if (!Array.isArray(array) || array.length<=0 || array===undefined) return 0;
    return array.sort((a,b) => a - b)[array.length-1];
}

exports.avg = function avg (array) {
    if (!Array.isArray(array) || array.length<=0 || array===undefined) return 0;
    return array.reduce((a,b) => a+b)/array.length;
}
