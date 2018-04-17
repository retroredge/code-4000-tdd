const convert = (n) => {

    if (n === 0) {
        return '';
    } else if (n >= 10) {
        return 'X' + convert(n - 10)
    } else if (n >= 9) {
        return 'IX' + convert(n - 9)
    } else if (n >= 5) {
        return 'V' + convert(n - 5)
    } else if (n >= 4) {
        return 'IV' + convert(n - 4)
    }

    return 'I' + convert(n - 1);
};

exports.convert = convert;