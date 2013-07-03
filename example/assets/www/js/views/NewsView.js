define(["jquery", "underscore", "parse", "handlebars",  "text!templates/news.html"],
    function ($, _, Parse, Handlebars, template) {

        var NewsView = Parse.View.extend({

            tagName: "div",
            id: "newsView",

            template: Handlebars.compile(template)
        });

        return NewsView;
    });