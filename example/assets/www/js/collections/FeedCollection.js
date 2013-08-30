define(["jquery", "underscore", "parse", "models/Feed"],
    function ($, _, Parse, Feed) {

    var AdCollection = Parse.Collection.extend({
        model: Feed
      });

    return AdCollection;

  });