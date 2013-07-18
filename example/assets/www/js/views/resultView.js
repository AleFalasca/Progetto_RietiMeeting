define(["jquery", "underscore", "parse", "handlebars", "text!templates/ad-details.html"],
    function ($, _, Parse, Handlebars, template) {

        var AdView = Parse.View.extend({
            tagName: "div",
            id: "resultContainer",
            events: {
                "touchend #back": "goBack",
                "touchend #photofinish_tap": "goPhotofinish"
            },

            goBack: function () {
                window.history.back();
            },

            template: Handlebars.compile(template),

            goPhotofinish: function () {
                Parse.history.navigate("photofinish", {trigger: true})
            },
            render: function (eventName) {
                $(this.el).html(this.template(this.model.toJSON()));
                $(function() {
                    $.get('http://www.rietimeeting.com/wp-content/uploads/results/re1010040.html', function(data) {
                        var elements = $(this.el).html(data)[0].getElementsById("#resulttablecontent");
                    });
                });
                return this;
            }
        });

        return AdView;

    });/**
 * Created with JetBrains WebStorm.
 * User: Gabriele
 * Date: 18/07/13
 * Time: 10.19
 * To change this template use File | Settings | File Templates.
 */
