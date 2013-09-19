define(["jquery", "underscore", "parse", "handlebars", "text!templates/comp-details-start.html"],
    function ($, _, Parse, Handlebars, template) {

        var CompView = Parse.View.extend({

            tagName: "div",
            id: "startListResults",


            template: Handlebars.compile(template),
            startingList: function (){
                Parse.history.navigate("startingList", {trigger: true});
            },
            render: function (eventName) {
                $(this.el).html(this.template(this.model.toJSON()));
                var tab = this.model.get("startList");
                var htmlObject = document.createElement('div');
                htmlObject.innerHTML = tab;
                console.log(htmlObject.innerHTML);
                $(htmlObject.innerHTML).appendTo(this.el);
                return this;
            }
        });
        return CompView;
    });