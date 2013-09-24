define(["jquery", "underscore", "parse", "handlebars", "views/AthListItemView", "text!templates/ath-list.html"],
    function ($, _, Parse, Handlebars, AthListItemView, template) {

        var AthListView = Parse.View.extend({

            tagName: "ul",
            id: "athletes",

            template: Handlebars.compile(template),



            render: function (eventName) {
                $(this.el).empty();
                _.each(this.model.models, function (ad) {
                    $(this.el).append(new AthListItemView({
                        model: ad
                    }).render().el);
                }, this);
                return this;
            }
        });

        return AthListView;

    });