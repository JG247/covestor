/**
 * Created by jgpro_000 on 06/09/14.
 */
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app : 'app',
        domReady: '../bower_components/domReady/domReady'
    },
    shim: {
        'app' : {
            deps : ['domReady']
        }
    }
});

define([
    'app',
    'domReady'
], function( MyApp, domReady){
    requirejs([domReady], function(){
       return MyApp;
    });
});