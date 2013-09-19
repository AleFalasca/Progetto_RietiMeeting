define(["jquery", "underscore", "parse", "handlebars", "views/CompListItemView", "text!templates/cat-list.html"],
    function ($, _, Parse, Handlebars, CompListItemView, template) {

    var CompListView = Parse.View.extend({

        tagName: "ul",
        id: "list",

        template: Handlebars.compile(template),

        initialize: function () {
          this.model.bind("reset", this.render, this);
        },

        render: function (eventName) {
          $(this.el).empty();
          _.each(this.model.models, function (Comp) {
            $(this.el).append(new CompListItemView({
              model: Comp
            }).render().el);
          }, this);
          return this;
        }
      });

    return CompListView;

  });