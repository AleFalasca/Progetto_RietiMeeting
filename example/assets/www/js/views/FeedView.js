define(["jquery", "underscore", "parse", "share", "handlebars", "text!templates/feed-details.html"],
    function ($, _, Parse, Share, Handlebars, template) {

    var AdView = Parse.View.extend({


        tagName: "div",
        id: "feedContent",

        events: {
            "touchend #back": "goBack",
            "touchend #facebook": "facebook",
            "touchend #twitter": "twitter"
        },

        template: Handlebars.compile(template),

        goBack: function () {
            window.history.back();
        },
        facebook: function (){
            var share = new Share;
            share.show({
                    subject: 'posted from RietiMeeting Android app',
                    text: this.model.get("link")
                },
                function() {}, // Success function
                function() {alert('Share failed')} // Failure function
            );
        },

        twitter: function(){
            var url = "https://twitter.com/share?source=tweetbutton&url=myurl"+this.model.get("link");
            console.log(url);
            window.open(url, '_blank');
            return true;
        },


        render: function (eventName) {
            $(this.el).html(this.template(this.model.toJSON()));
            var desc = this.model.get("description");
            var htmlObject = document.createElement('p');
            htmlObject.innerHTML = desc;
            $(htmlObject.innerHTML).appendTo(this.el);
            return this;
        }
      });

    return AdView;

  });