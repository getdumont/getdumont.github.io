const Handlebars = require('handlebars');

const link = (uri, label) => {
    return `<li><a href="${uri}">${label}</a></li>`;
}

const list = (items) => items && items.map((item) => {
    switch(item.type) {
        case 'email':
            return link(`mailto:${item.uri}`, item.label);
        case 'tel':
            return link(`tel:${item.uri}`, item.label);
        default:
            return link(item.uri, item.label);
    };
}).join("\n");

module.exports = function (options) {
    const items = options.hash.links;

    return new Handlebars.SafeString(`
        <ul class="list">
           ${list(items)}
        <ul>
    `);
}