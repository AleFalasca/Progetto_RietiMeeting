define(["jquery", "underscore", "parse", "handlebars",  "text!templates/news.html"],
    function ($, _, Parse, Handlebars, template) {

        var NewsView = Parse.View.extend({

            tagName: "ul",
            id: "list",

            template: Handlebars.compile(template)
        });

        return NewsView;
    });