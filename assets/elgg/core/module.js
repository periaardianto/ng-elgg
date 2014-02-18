define(function(require) {
    var createModule = require('ngRequire/createModule');
    var angular = require('angular');

    require('angular-sanitize');
    require('angular-snap');
    require('angular-translate');

    return createModule('elgg/core', [
        angular.module('pascalprecht.translate'),
        angular.module('snap'),
        angular.module('ngSanitize'),
    ], {
        "directives": [
            "elggButton",
            "elggGallery",
            "elggHeading",
            "elggIcon",
            "elggFormField",
            "elggLayout",
            "elggMenu",
            "elggPage"
        ],
        "factories": [],
        "filters": [],
        "states": {
            "default": require('./states/default/main'),
            "index": require('./states/index/main'),
        }
    });
});