/**
 * Created with JetBrains WebStorm.
 * User: gabrycaos
 * Date: 02/09/13
 * Time: 12.14
 * To change this template use File | Settings | File Templates.
 */
define(["jquery", "underscore", "parse", "handlebars",  "views/CompListItemView", "text!templates/saturday.html"],
    function ($, _, Parse, Handlebars,  CompListItemView, template) {

        var CompListView = Parse.View.extend({

            tagName: "ul",
            id: "saturday",

            template: Handlebars.compile(template),


            render: function (eventName) {
                this.day = "Saturday";
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
