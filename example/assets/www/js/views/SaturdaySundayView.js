/**
 * Created with JetBrains WebStorm.
 * User: gabrycaos
 * Date: 02/09/13
 * Time: 12.14
 * To change this template use File | Settings | File Templates.
 */
define(["jquery", "underscore", "parse", "handlebars", "views/CompListSat", "views/CompListSun", "text!templates/comp-list.html"],
    function ($, _, Parse, Handlebars, CompListSat, CompListSun, template) {

        var CompListView = Parse.View.extend({

            tagName: "ul",
            id: "listContainerByDay",

            template: Handlebars.compile(template),

            initialize: function () {
                this.model.bind("reset", this.render, this);
            },

            render: function (eventName) {
                var sat = this.model.byDay("Saturday");
                console.log(sat);
                var sun = this.model.byDay("Sunday");
                console.log(sun);
                $(this.el).empty();
                $(this.el).append('<h2 class="day">Saturday</h2>');
                console.log("saturday");
                $(this.el).append(new CompListSat({
                    model: sat
                }).render().el);
                $(this.el).append('<h2 class="day">Sunday</h2>');
                $(this.el).append(new CompListSun({
                    model: sun
                }).render().el);
                return this;
            }
        });

        return CompListView;

    });
