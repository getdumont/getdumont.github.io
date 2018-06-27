const fs = require('fs');
const gulp = require('gulp');
const replace = require('gulp-replace');
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
        helpers: require('./src/templates/helpers'),
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
    },
    move: [{
        input: './src/static/*',
        output: './dist'
    }]
});

gulp.task('keys', function () {
    const emailTemplate =
        fs.readFileSync('./email.html', 'utf8')
            .replace(/"/g, '\\"')
            .replace(/\n|\t/g, '')
            .replace(/ *\</g, '<');

    gulp.src('dist/assets/scripts/index.js')
        .pipe(replace('{{MG_API_KEY}}', process.env.MG_API_KEY))
        .pipe(replace('{{MG_DOMAIN}}', process.env.MG_DOMAIN))
        .pipe(replace('{{EMAIL_TEMPLATE}}', emailTemplate))
        .pipe(gulp.dest('dist/assets/scripts'));
});