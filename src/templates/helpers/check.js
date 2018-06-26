const Handlebars = require('handlebars');

const list = () => {
    let l = '';

    for(var i = 0; i < 4; i++) {
        l += '<div';

        if (i == 0) {
            l += ' class="active-1"';
        }

        if (i == 2) {
            l += ' class="active-2"';
        }

        l += '></div>\n';
    }

    return l;
}

module.exports = function (options) {
    return new Handlebars.SafeString(`
        <div class="check">
            ${list()}
        </div>
    `);
}