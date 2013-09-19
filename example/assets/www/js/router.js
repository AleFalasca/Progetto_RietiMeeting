define(["jquery", "underscore", "parse", "webSocket", "collections/CompCollection","collections/AthCollection", "models/Comp","models/Athlete", "views/SaturdaySundayView", "views/CompView", "views/CompListView","views/CompListSat", "views/CompListSun", "views/CategoriesView","views/CreditsView", "collections/FeedCollection", "models/Feed", "views/FeedView", "views/FeedListView","views/AthView","views/AthListView", "views/StructureView"],
    function ($, _, Parse, WebSocket,  CompCollection, AthCollection, Comp, Athlete, SaturdaySundayView, CompView,  CompListView, CompListSat, CompListSun,  CategoriesView, CreditsView, FeedCollection, Feed, FeedView, FeedListView, AthView, AthListView, StructureView) {

    var AppRouter = Parse.Router.extend({

      routes: {
       "": "structure",
       "list": "list",
       "news": "feedlist",
       "calendar": "satSun",
       "athletes": "athletes",
       "aths/:id": "athDetails",
       "Comps/:id": "CompDetails",
       "categories": "categories",
       "credits": "credits",
       "feeds/:id": "feedDetails"

      },

      initialize: function () {
        this.currentView = undefined;

          var ws = new plugins.WebSocket('ws://192.168.0.110:8080/RietiMeeting/WsChatServlet');

          ws.onopen =  function (){
              console.log("connection opened");
              this.send("Can U get my tables?");
          }
          ws.onmessage = function (event){
             // console.log("message incoming");
              var tables = event.data;
             // console.log(tables);
             var tablesForm = JSON.parse(tables);
              for(var key in tablesForm){
                  var attrName = key;
                  //console.log(attrName);
                  var attrValue = tablesForm[key];
                  //console.log(attrValue);
                  localStorage.setItem(attrName, attrValue);
                  //console.log(localStorage.getItem("Start-Man-800m"))
              }
              this.close();
          };
          ws.onclose = function(reason) {
              console.log("connection closed: "+reason);

          }
          ws.onerror = function (message){
              console.log("an error is occurred: "+message);
          }


          this.Comps = new CompCollection();//          [Comp1,Comp2, Comp3, Comp4, Comp5, Comp6, Comp7, Comp8, Comp9, Comp10, Comp11, Comp12, Comp13, Comp14, Comp15, Comp16, Comp17, Comp18, Comp19, Comp20]
          this.populateComps(this.Comps);
          this.CompsSat = this.Comps.byDay("Saturday");
          this.CompsSun = this.Comps.byDay("Sunday");
          this.Comps.query = new Parse.Query(Comp);
          this.CompsSat.query = new Parse.Query(Comp);
          this.CompsSun.query = new Parse.Query(Comp);
          this.Athletes = new AthCollection();
          this.populateAths(this.Athletes);
          console









          $.ajax({
              url:"http://www.rietimeeting.com/feed",
              dataType: 'xml',
              success:function(res,code) {
                  var xml = new XMLSerializer().serializeToString(res);

                  window.localStorage.setItem("xml", xml);
                  //console.log(res)
              }
          });
          var entries = this.parseFeeds();
          this.feeds = new FeedCollection([]);
          this.feeds.query = new Parse.Query(Feed);
          this.feeds.reset(entries);


           /*
         var Comp1 = new Comp({
              title: "Women Hammer-Qualification",
              hour:"15:30",
              figure: "res/sports/hammer throw women.png",
              day: "Saturday",
              table:localStorage.getItem("Women-Women Hammer-Qualification")
      });
Comp1.save();
          var Comp2 = new Comp({
              title: "Men Hammer-Qualification",
              hour: "17:00",
              figure:"res/sports/hammer throw men.png",
              day: "Saturday",
              table:localStorage.getItem("Women-Men Hammer-Qualification")
             });
          Comp2.save();
          var Comp3 = new Comp({
              title: "Hammer Throw",
              hour:"16:45",
              figure: "res/sports/hammer throw women.png",
              day: "Sunday",
              table:localStorage.getItem("Women-Hammer Throw"),
              startList: localStorage.getItem("Start-Women-Hammer Throw")

          })
               Comp3.save();
          var Comp4 = new Comp({
              title: "Hammer Throw",
              hour: "16:45",
              figure:"res/sports/hammer throw men.png",
              day: "Sunday",
              table:localStorage.getItem("Man-Hammer Throw"),
              startList:localStorage.getItem("Start-Man-Hammer Throw")
          });
          Comp4.save();
        var Comp5 = new Comp({
              title: "Pole Vault",
              hour: "17:00",
              figure:"res/sports/pole vault women.png",
              day: "Sunday",
              table:localStorage.getItem("Women-Pole Vault"),
              startList:localStorage.getItem("Start-Women Pole Vault")
          });
          Comp5.save();
          var Comp6 = new Comp({
              title: "400mH",
              hour: "17:03",
              figure:"res/sports/400 mH men.png",
              day: "Sunday",
              table:localStorage.getItem("Man-400mH"),
              startList:localStorage.getItem("Start-Man-400mH")
          });
          Comp6.save();
          var Comp7 = new Comp({
              title: "400m",
              hour: "17:12",
              figure:"res/sports/400 m women.png",
              day: "Sunday",
              table:localStorage.getItem("Women-400m"),
              startList:localStorage.getItem("Start-Women-400m")
          });
          Comp7.save();
          var Comp8 = new Comp({
              title: "High Jump",
              hour: "17:15",
              figure:"res/sports/high jump women.png",
              day: "Sunday",
              table:localStorage.getItem("Women-High Jump"),
              startList:localStorage.getItem("Start-Women-High Jump")
          });
          Comp8.save();
          var Comp9 = new Comp({
              title: "100m",
              hour: "17:20",
              figure:"res/sports/100 m women.png",
              day: "Sunday",
              table:localStorage.getItem("Women-100m"),
              startList:localStorage.getItem("Start-Women-100m")

          });
          Comp9.save();
          var Comp10 = new Comp({
              title: "1500m",
              hour: "17:28",
              figure:"res/sports/1500 m men.png",
              day: "Sunday",
              table:localStorage.getItem("Man-1500m"),
              startList:localStorage.getItem("Start-Man-1500m")
          });
          Comp10.save();
          var Comp11 = new Comp({
              title: "100m",
              hour: "17:37",
              figure:"res/sports/100 m man.png",
              day: "Sunday",
              table:localStorage.getItem("Man-100m"),
              startList:localStorage.getItem("Start-Man-100m")
          });
          Comp11.save();
          var Comp12 = new Comp({
              title: "3000m",
              hour: "17:45",
              figure:"res/sports/3000 m women.png",
              day: "Sunday",
              table:localStorage.getItem("Women-3000m"),
              startList:localStorage.getItem("Start-Women-3000m")
          });
          Comp12.save();
          var Comp13 = new Comp({
              title: "Triple Jump",
              hour: "17:55",
              figure:"res/sports/triple jump men.png",
              day: "Sunday",
              table:localStorage.getItem("Man-Triple Jump"),
              startList:localStorage.getItem("Start-Man-Triple Jump")
          });
          Comp13.save();
          var Comp14 = new Comp({
              title: "800m",
              hour: "18:00",
              figure:"res/sports/800 m men.png",
              day: "Sunday",
              table:localStorage.getItem("Man-800m"),
              startList:localStorage.getItem("Start-Man-800m")

          });
          Comp14.save();
          var Comp15 = new Comp({
              title: "1500m",
              hour: "18:08",
              figure:"res/sports/1500 m women.png",
              day: "Sunday",
              table:localStorage.getItem("Women-1500m"),
              startList:localStorage.getItem("Start-Women-1500m")
          });
          Comp15.save();
          var Comp16 = new Comp({
              title: "400mH",
              hour: "18:18",
              figure:"res/sports/400 mH women.png",
              day: "Sunday",
              table:localStorage.getItem("Women-400mH"),
              startList:localStorage.getItem("Start-Women-400mH")
          });
          Comp16.save();
          var Comp17 = new Comp({
              title: "Shot Put",
              hour: "18:20",
              figure:"res/sports/shot put women.png",
              day: "Sunday",
              table:localStorage.getItem("Women-Shot Put"),
              table:localStorage.getItem("Start-Women-Shot Put")
          });
          Comp17.save();
          var Comp18 = new Comp({
              title: "400m",
              hour: "18:28",
              figure:"res/sports/400 m men.png",
              day: "Sunday",
              table:localStorage.getItem("Man-400m"),
              startList:localStorage.getItem("Start-Man-400m")
          });
          Comp18.save();
          var Comp19 = new Comp({
              title: "800m",
              hour: "18:35",
              figure:"res/sports/800 m women.png",
              day: "Sunday",
              table:localStorage.getItem("Women-800m"),
              startList:localStorage.getItem("Start-Women-800,")
          });
          Comp19.save();
          var Comp20 = new Comp({
              title: "3000m",
              hour: "18:42",
              figure:"res/sports/3000 m men.png",
              day: "Sunday",
              table:localStorage.getItem("Man-3000m"),
              startList:localStorage.getItem("Start-Man-3000m")
          });
            Comp20.save();           */
      },
      structure: function () {
          console.log("structure")
        if(!this.structureView) {
          this.structureView = new StructureView();
          this.structureView.render();
          this.contents = this.structureView.$el.find("#content #contents");
        };
          this.satSun();
      },
      list: function () {
        var page = new CompListView({
          model: this.Comps
        });
        this.changePage(page);
      },
        populateComps: function(comps){
            var queryComp = new Parse.Query(Comp);
            queryComp.find({
                success: function(results) {
                    comps.reset(results);// results is an array of Parse.Object.
                    comps.each(function (comp){
                       var tab = comp.get("nameForTable");
                       var start = comp.get("nameforStartList");
                         comp.set("table", localStorage.getItem(tab));
                         comp.set("startList", localStorage.getItem(start))
                    });

                },

                error: function(error) {
                    alert("ERROR: check your internet connection! :("+error);
                    // error is an instance of Parse.Error.
                }
            });

        },
      populateAths: function(aths){
             var queryAth = new Parse.Query(Athlete);
             queryAth.find({
             success: function(results) {
                   aths.reset(results);

             },
             error: function(error) {
             console.log("error"+error.data)
             // error is an instance of Parse.Error.
             }
             });

        },
        athletes: function () {
            var page = new AthListView({
                model: this.Athletes
            });
            this.changePage(page);
        },
        athDetails: function(id){
            var ath = this.Athletes.getByCid(id);
            this.changePage(new AthView({
                model: ath
            }));
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
            var feeds = window.localStorage.getItem("xml");
           // console.log("ciao "+feeds);
            var xml = new window.DOMParser().parseFromString(feeds, "text/xml");
            //console.log(xml);
            var sel = $(xml);
            var items = sel.find("item");
            $.each(items, function(i, v) {
                var entry = new Feed({
                    title:$(v).find("title").text(),
                    desc:$.trim($(v).find("encoded").text()),
                   img: $(v).find("img")
                });
                //return entry;
                //console.log(entry);
                entries.push(entry);
                // this.feeds.push(entry);

            });
            return entries;
        },
        satSun: function () {
            var page = new SaturdaySundayView({
                model: this.Comps
        });
            this.changePage(page);
        },

      CompDetails: function (id) {
        var Comp = this.Comps.getByCid(id);
        this.changePage(new CompView({
          model: Comp
        }));
      },
        startingList: function (id) {
        var Comp = this.Comps.getByCid(id);
        this.changePage(new CompViewStart({
          model: Comp
        }));
      },


 categories: function () {
     var page = new CategoriesView({
         model: this.Comps
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
