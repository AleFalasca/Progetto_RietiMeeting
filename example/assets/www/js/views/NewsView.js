define(["jquery", "underscore", "parse", "handlebars","zrss", "views/AdListItemView", "text!templates/news.html"],
    function ($, _, Parse, Handlebars, RSS, AdListItemView, template) {

        var NewsView = Parse.View.extend({

            tagName: "div",
            id: "newsContainer",

            template: Handlebars.compile(template),
            render: function (eventName) {
                $(this.el).html(this.template());
                $(this.el).rssfeed('http://www.rietimeeting.com/feed', {
                    linktarget: '_blank',
                    content: false,
                    media: true
                });
                return this;
            }
        });

        return NewsView;

    });