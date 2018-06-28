module.exports = function (options) {
    const { v1, v2 } = options.hash;

    if (v1 == v2) {
        return options.fn(this);
    }

    return '';
}