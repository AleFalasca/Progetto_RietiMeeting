define(["jquery", "underscore", "parse", "handlebars", "text!templates/comp-list-item.html"],
    function ($, _, Parse, Handlebars, template) {

        var CompListItemView = Parse.View.extend({

            tagName: "li",

            events: {
                "touchend": "goToDetails"
            },

            template: Handlebars.compile(template),

            initialize: function () {
                this.model.bind("change", this.render, this);
                this.model.bind("destroy", this.close, this);
            },

            render: function (eventName) {
                var Comp = this.model.toJSON();
                Comp.cid = this.model.cid;
                $(this.el).html(this.template(Comp));
                return this;
            },

            goToDetails: function () {
                Parse.history.navigate("Comps/" + this.model.cid, {trigger: true});
            }
        });

        return CompListItemView;

    });