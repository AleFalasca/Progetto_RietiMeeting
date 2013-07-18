define(["jquery", "underscore", "parse", "collections/AdCollection", "models/Ad", "views/AdView", "views/AdListView", "views/NewsView","views/CategoriesView","views/CreditsView" ,"views/StructureView"],
    function ($, _, Parse, AdCollection, Ad, AdView, AdListView, NewsView, CategoriesView, CreditsView,StructureView) {

    var AppRouter = Parse.Router.extend({

      routes: {
       "": "structure",
       "list": "list",
       "news": "news",
       "calendar": "list",
       "ads/:id": "adDetails",
       "categories": "categories",
       "goPhotofinish": "photofinish",
       "credits": "credits",
       "feedDetails": "feedDetails"
      },

      initialize: function () {
        this.currentView = undefined;

         var ad1 = new Ad({
              title: "Hammer Throw women - Qualification",
              hour:"15:30",
              figure: "res/sports/hammer throw women.png",
              photofinish: "http://localhost/Progetto_RietiMeeting/results/1010040.jpg",
              day: "Saturday"

          });
          var ad2 = new Ad({
              title: "Hammer Throw men - Qualification",
              hour: "17:00",
              figure:"res/sports/hammer throw men.png",
              photofinish:"http://www.rietimeeting.com/wp-content/uploads/results/1010040.jpg",
              day: "Saturday"

          });
          var ad3 = new Ad({
              title: "100 m Man",
              hour: "28:00",
              figure:"res/sports/100 m man.png",
              day: "Sunday",
              photofinish: "http://localhost/Progetto_RietiMeeting/results/1010040.jpg",              startingListUrl:"http://www.rietimeeting.com/wp-content/uploads/results/sh0010040.html",
              resultsUrl: "http://www.rietimeeting.com/wp-content/uploads/results/re0010040.html"

          });
          var ad4 = new Ad({
              title: "Hammer Throw Cow - Qualification",
              hour: "17:00",
              figure:"res/sports/hammer throw men.png",
              photofinish: "http://localhost/Progetto_RietiMeeting/results/1010040.jpg",
              day: "Saturday"
          });
          var ad5 = new Ad({
              title: "Hammer Throw Cow - Qualification",
              photofinish: "http://localhost/Progetto_RietiMeeting/results/1010040.jpg",
              hour: "17:00",
              figure:"res/sports/hammer throw men.png",
              day: "Saturday"
          });
          var ad6 = new Ad({
              title: "Hammer Throw Cow - Qualification",
              hour: "17:00",
              figure:"res/sports/hammer throw men.png",
              photofinish: "http://localhost/Progetto_RietiMeeting/results/1010040.jpg",
              day: "Saturday"
          });
          var ad7 = new Ad({
              title: "Hammer Throw Cow - Qualification",
              hour: "17:00",
              figure:"res/sports/hammer throw men.png",
              photofinish: "http://localhost/Progetto_RietiMeeting/results/1010040.jpg",
              day: "Saturday"
          });
          var ad8 = new Ad({
              title: "Hammer Throw Cow - Qualification",
              hour: "17:00",
              figure:"res/sports/hammer throw men.png",
              photofinish: "http://localhost/Progetto_RietiMeeting/results/1010040.jpg",
              day: "Saturday"
          });
          var ad9 = new Ad({
              title: "Hammer Throw Cow - Qualification",
              hour: "17:00",
              figure:"res/sports/hammer throw men.png",
              photofinish: "http://localhost/Progetto_RietiMeeting/results/1010040.jpg",
              day: "Saturday"
          });
          var ad10 = new Ad({
              title: "Hammer Throw Cow - Qualification",
              hour: "17:00",
              figure:"res/sports/hammer throw men.png",
              photofinish: "http://localhost/Progetto_RietiMeeting/results/1010040.jpg",
              day: "Saturday"
          });
          var ad11 = new Ad({
              title: "Hammer Throw Cow - Qualification",
              hour: "17:00",
              figure:"res/sports/hammer throw men.png",
              photofinish: "http://localhost/Progetto_RietiMeeting/results/1010040.jpg",
              day: "Saturday"
          });
          var ad12 = new Ad({
              title: "Hammer Throw Cow - Qualification",
              hour: "17:00",
              figure:"res/sports/hammer throw men.png",
              photofinish: "http://localhost/Progetto_RietiMeeting/results/1010040.jpg",
              day: "Saturday"
          });
          var ad13 = new Ad({
              title: "Hammer Throw Cow - Qualification",
              hour: "17:00",
              figure:"res/sports/hammer throw men.png",
              photofinish: "http://localhost/Progetto_RietiMeeting/results/1010040.jpg",
              day: "Saturday"
          });
          var ad14 = new Ad({
              title: "Hammer Throw Cow - Qualification",
              hour: "17:00",
              figure:"res/sports/hammer throw men.png",
              photofinish: "http://localhost/Progetto_RietiMeeting/results/1010040.jpg",
              day: "Saturday"
          });
          var ad15 = new Ad({
              title: "Hammer Throw Cow - Qualification",
              hour: "17:00",
              figure:"res/sports/hammer throw men.png",
              photofinish:"http://www.rietimeeting.com/wp-content/uploads/results/1010040.jpg",
              day: "Saturday"
          });
          var ad16 = new Ad({
              title: "Hammer Throw Cow - Qualification",
              hour: "17:00",
              figure:"res/sports/hammer throw men.png",
              photofinish: "http://localhost/Progetto_RietiMeeting/results/1010040.jpg",
              day: "Saturday"
          });
          var ad17 = new Ad({
              title: "Hammer Throw Cow - Qualification",
              hour: "17:00",
              figure:"res/sports/hammer throw men.png",
              photofinish:"http://www.rietimeeting.com/wp-content/uploads/results/1010040.jpg",
              day: "Saturday"
          });
          var ad18 = new Ad({
              title: "Hammer Throw Cow - Qualification",
              hour: "17:00",
              figure:"res/sports/hammer throw men.png",
              photofinish:"http://www.rietimeeting.com/wp-content/uploads/results/1010040.jpg",
              day: "Saturday"
          });
        this.ads = new AdCollection([ad1, ad2, ad3, ad4, ad5, ad6, ad7, ad8, ad9, ad10, ad11, ad12, ad13, ad14, ad15, ad16, ad17, ad18]);
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
     var page = new CategoriesView({
         model: this.ads
     });
     this.changePage(page);
 },
       news: function () {
          var page = new NewsView ({
          })
          this.changePage(page)
      },
        credits: function () {
            var page = new CreditsView({
            });
            this.changePage(page);
        },
        photofinish: function (){
         var page = new PhotofinishView({
         });
         this.changePage(page);
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
