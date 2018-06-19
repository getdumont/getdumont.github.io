const Handlebars = require('handlebars');

module.exports = function (options) {
    return new Handlebars.SafeString(`
        <div class="how-animation">
            <div class="animation">
                ${options.fn(this)}
            </div>
            <div class="text">
                ${options.hash.text}
            </div>
        </div>
    `);
}