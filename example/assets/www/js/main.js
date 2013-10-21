require.config({
  paths: {
    jquery: '../lib/jquery/zepto',
    jquerymobile: '../lib/jquery/jquery.mobile-1.3.2.min',
    underscore: '../lib/underscore/underscore-min',
    parse: "../lib/parse/parse-1.2.9.min",
    text: '../lib/require/text-1.0.6',
    async: '../lib/require/async',
    handlebars: '../lib/handlebars/handlebars',
    templates: '../templates'
  },
  shim: {
    'jquery': {
      exports: '$'
    },
    'underscore': {
      exports: '_'
    },
    'handlebars': {
      exports: 'Handlebars'
    },

    'parse': {
      deps: ['jquery', 'underscore'],
      exports: 'Parse'
    }
  }
});

// We launch the App
require(['underscore', 'parse', 'router'],
    function (_, Parse, AppRouter) {
      document.addEventListener("deviceready", run, false);
      function run() {
 Parse.initialize("3eaHAZbhkw7WTo4wFShOyTamKSg43Be3BjqYrPoH", "26miMUe15fZ4mO17mXM0oJFPb1Bkj2SAxJNdefJo");
          new AppRouter();
        Parse.history.start();
      }
  });
