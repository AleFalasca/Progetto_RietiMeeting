define(["jquery", "underscore", "parse", "handlebars", "text!templates/photofinish.html"],
    function ($, _, Parse, Handlebars, template) {

        var PhotofinishView = Parse.View.extend({

            events: {
                "touchend #back": "goBack"
            },

            goBack: function () {
                window.history.back();
            },

            template: Handlebars.compile(template),
            render: function (eventName) {
                $(this.el).html(this.template());
                return this;
            }
        });

        return PhotofinishView;

    });
