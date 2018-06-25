const Handlebars = require('handlebars');

const list = (selected) => {
    let l = '';

    for(var i = 0; i < 4; i++) {
        l += '<div';

        if (selected == i) {
            l += ' class="active"'
        };

        l += '></div>\n';
    }

    return l;
}

module.exports = function (options) {
    return new Handlebars.SafeString(`
        <div class="check">
            ${list(options.hash.selected)}
        </div>
    `);
}