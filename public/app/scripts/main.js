require.config({
    paths: {
        'jquery'    : 'vendor/jquery/jquery',
        'underscore': 'vendor/underscore-amd/underscore',
        'backbone'  : 'vendor/backbone-amd/backbone',
        'text'      : 'vendor/text/text',
        'Leaflet'   : 'vendor/leaflet/dist/leaflet'
    },
    shim: {
        'Leaflet': {
            exports: 'L'
        }
    }
});

require(['backbone','views/app'], function (Backbone, AppView) {
    'use strict';
    new AppView();
    Backbone.history.start({pushState: true});
});