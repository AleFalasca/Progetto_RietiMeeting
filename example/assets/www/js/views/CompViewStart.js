define(["jquery", "underscore", "parse", "handlebars", "text!templates/comp-details-start.html"],
    function ($, _, Parse, Handlebars, template) {

        var CompView = Parse.View.extend({

            tagName: "div",
            id: "startListResults",


            template: Handlebars.compile(template),

            render: function (eventName) {
                $(this.el).html(this.template(this.model.toJSON()));
                var tab = this.model.get("startList");
                $(this.el).append($(tab));
                return this;
            },
            startingList: function(){
                Parse.history.navigate("Comps/" + this.model.cid, {trigger: true});
            }
        });
        return CompView;
    });