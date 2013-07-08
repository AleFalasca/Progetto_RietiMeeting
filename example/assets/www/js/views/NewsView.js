define(["jquery", "underscore", "parse", "handlebars",  "text!templates/news.html"],
    function ($, _, Parse, Handlebars, template) {

        var NewsView = Parse.View.extend({

            tagName: "div",
            id: "newsView",
            events: {
                "touchend .contentLink": "feedDetails",
            },

            template: Handlebars.compile(template),
            initialize: function() {
                this.model.on("reset", this.render, this);
                this.on("inTheDom", this.addMap);
            },

            render: function(eventName) {
                var s = '';
                $.each(entries, function(i, v) {
                    s += '<li><a href="#contentPage" class="contentLink" data-entryid="'+i+'">' + v.title + '</a></li>';
                });
                $("#linksList").html(s);
                $("#linksList").listview("refresh");
            },
            getFeeds: function (){
                var RSS = "http://www.rietimeeting.com/feed"
                $.get(RSS, {}, function(res, code) {
                    var xml = $(res);
                    var items = xml.find("item");
                    $.each(items, function(i, v) {
                        entry = {
                            title:$(v).find("title").text(),
                            link:$(v).find("link").text(),
                            description:$.trim($(v).find("description").text())
                        };
                        entries.push(entry);
                    });
                 });

            },
            feedDetails: function () {
                Parse.history.navigate("feedDetail", {trigger:true})
            }
        });


        return NewsView;
    });