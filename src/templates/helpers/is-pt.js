const Handlebars = require('handlebars');

const translates = {
    en: {
        p: "This is a Brazilian research, we didn't release version in other languages yet! But will be a pleasure talking about it with people that have any kind of interest, mail us!",
        span: 'contact@getdumont.com'
    },
    es: {
        p: 'Este es un estudio brasileño, ¡aún no lanzamos la versión en otros idiomas! Pero será un placer hablar de ello con personas que tengan algún tipo de interés, envíenos un correo electrónico.',
        span: 'fale@getdumont.com'
    }
}

module.exports = function (options) {
    const lang = options.hash.lang;

    if (lang == 'pt-br') {
        return options.fn(this);
    }

    return new Handlebars.SafeString(`
        <div class="thanks">
            <p>${translates[lang].p}</p>
            <span>${translates[lang].span}</span>
        </div>
    `);
}