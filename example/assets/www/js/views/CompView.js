
define(["jquery", "underscore", "parse", "handlebars", "text!templates/comp-details.html"],
    function ($, _, Parse, Handlebars, template) {

        var AdView = Parse.View.extend({

            tagName: "div",
            id: "startListResults",

            events: {
                "touchend #StartingListButton": "startingList"
            },


            template: Handlebars.compile(template),

            startingList: function(){
                Parse.history.navigate("start/" + this.model.cid, {trigger: true});
            },

            render: function (eventName) {
                console.log(this.model.cid);
                $(this.el).html(this.template(this.model.toJSON()));
                var tab = this.model.get("table");
                $(this.el).append($(tab));
                return this;
            }
        });
        return AdView;
    });