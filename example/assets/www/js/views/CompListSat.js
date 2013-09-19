/**
 * Created with JetBrains WebStorm.
 * User: Gabriele
 * Date: 22/07/13
 * Time: 11.03
 * To change this template use File | Settings | File Templates.
 */
define(["jquery", "underscore", "parse", "handlebars", "views/CompListItemView", "text!templates/saturday.html"],
    function ($, _, Parse, Handlebars, CompListItemView, template) {

        var CompListSat = Parse.View.extend({

            tagName: "ul",
            id: "saturday",

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

        return CompListSat;

    });
