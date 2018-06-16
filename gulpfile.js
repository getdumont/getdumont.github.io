const gulpStatic = require('gulp-static-gen');
const data = require('./src/languages');

const DEFAULT_LANG = 'pt-br';

const templateInfo = lang => ({
    data: data[lang],
    input: './src/templates/index.hbs',
    output: {
        dir: './dist',
        name: `index${DEFAULT_LANG === lang ? "" : "-" + lang}.html`,
    }
});

gulpStatic({
    css: {
        input: './src/sass/index.sass',
        output: './dist/assets/css',
        watch: './src/sass/**/*',
    },
    hbs: {
        batch : ['./src/templates/partials'],
        watch : './src/templates/**/*',
        multiple: Object.keys(data).map(templateInfo)
    },
    img: {
        input: './src/images/**/*',
        output: './dist/assets/images',
        config: {
            interlaced: true,
            progressive: true,
            optimizationLevel: 5,
            svgoPlugins: [{removeViewBox: true}]
        }
    },
    scripts: {
        input: './src/scripts/index.js',
        output: './dist/assets/scripts/',
        watch: './src/scripts/**/*',
    }
});