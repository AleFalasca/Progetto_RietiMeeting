/**
 * Created with JetBrains WebStorm.
 * User: Gabriele
 * Date: 11/07/13
 * Time: 10.11
 * To change this template use File | Settings | File Templates.
 */
define(["jquery", "underscore", "parse", "handlebars", "text!templates/credits.html"],
    function ($, _, Parse, Handlebars, template) {
        var CreditsView = Parse.View.extend({
            template: Handlebars.compile(template),
            render: function (eventName) {
                $(this.el).html(this.template());
                return this;
            }
        });
        return CreditsView;
    });