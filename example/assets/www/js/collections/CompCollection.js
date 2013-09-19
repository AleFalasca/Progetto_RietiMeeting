define(["jquery", "underscore", "parse", "models/Comp"],
    function ($, _, Parse, Comp) {
        var CompCollection = Parse.Collection.extend({
            model: Comp,
            byDay: function(day) {
                filtered = this.filter(function(Comp) {
                    return Comp.get("day") === day;
                });
                return new CompCollection(filtered);
            }
        });
        return CompCollection;
    });