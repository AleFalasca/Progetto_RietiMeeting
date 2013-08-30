define(["jquery", "underscore", "parse", "collections/AdCollection", "models/Ad", "views/AdView", "views/AdListView","views/AdListSat", "views/AdListSun", "views/CategoriesView","views/CreditsView", "collections/FeedCollection", "models/Feed", "views/FeedView", "views/FeedListView", "views/StructureView"],
    function ($, _, Parse, AdCollection, Ad, AdView, AdListView, AdListSat, AdListSun,  CategoriesView, CreditsView, FeedCollection, Feed, FeedView, FeedListView, StructureView) {

    var AppRouter = Parse.Router.extend({

      routes: {
       "": "structure",
       "list": "list",
       "news": "feedlist",
       "calendar": "list",
       "ads/:id": "adDetails",
       "categories": "categories",
       "credits": "credits",
       "feedDetails": "feedDetails"
      },

      initialize: function () {
        this.currentView = undefined;
          $.ajax({
              url:"http://www.rietimeeting.com/feed",
              dataType: 'xml',
              success:function(res,code) {
                  var xml = new XMLSerializer().serializeToString(res);
                  //console.log(xml);
                  window.sessionStorage.setItem("xml", xml);
              }
          });
          var entries = this.parseFeeds();
          this.feeds = new FeedCollection([]);
          this.feeds.query = new Parse.Query(Feed);
          this.feeds.reset(entries);
        var ws = new WebSocket("ws://localhost:8080/RietiMeeting/WsChatServlet");
          ws.onopen =  function (){
              console.log("connection opened");
              ws.send("Can U get my tables?");
          }

          ws.onclose = function() {
              console.log("connection closed");
          }
          ws.onerror = function (){
              console.log("an error is occurred");
          }
          ws.onmessage = function (event){
             console.log("message incoming: "+event.data);
              var tables = event.data;
              var tablesForm = JSON.parse(tables);
              for(var key in tablesForm){
                  var attrName = key;
                  var attrValue = tablesForm[key];
                  sessionStorage.setItem(attrName, attrValue);
              }
          }

         var ad1 = new Ad({
              title: "Women Hammer-Qualification",
              hour:"15:30",
              figure: "res/sports/hammer throw women.png",
              day: "Saturday",
              nameForWs: "Man-100m",
              table:sessionStorage.getItem("Women-Women Hammer-Qualification")
      });

             var ad2 = new Ad({
              title: "Men Hammer-Qualification",
              hour: "17:00",
              figure:"res/sports/hammer throw men.png",
              day: "Saturday",
              table:sessionStorage.getItem("Women-Men Hammer-Qualification")
              });
          var ad3 = new Ad({
              title: "Hammer Throw",
              hour:"16:45",
              figure: "res/sports/hammer throw women.png",
              day: "Sunday",
              table:sessionStorage.getItem("Women-Hammer Throw")
              })

          var ad4 = new Ad({
              title: "Hammer Throw",
              hour: "16:45",
              figure:"res/sports/hammer throw men.png",
              day: "Sunday",
              table:sessionStorage.getItem("Man-Hammer Throw")
          });
        var ad5 = new Ad({
              title: "Pole Vault",
              hour: "17:00",
              figure:"res/sports/pole vault women.png",
              day: "Sunday",
              table:sessionStorage.getItem("Women-Pole Vault")
          });
          var ad6 = new Ad({
              title: "400mH",
              hour: "17:03",
              figure:"res/sports/400 mH men.png",
              day: "Sunday",
              table:sessionStorage.getItem("Man-400mH")
          });
          var ad7 = new Ad({
              title: "400m",
              hour: "17:12",
              figure:"res/sports/400 m women.png",
              day: "Sunday",
              table:sessionStorage.getItem("Women-400m")

          });
          var ad8 = new Ad({
              title: "High Jump",
              hour: "17:15",
              figure:"res/sports/high jump women.png",
              day: "Sunday",
              table:sessionStorage.getItem("Women-High Jump")
          });
          var ad9 = new Ad({
              title: "100m",
              hour: "17:20",
              figure:"res/sports/100 m women.png",
              day: "Sunday",
              table:sessionStorage.getItem("Women-100m")

          });
          var ad10 = new Ad({
              title: "1500m",
              hour: "17:28",
              figure:"res/sports/1500 m men.png",
              day: "Sunday",
              table:sessionStorage.getItem("Man-1500m")


          });
          var ad11 = new Ad({
              title: "100m",
              hour: "17:37",
              figure:"res/sports/100 m man.png",
              day: "Sunday",
              table:sessionStorage.getItem("Man-100m")

          });
          var ad12 = new Ad({
              title: "3000m",
              hour: "17:45",
              figure:"res/sports/3000 m women.png",
              day: "Sunday",
              table:sessionStorage.getItem("Women-3000m")

          });
          var ad13 = new Ad({
              title: "Triple Jump",
              hour: "17:55",
              figure:"res/sports/triple jump men.png",
              day: "Sunday",
              table:sessionStorage.getItem("Man-Triple Jump")

          });
          var ad14 = new Ad({
              title: "800m",
              hour: "18:00",
              figure:"res/sports/800 m men.png",
              day: "Sunday",
              table:sessionStorage.getItem("Man-800m")

          });
          var ad15 = new Ad({
              title: "1500m",
              hour: "18:08",
              figure:"res/sports/1500 m women.png",
              day: "Sunday",
              table:sessionStorage.getItem("Women-1500m")
          });
          var ad16 = new Ad({
              title: "400mH",
              hour: "18:18",
              figure:"res/sports/400 mH women.png",
              day: "Sunday",
              table:sessionStorage.getItem("Women-400mH")
          });
          var ad17 = new Ad({
              title: "Shot Put",
              hour: "18:20",
              figure:"res/sports/shot put women.png",
              day: "Sunday",
              table:sessionStorage.getItem("Women-Shot Put")
          });
          var ad18 = new Ad({
              title: "400m",
              hour: "18:28",
              figure:"res/sports/400 m men.png",
              day: "Sunday",
              table:sessionStorage.getItem("Man-400m")
          });
          var ad19 = new Ad({
              title: "800m",
              hour: "18:35",
              figure:"res/sports/800 m women.png",
              day: "Sunday",
              table:sessionStorage.getItem("Women-800m")
          });
          var ad20 = new Ad({
              title: "3000m",
              hour: "18:42",
              figure:"res/sports/3000 m men.png",
              day: "Sunday",
              table:sessionStorage.getItem("Man-3000m")

          })

        this.ads = new AdCollection([ad1,ad2, ad3, ad4, ad5, ad6, ad7, ad8, ad9, ad10, ad11, ad12, ad13, ad14, ad15, ad16, ad17, ad18, ad19, ad20]);
      //  this.adsSat = this.ads.byDay("Saturday");
       // this.adsSun = this.ads.byDay("Sunday");
        this.ads.query = new Parse.Query(Ad);
       // this.adsSat.query = new Parse.Query(Ad);
       // this.adsSun.query = new Parse.Query(Ad);
      },
      structure: function () {
        if(!this.structureView) {
          this.structureView = new StructureView();
          this.structureView.render();
          this.contents = this.structureView.$el.find("#content #contents");
        }
        this.listSat();
      },
      list: function () {
        var page = new AdListView({
          model: this.ads
        });
        this.changePage(page);
      },
        feedlist: function () {
            var page = new FeedListView({
                model: this.feeds
            });
            this.changePage(page);
        },
        feedDetails: function (id) {
            var feed = this.feeds.getByCid(id);
            this.changePage(new FeedView({
                model: feed
            }));
        },
        parseFeeds: function () {
            var entries = []
            var feeds = window.sessionStorage.getItem("xml");
            // console.log("ciao "+feeds);
            var xml = new window.DOMParser().parseFromString(feeds, "text/xml");
            //console.log(xml);
            var sel = $(xml);
            var items = sel.find("item");
            $.each(items, function(i, v) {
                entry = new Feed({
                    title:$(v).find("title").text(),
                    desc:$.trim($(v).find("encoded").text())
                });
                //return entry;
                //console.log(entry);
                entries.push(entry);
                // this.feeds.push(entry);
            });
            return entries;
        },
        listSat: function () {
            var page = new AdListSat({
                model: this.ads
                       });
            this.changePage(page);
        },
        listSun: function () {
            var page = new AdListSun({
                model: this.adsSun
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
