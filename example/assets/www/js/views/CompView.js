
define(["jquery", "underscore", "parse", "handlebars", "text!templates/comp-details.html"],
    function ($, _, Parse, Handlebars, template) {

        var AdView = Parse.View.extend({

            tagName: "div",
            id: "startListResults",
            events: {
                "touchend #facebook": "facebook",
                "touchend #twitter": "twitter",
                "touchend #StartingListButton": "renderStart",
                "touchend #Results": "render"
            },
            template: Handlebars.compile(template),

            facebook: function(){
                window.open(
                    'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href),
                    'facebook-share-dialog',
                    'width=626,height=436');
                return false;
            },
            twitter: function(){
                !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
            },

            render: function (eventName) {
                $(this.el).html(this.template(this.model.toJSON()));
                var str = '<div id="adText"> <h4 id="startRes">Results</h4><p>start time h: '+this.model.get('hour')+'</p><div id="startListResults"></div></div>';
                $(this.el).append(str);
                var tab = this.model.get("table");

                console.log(tab);


                var tabForm = $(tab);

                $(this.el).append(tabForm);
                if (this.model.get("startList") != undefined){
                    $(this.el).append('<button id="StartingListButton">Starting List</button>')
                }
                return this;
            },
            renderStart: function (eventName) {
                console.log("fire!");
                $(this.el).empty();
                $(this.el).html(this.template(this.model.toJSON()));

                var str = '<div id="adText"> <h4 id="startRes" >Starting List</h4><p>start time h: '+this.model.get('hour')+'</p><div id="startListResults"></div></div>';
                $(this.el).append(str);

                var tab = this.model.get("startList");
                var tabForm = $(tab);

                $(this.el).append(tabForm);
                $(this.el).append('<button id="Results">Results</button>');
                return this;
            }

        });
        return AdView;
    });