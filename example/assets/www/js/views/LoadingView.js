
define(["jquery", "underscore", "parse", "handlebars", "text!templates/loading.html"],
    function ($, _, Parse, Handlebars, template) {
        var LoadingView = Parse.View.extend({
            template: Handlebars.compile(template),
            render: function (eventName) {
                $(this.el).html(this.template());
                return this;
            }
        });
        return LoadingView;
    });