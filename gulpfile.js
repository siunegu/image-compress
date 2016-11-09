var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    imageminJpegRecompress = require('imagemin-jpeg-recompress'),
    rimraf = require('gulp-rimraf');

gulp.task('rimraf', function() {
    gulp.src('compressed/', { read: false })
    .pipe(rimraf({force:true}));
});

gulp.task('images', () =>
    gulp.src('images/**/*.{jpg,png,gif,svg}')
    .pipe(imagemin([
        imagemin.gifsicle(),
        imageminJpegRecompress({
            loops: 4,
            min: 50,
            max: 95,
            quality: 'high'
        }),
        imagemin.optipng(),
        imagemin.svgo()
    ]))

    .pipe(gulp.dest('compressed/'))
);

gulp.task('default', ['rimraf', 'images']);
