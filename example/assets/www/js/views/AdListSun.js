/**
 * Created with JetBrains WebStorm.
 * User: Gabriele
 * Date: 22/07/13
 * Time: 11.03
 * To change this template use File | Settings | File Templates.
 */
define(["jquery", "underscore", "parse", "handlebars", "views/AdListItemView", "text!templates/ad-list.html"],
    function ($, _, Parse, Handlebars, AdListItemView, template) {

        var AdListSun = Parse.View.extend({
            tagName: "ul",
            id: "listSun",
            template: Handlebars.compile(template),
          initialize: function () {
                this.model.bind("reset", this.render, this);
            },
            render: function (eventName) {
                $(this.el).empty();
                _.each(this.model.models, function (ad) {
                    $(this.el).append(new AdListItemView({
                        model: ad
                    }).render().el);
                }, this);
                return this;
            }
        });
        return AdListSun;
    });

