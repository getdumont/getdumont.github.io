const Handlebars = require('handlebars');

module.exports = function (options) {
    return new Handlebars.SafeString(`
        <div class="frame">
            <div class="buttons">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="window">
                ${options.fn(this)}
            </div>
        </div>
    `);
}