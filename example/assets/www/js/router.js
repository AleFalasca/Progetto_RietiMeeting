define(["jquery", "underscore", "parse", "collections/AdCollection", "models/Ad", "views/AdView", "views/AdListView", "views/NewsView","views/CategoriesView", "views/StructureView"],
    function ($, _, Parse, AdCollection, Ad, AdView, AdListView, NewsView,CategoriesView, StructureView) {

    var AppRouter = Parse.Router.extend({

      routes: {
       "": "structure",
        "list": "list",
        "news": "news",
        "calendar": "list",
        "ads/:id": "adDetails",
         "categories": "categories"
      },

      initialize: function () {
        this.currentView = undefined;
         var ad1 = new Ad({
              title: "Hammer Throw women - Qualification",
              hour:"15:30",
              figure: "res/sports/hammer throw women.png",
              day: "Saturday"
          });
          var ad2 = new Ad({
              title: "Hammer Throw men - Qualification",
              hour: "17:00",
              figure:"res/sports/hammer throw men.png",
              day: "Saturday"
          });
          var ad3 = new Ad({
              title: "Hammer Throw Pig",
              hour: "28:00",
              figure:"res/sports/hammer throw men.png",
              day: "Saturday"
          });
          var ad4 = new Ad({
              title: "Hammer Throw Cow - Qualification",
              hour: "17:00",
              figure:"res/sports/hammer throw men.png",
              day: "Saturday"
          });

        this.ads = new AdCollection([ad1, ad2, ad3, ad4]);
        this.ads.query = new Parse.Query(Ad);
      },

      structure: function () {
        if(!this.structureView) {
          this.structureView = new StructureView();
          this.structureView.render();
          this.contents = this.structureView.$el.find("#content #contents");
        }
        this.list();
      },

      list: function () {
        var page = new AdListView({
          model: this.ads
        });
        this.changePage(page);
      },

     

      adDetails: function (id) {
        var ad = this.ads.getByCid(id);
        this.changePage(new AdView({
          model: ad
        }));
      },
 categories: function () {
          var page = new CategoriesView ({
          })
          this.changePage(page)
      },
       news: function () {
          var page = new NewsView ({
          })
          this.changePage(page)
      },
       changePage: function (page) {
        if(this.currentView) {
           this.currentView.remove();
           this.currentView.off();
        }
        this.currentView = page;
        page.render();
        this.contents.append($(page.el));
        this.currentView.trigger("inTheDom");
      }

    });

    return AppRouter;

  });
