define(["jquery", "underscore", "parse", "handlebars", "text!templates/ath-details.html"],
    function ($, _, Parse, Handlebars, template) {

        var AdView = Parse.View.extend({


            tagName: "div",
            id: "athContent",



            template: Handlebars.compile(template),



            render: function (eventName) {
                $(this.el).html(this.template(this.model.toJSON()));
                return this;
            }
        });

        return AdView;

    });