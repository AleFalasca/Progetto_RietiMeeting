require.config({
  paths: {
    jquery: '../lib/jquery/zepto',
    underscore: '../lib/underscore/underscore-min',
    parse: "../lib/parse/parse-1.2.7.min",
    text: '../lib/require/text-1.0.6',
    async: '../lib/require/async',
    handlebars: '../lib/handlebars/handlebars',
    templates: '../templates',
    zrss: '../lib/rss/jquery.zrssfeed.min'
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
    },
      'zrss': {
      deps: ['jquery'],
      exports: 'RSS'
    }

  }
});

// We launch the App
require(['underscore', 'parse', 'router'],
    function (_, Parse, AppRouter) {
      document.addEventListener("deviceready", run, false);
      function run() {
        Parse.initialize("vxTSSGCTPUPw8eQTqy0vPx1vdv3vyDN2ptt1mJG7", "CcugwsFwl4jb36uAiL0Ni1vKSf8SjR3h5JhnJnv4");
        new AppRouter();
        Parse.history.start();
      }
  });
