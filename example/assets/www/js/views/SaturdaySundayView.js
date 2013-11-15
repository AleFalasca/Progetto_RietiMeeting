/**
 * Created with JetBrains WebStorm.
 * User: gabrycaos
 * Date: 02/09/13
 * Time: 12.14
 * To change this template use File | Settings | File Templates.
 */
define(["jquery", "underscore", "parse", "handlebars", "views/SaturdayView", "views/SundayView", "text!templates/comp-list.html"],
    function ($, _, Parse, Handlebars, SaturdayView, SundayView , template) {

        var CompListView = Parse.View.extend({

            tagName: "div",
            id: "listContainerByDay",

            template: Handlebars.compile(template),

            render: function (eventName) {
                $(this.el).empty();
                var sat = this.model.byDay("Saturday");
                var sun = this.model.byDay("Sunday");
                $(this.el).append(new SaturdayView({
                    model: sat
                }).render().el);
                $(this.el).append(new SundayView({
                    model: sun
                }).render().el)
                return this;
            },

            initialize: function () {
                this.model.bind("reset", this.render, this);
            }
        });

        return CompListView;

    });
