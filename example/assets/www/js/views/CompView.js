
define(["jquery", "underscore", "parse", "handlebars", "text!templates/comp-details.html"],
    function ($, _, Parse, Handlebars, template) {

        var AdView = Parse.View.extend({

            tagName: "div",
            id: "startListResults",
            events: {
                "touchend #StartingListButton": "render2"
            },
            template: Handlebars.compile(template),



            render: function (eventName) {
                $(this.el).html(this.template(this.model.toJSON()));
                var tab = this.model.get("table");
                $(this.el).append($(tab));
                return this;
            },
            render2: function () {
                $(this.el).html(this.template(this.model.toJSON()));
                var tab = this.model.get("startList");
                $(this.el).append($(tab));
                return this;
            }

        });
        return AdView;
    });