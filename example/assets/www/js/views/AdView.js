define(["jquery", "underscore", "parse", "handlebars", "text!templates/ad-details.html"],
    function ($, _, Parse, Handlebars, template) {

    var AdView = Parse.View.extend({

        events: {
          "touchend #back": "goBack",
          "touchend #photofinish_tap": "goPhotofinish"
        },

        goBack: function () {
          window.history.back();
        },

        template: Handlebars.compile(template),

        goPhotofinish: function () {
            Parse.history.navigate("photofinish", {trigger: true})
        },
        render: function (eventName) {
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        }
      });

    return AdView;

  });