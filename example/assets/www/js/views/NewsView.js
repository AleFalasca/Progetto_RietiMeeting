define(["jquery", "underscore", "parse", "handlebars", "views/AdListItemView", "text!templates/news.html"],
    function ($, _, Parse, Handlebars, AdListItemView, template) {

        var NewsView = Parse.View.extend({
            template: Handlebars.compile(template),
            render: function (eventName) {
                $(this.el).html(this.template());
                var RSS = "http://www.rietimeeting.com/feed/";
//Stores entries
                var entries = [];
                var selectedEntry = "";

//listen for detail links
                $(".contentLink").live("click", function() {
                    selectedEntry = $(this).data("entryid");
                });

//Listen for main page
                $("#mainPage").live("pageinit", function() {
                    //Set the title
                    $.get(RSS, {}, function(res, code) {
                        entries = [];
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

                        //now draw the list
                        var s = '';
                        $.each(entries, function(i, v) {
                            s += '<li><a href="#contentPage" class="contentLink" data-entryid="'+i+'">' + v.title + '</a></li>';
                        });
                        $("#linksList").html(s);
                        $("#linksList").listview("refresh");
                    });

                });

//Listen for the content page to load
                $("#contentPage").live("pageshow", function(prepage) {
                    //Set the title
                    $("h1", this).text(entries[selectedEntry].title);
                    var contentHTML = "";
                    contentHTML += entries[selectedEntry].description;
                    contentHTML += '<p/><a href="'+entries[selectedEntry].link + '">Read Entry on Site</a>';
                    $("#entryText",this).html(contentHTML);
                });


                return this;
            }
        });

        return NewsView;

    });