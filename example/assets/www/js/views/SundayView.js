
define(["jquery", "underscore", "parse", "handlebars",  "views/CompListItemView", "text!templates/sunday.html"],
    function ($, _, Parse, Handlebars, CompListItemView, template) {

        var CompListView = Parse.View.extend({

            tagName: "ul",
            id: "sunday",

            template: Handlebars.compile(template),


            render: function (eventName) {
                this.day = "Sunday";
                $(this.el).html(this.template({"day": this.day}));
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
