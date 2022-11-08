var gulp = require('gulp');
var ncp = require('child_process');

gulp.task('name', function() {
    var options = {
        stdio: 'inherit'
    };

    var output;
    console.log("oi2");
    try {
        output = ncp.execSync('npm test unit-tests/*.js', options);
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
})
