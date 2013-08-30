define(["jquery", "underscore", "parse", "handlebars", "text!templates/feed-details.html"],
    function ($, _, Parse, Handlebars, template) {

    var AdView = Parse.View.extend({


        tagName: "div",
        id: "feedContent",

        events: {
            "touchend #back": "goBack"
        },

        template: Handlebars.compile(template),

        goBack: function () {
            window.history.back();
        },

        render: function (eventName) {
            $(this.el).html(this.template(this.model.toJSON()));
            var desc = this.model.get("desc");
            var htmlObject = document.createElement('p');
            htmlObject.innerHTML = desc;
            console.log(htmlObject.innerHTML);
            $(htmlObject.innerHTML).appendTo(this.el);
            return this;
        }
      });

    return AdView;

  });