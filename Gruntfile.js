/**
 * Created by jgpro_000 on 06/09/14.
 */
module.exports = function(grunt) {
    // Do grunt-related things in here
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.initConfig({
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                background: true
            }
        },
        watch: {
            //run unit tests with karma (server needs to be already running)
            karma: {
                files: ['app/js/**/*.js', 'js/tests/*spec.js'],
                tasks: ['karma:unit:run'] //NOTE the :run flag
            }
        }
    });
};