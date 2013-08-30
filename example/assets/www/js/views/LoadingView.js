/**
 * Created with JetBrains WebStorm.
 * User: gabrycaos
 * Date: 29/08/13
 * Time: 1.42
 * To change this template use File | Settings | File Templates.
 */
define(["jquery", "underscore", "parse", "handlebars", "text!templates/load.html"],
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
