define(["jquery", "underscore", "parse", "handlebars", "text!templates/ath-details.html"],
    function ($, _, Parse, Handlebars, template) {

        var AdView = Parse.View.extend({


            tagName: "div",
            id: "athContent",

            events: {
                "touchend #back": "goBack"
            },

            template: Handlebars.compile(template),

            goBack: function () {
                window.history.back();
            },

            render: function (eventName) {
                $(this.el).html(this.template(this.model.toJSON()));
                var desc = this.model.get("desc");
                var htmlObject = document.createElement('p');
                htmlObject.innerHTML = desc;
                console.log(htmlObject.innerHTML);
               /* $(htmlObject.innerHTML).appendTo(this.el);  */
                $(this.el).append('<div id="social">       <a href="#"><img id="facebook" src="res/generic_img/facebook.png" /></a>    <a href="https://twitter.com/intent/tweet"><img  id="twitter" src="res/generic_img/twitter.png" /></a></div>            ');
                $(this.el).append('<button id="back">back</button>');
                return this;
            }
        });

        return AdView;

    });