define(["jquery", "underscore", "parse", "handlebars", "views/FeedListItemView", "text!templates/feeds-list.html"],
    function ($, _, Parse, Handlebars, FeedListItemView, template) {

    var FeedListView = Parse.View.extend({

        tagName: "ul",
        id: "feeds",

        template: Handlebars.compile(template),



        render: function (eventName) {
          $(this.el).empty();
          _.each(this.model.models, function (ad) {
            $(this.el).append(new FeedListItemView({
              model: ad
            }).render().el);
          }, this);
          return this;
        }
      });

    return FeedListView;

  });