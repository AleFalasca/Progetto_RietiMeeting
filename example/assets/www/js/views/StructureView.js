define(["jquery", "underscore", "parse", "handlebars", "text!templates/structure.html"],
    function ($, _, Parse, Handlebars, template) {

    var StructureView = Parse.View.extend({

        id: "mainContainer", 

        events: {
          "touchend #calendar": "goCalendar",
          "touchend #news": "goNews",
          "touchend #categories": "goCategories",
          "touchend #credits": "goCredits"
        },

        goNews: function () {
          Parse.history.navigate("news", {trigger: true});
        },

        goBack: function () {
          window.history.back();
        },

        template: Handlebars.compile(template),


        render: function () {
          this.title = "IAAF World Challenge - Rieti 2012 - Meeting #42";
          $(this.el).html(this.template({"title": this.title}));
          $('body').append($(this.el));
          return this;
        },
        goCalendar: function () {
            Parse.history.navigate("calendar", {trigger: true});
        },
        goCategories: function () {
            Parse.history.navigate("categories", {trigger: true});
        },
        goCredits: function (){
            Parse.history.navigate("credits", {trigger: true});
        }
      });
    return StructureView;

  }); 