exports.min = function min(array) {
    if (!Array.isArray(array) || !array.length) {
        return 0;
    };
    
    let s = array[0];

    for (i = 0; i < array.length; i++) {
        if (s > array[i]) {
            s = array[i];
        }
    }

    return s;
}

exports.max = function max(array) {
    if (!Array.isArray(array) || !array.length) {
        return 0;
    };

    let k = array[0];

    for (i = 0; i < array.length; i++) {
        if (k < array[i]) {
            k = array[i];
        }
    }

    return k;
}

exports.avg = function avg(array) {
    if (!Array.isArray(array) || !array.length) {
        return 0;
    };

    let total = 0;

    for (i = 0; i < array.length; i++) {
        total += array[i];
    }

    return total / array.length;
}
