define(["jquery", "underscore", "parse", "handlebars", "text!templates/ad-details.html"],
    function ($, _, Parse, Handlebars, template) {

    var AdView = Parse.View.extend({

        tagName: "div",
        id: "startListResults",


        template: Handlebars.compile(template),

        render: function (eventName) {

            $(this.el).html(this.template(this.model.toJSON()));
            var tab = this.model.get("table");
            var htmlObject = document.createElement('div');
            htmlObject.innerHTML = tab;
            console.log(htmlObject.innerHTML);
            $(htmlObject.innerHTML).appendTo(this.el);
            return this;
        }
      });
    return AdView;
  });