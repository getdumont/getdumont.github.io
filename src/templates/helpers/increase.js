module.exports = function (options) {
    const val = parseInt(options.fn(this));
    return val + options.hash.n;
}